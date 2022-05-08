chrome.runtime.sendMessage({ type: "startTimer" }, (response) => {
    console.log(response);
})