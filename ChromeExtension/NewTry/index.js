const leisureTitle = ["bilibili", "Youtube"];

// display the remaining time
const startTimer = (timing) => {
    // display the remaining time
    setTime((t) => timing - 1);
    setInterval(() => {
        // display the remaining time
        setTime((t) => t - 1);
    }, 1000)
}

const stopTimer = () => {
    setTime(90);
}

chrome.runtime.sendMessage({ cmd: "getTitle" }, function (response) {
    console.log(response);
    // if it's NOT leisure web: bilibili or youtube
    console.log(!leisureTitle.some(v => (response.title).includes(v)));
    if (!leisureTitle.some(v => (response.title).includes(v))) {
        // go start timer or continue the timer
        chrome.runtime.sendMessage({ cmd: 'checkTimer' }, response => {
            console.log(response);
            chrome.storage.sync.set({ timerStartOrNot: response.timerStartOrNot }, function () {
                console.log('Value is set to ');
            });
            if (!response.timerStartOrNot) {// timer not started, meaning: previously is leisure web
                chrome.runtime.sendMessage({ cmd: 'startTimer' })
                chrome.storage.sync.get(['timerStartOrNot'], function (result) {
                    console.log('Value currently is 1' + JSON.stringify(result));
                });
                chrome.storage.sync.set({ timerStartOrNot: true }, function () {
                    console.log('Value is set to 1');
                });
                startTimer(90) // display timer from 9 sec to 0
            } else {
                // else: timer already started and we want it continues, no need to change the display
                chrome.storage.sync.get(['timerStartOrNot'], function (result) {
                    console.log('Value currently is 2' + JSON.stringify(result));
                });
                chrome.runtime.sendMessage({ cmd: 'checkRemaining' }, function (response) {
                    chrome.storage.sync.set({ remainingTime: response.remainingTime }, function () {
                        console.log('Value is set to 2');
                    });
                    console.log(response.remainingTime);
                    startTimer(response.remainingTime);
                })
            }
        });
    } else { // it IS leisure web
        // we go to stop the timer and reset it
        chrome.runtime.sendMessage({ cmd: 'stopTimer' }, response => {
            // make the display to be reseted.
            chrome.storage.sync.set({ timerStartOrNot: false }, function () {
                console.log('Value is set to ');
            });
            stopTimer();
        });
    }
});

