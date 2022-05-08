let timerID;
let timerTime;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START_TIMER') {
        timerTime = new Date(request.when);
        timerID = setTimeout(() => {
            // the time is app, alert the user.
        }, timerTime.getTime() - Date.now());
    } else if (request.cmd === 'GET_TIME') {
        sendResponse({ time: 0 });
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