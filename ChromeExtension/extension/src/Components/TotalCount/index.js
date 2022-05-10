import React, { useEffect } from 'react'
import "./index.css"

export default function TotalCount() {
    useEffect(() => {
        setToday(() => Date.now())
    })
    const [today, setToday] = React.useState(Date.now())
    const love = new Date(2019, 4, 11).getTime();
    const loveDays = parseInt((today - love) / 1000 / 60 / 60 / 24);
    return (
        <div id="loveDays">已经在一起{loveDays}天啦</div>
    )
}
