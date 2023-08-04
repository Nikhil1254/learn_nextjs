import { NextResponse } from "next/server";

export function middleware(req) {

    console.log(req.url);

    return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
    matcher: ["/about/aboutcollege", "/login/loginteacher"]
}