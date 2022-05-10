/*global chrome*/

import React, { useEffect, useState } from 'react';
import { useTimer } from 'use-timer';
import { DOMMessage, DOMMessageResponse } from '../../types';

import "./Timer.css";

export default function Timer() {
    const [title, setTitle] = useState('');
    const [headlines, setHeadlines] = useState([]);
    const [inLeisure, setInLeisure] = useState(false);
    const leisureTitle = ["bilibili", "Youtube"];
    const [time, setTime] = useState(90);
    const [timerStartOrNot, setTimerStartOrNot] = useState(false);

    // const { time, start, pause, reset, status } = useTimer({
    //     initialTime: 30,
    //     timerType: 'DECREMENTAL',
    //     endTime: 0,
    //     onTimeOver: () => {
    //         alert("Time's UP")
    //     }
    // });

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

    useEffect(() => {
        //background.js
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { cmd: "getTitle" }, function (response) {
                console.log(response);
                // if it's NOT leisure web: bilibili or youtube
                console.log(!leisureTitle.some(v => (response.title).includes(v)));
                if (chrome.storage.sync.get("timerStartOrNot") === true) {
                    alert("we can get storage from anywhere")
                    // // take remaining time
                    // if (!leisureTitle.some(v => (response.title).includes(v))) {
                    //     //stop timer
                    // } else {
                    //     //continue the timer
                    // }

                    // }
                    // } else if (chrome.storage.sync.get("timerStartOrNot") === false) {
                    //     //then continue followup process
                } else { // chrome.storage.sync.get(timerStartedOrNot) is undefined
                    // also do the following step
                    alert("we of course arrived here")
                    if (!leisureTitle.some(v => (response.title).includes(v))) {
                        // go start timer or continue the timer
                        chrome.tabs.sendMessage(tabs[0].id, { cmd: 'checkTimer' }, response => {
                            console.log(response);
                            chrome.storage.sync.set({ timerStartOrNot: response.timerStartOrNot }, function () {
                                console.log('Value is set to ');
                            });
                            if (!response.timerStartOrNot) {// timer not started, meaning: previously is leisure web
                                chrome.tabs.sendMessage(tabs[0].id, { cmd: 'startTimer' })
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
                                chrome.tabs.sendMessage(tabs[0].id, { cmd: 'checkRemaining' }, function (response) {
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
                        chrome.tabs.sendMessage(tabs[0].id, { cmd: 'stopTimer' }, response => {
                            // make the display to be reseted.
                            chrome.storage.sync.set({ timerStartOrNot: false }, function () {
                                console.log('Value is set to ');
                            });
                            stopTimer();

                        });
                    }
                }
            });
        })
    }, [])


    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    //     chrome.tabs && chrome.tabs.query({
    //         active: true,
    //         currentWindow: true
    //     }, tabs => {
    //         /**
    //          * Sends a single message to the content script(s) in the specified tab,
    //          * with an optional callback to run when a response is sent back.
    //          *
    //          * The runtime.onMessage event is fired in each content script running
    //          * in the specified tab for the current extension.
    //          */
    //         console.log(tabs);

    //         console.log("this is tab[0]");
    //         console.log(tabs[0]);

    //         chrome.tabs.sendMessage(
    //             tabs[0].id || 0,
    //             { type: 'GET_DOM' } as DOMMessage,
    //             (response: DOMMessageResponse) => {
    //                 setTitle(response.title);
    //                 setHeadlines(response.headlines);
    //                 // if not in leisure status before, and starts to leisure now
    //                 if (!inLeisure && leisureTitle.includes(response.title)) {
    //                     console.log("you start to take break now");
    //                     // reset the timer
    //                     reset();
    //                     setInLeisure(true);
    //                     // else if in leisure status, go to non-leisure
    //                 } else if (inLeisure && !leisureTitle.includes(response.title)) {
    //                     console.log("you start to study/work now");
    //                     start();
    //                     setInLeisure(false);
    //                 }
    //                 // if not in leisure status, and not start to leisure: do nothing
    //                 // if in leisure status, go to leisure, do nothing 
    //             });
    //     });
    // }, []);

    return (
        <>
            <div id="timer">
                <div id="1">{parseInt((time / 60)) == 0 ? "00" : parseInt((time / 60))}</div>
                <div id="colon">:</div>
                <div id="2">{time % 60 == 0 ? "00" : time % 60}</div>
            </div>
            <div id="Btn">
                <button>Resume</button>
                <button>Pause</button>
                <button>Reset</button>
            </div>
            {/* <button onClick={start}>Activate your girlfriend reminder</button> */}
            <div>{title}</div>
            <div>{headlines}</div>

        </>
    )
}