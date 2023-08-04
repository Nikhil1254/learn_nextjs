'use client';

export default function Student({params}){
    console.log(params);
    return <>
        <h1>Student details</h1>
        <p>Student name: {params.student}</p>
    </>
}