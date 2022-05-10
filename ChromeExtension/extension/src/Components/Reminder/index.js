import React from 'react'
import "./index.css"

export default function Reminder() {
    const reminder = [
        "哥哥要好好休息! 不要太累啦",
        "哥哥涂没涂护手霜？！没涂快去涂，手太干的话妹妹会心疼的❤️",
        "哥哥不要一直学啦，休息一下吧",
        "好喜欢哥哥哦",
        "最爱哥哥啦",
        "么么么么么么么",
        "哥哥看到这一条说明我想哥哥啦，给我发个消息吧～",
        "哥哥要好好吃饭哦，不要一直学得忘记啦",
        "我最爱大宝贝啦",
        "最爱哥哥啦",
        "可以给我看看小宝贝嘛👀求求哥哥啦",
        "哥哥看到这一条说明我想哥哥啦，给我发个消息吧～",
        "今天也超级喜欢哥哥的一天哦",
        "哥哥记得涂一下护手霜哦～爱你",
        "最爱哥哥啦",
        "想和哥哥啪啪啪啦(* /ω＼*)",
        "哥哥看到这一条说明我想哥哥啦，给我打个电话吧啵啵啵",
        "棒棒棒棒棒棒",
        "哥哥今天也很厉害哦～",
        "哥哥多休息一下哦！千万不许累到！",
        "哥哥看到这一条说明我想哥哥啦，给我打个电话吧么么哒",
        "哥哥今天休息的好嘛～",
        "哥哥多休息一下哦！千万不许累到！",
        "宝贝今天睡得好嘛？想你了哦",
    ]

    const [word, setWord] = React.useState("")
    const [displaySur, setDisplaySur] = React.useState(true)

    const handleClick = () => {
        setWord(reminder[getRandomInt(reminder.length)]);
        setDisplaySur(false);
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <div id="showReminding" onClick={handleClick}>
            {word === "" ? reminder[getRandomInt(reminder.length)] : word}
            <p style={{ color: "#b8a5ff", textAlign: "end", fontSize: "12px", margin: "0", display: displaySur ? "block" : "none" }}>点击文字有惊喜哦</p>
        </div>
    )
}
