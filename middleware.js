import { NextResponse } from "next/server"

export function middleware(request){
    // return NextResponse.redirect(new URL('/', request.url))
    console.log('hello there')
}

export const config = {
    matcher:['/about/:path*', '/tasks/:path*']
}