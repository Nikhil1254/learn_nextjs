"use client";

export default function Button({ price, title }) {

    return <>
        <div>
            <button onClick={() => alert(`${title} : $${price}`)}>Check Price</button>
        </div>
    </>
}