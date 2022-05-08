import React, { useEffect, useState } from 'react';
import { useTimer } from 'use-timer';
import { DOMMessage, DOMMessageResponse } from '../../types';

import "./Timer.css";

export default function Timer() {
    const [title, setTitle] = useState('');
    const [headlines, setHeadlines] = useState([]);
    const [inLeisure, setInLeisure] = useState(false);
    const leisureTitle = ["哔哩哔哩 (゜-゜)つロ 干杯~-bilibili", "Youtube"];
    const [tryy, setTryy] = useState("");

    const { time, start, pause, reset, status } = useTimer({
        initialTime: 30,
        timerType: 'DECREMENTAL',
        endTime: 0,
        onTimeOver: () => {
            alert("Time's UP")
        }
    });


    const startTimer = (time) => {
        if (time.getTime() > Date.now()) {
            setInterval(() => {
                // display the remaining time
            }, 1000)

        }
    }
    const startTime = (time) => {
        chrome.runtime.sendMessage({ cmd: 'START_TIMER', when: time });
        startTimer(time);
    }

    useEffect(() => {
        chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, response => {
            if (response.time) {
                console.log(response.time);
                const time = new Date(response.time);
                // startTimer(time)
            }
        });

    }, [])


    // useEffect(() => {
    //     chrome.tabs && chrome.tabs.query({
    //         active: true,
    //         currentWindow: true
    //     }, tabs => {
    //         chrome.tabs.sendMessage({ cmd: 'GET_TIME' }, response => {
    //             if (response.time) {
    //                 const time = new Date(response.time);
    //                 startTimer(time)
    //             }
    //         });

    //         const startTimer = (time: any) => {
    //             if (time.getTime() > Date.now()) {
    //                 setInterval(() => {
    //                     // display the remaining time
    //                 }, 1000)

    //             }
    //         }

    //         function startTime(time: any) {
    //             chrome.runtime.sendMessage({ cmd: 'START_TIMER', when: time });
    //             startTimer(time);
    //         }
    //     })


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
                <div id="1">{parseInt((time / 60).toString()) == 0 ? "00" : parseInt((time / 60).toString())}</div>
                <div id="colon">:</div>
                <div id="2">{time % 60 == 0 ? "00" : time % 60}</div>
            </div>
            <div id="Btn">
                <button onClick={start}>Resume</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
            <button onClick={start}>Activate your girlfriend reminder</button>
            <div>{title}</div>
            <div>{headlines}</div>

        </>
    )
}