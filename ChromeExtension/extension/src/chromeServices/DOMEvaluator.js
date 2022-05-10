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



// import { DOMMessage, DOMMessageResponse } from '../types';

// Function called when a new message is received
// const messagesFromReactAppListener = (
//     msg: any,
//     sender: chrome.runtime.MessageSender,
//     sendResponse: (response: DOMMessageResponse) => void) => {
//     console.log('[content.js]. Message received', msg);
//     console.log(document);

//     const headlines = Array.from(document.getElementsByTagName<"h1">("h1"))
//         .map(h1 => h1.innerText);

//     console.log(headlines);

//     // Prepare the response object with information about the site
//     const response: DOMMessageResponse = {
//         title: document.title,
//         headlines
//     };

//     sendResponse(response);
// }


// let timerID: any;
// let timerTime: any;
// function messagesFromReactAppListener(request: any, sender: any, sendResponse: any) {
//     if (request.cmd === 'START_TIMER') {
//         timerTime = new Date(request.when);
//         timerID = setTimeout(() => {
//             // the time is app, alert the user.
//         }, timerTime.getTime() - Date.now());
//     } else if (request.cmd === 'GET_TIME') {
//         sendResponse({ time: timerTime });
//     }
// }

// /**
// * Fired when a message is sent from either an extension process or a content script.
// */
// chrome.runtime.onMessage.addListener(messagesFromReactAppListener);