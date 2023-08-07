'use client';

import Script from "next/script";

export default function UserDetails(){

    return <>
        <Script src="/getLocation.js"/>
        <h1>User Details :</h1>
    </>
}