'use client';
import { useState } from "react"

export default function User() {
    const [style, setStyle] = useState({});
    return <>
        <div>
            <h1 style={{ backgroundColor: "black", color: "white" }}>This is User Page</h1>
            <h2 style={style}>This is heading 2</h2>
            <button onClick={() => setStyle({ backgroundColor: 'lightblue', color: 'black', padding: '3px' })}>Update heading 2 style</button>
        </div>
    </>
}