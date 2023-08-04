'use client';

export default function Lecture({ params }) {
    console.log(params);

    return <>
        <div style={{padding : "2rem"}}>
            <h3>Day: {params.lecture[0]}</h3>
            <h3>Lecture : {params.lecture[1]}</h3>
        </div>
    </>
}