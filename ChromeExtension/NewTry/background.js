/*global chrome*/

let timerID;
let timerTime;
let timerStartOrNot = false;
let remainingTime = 90;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // getTitle to know what website it is
    if (request.cmd === 'getTitle') {
        sendResponse({ title: document.title });

    } else if (request.cmd === "checkTimer") {
        // check timer is started or not
        console.log("we check timer here");
        sendResponse({ timerStartOrNot: timerStartOrNot });
    } else if (request.cmd === 'startTimer') {
        // start timer here
        console.log("we start timer here");
        timerStartOrNot = true;
        sendResponse({ timerStartOrNot: true })
        // timerID = setTimeout(() => {
        //     // sendResponse({ alert: "Time's up" })
        //     console.log("?????");
        // }, 10000); // 1hour = 3600000ms
        setInterval(() => {
            console.log("is it still working?");
            remainingTime = remainingTime - 1;
        }, 1000)

    } else if (request.cmd === 'checkRemaining') {
        console.log("checked remaining?");
        sendResponse({ remainingTime: remainingTime })

    } else if (request.cmd === "stopTimer") {
        // stop timer here

        console.log("we stop timer here");
        clearTimeout(timerID);
        remainingTime = 90;
        timerStartOrNot = false;
        sendResponse({ timerStartOrNot: timerStartOrNot })
    }
});


