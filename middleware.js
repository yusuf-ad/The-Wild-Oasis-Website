// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

// // configure all the routes which will be this middleware should work

import { auth } from "@/app/_lib/auth";
import { NextResponse } from "next/server";

// export const middleware = auth;

// export const config = {
//   matcher: ["/account"],
// };

export async function middleware(req) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  if (pathname === "/login" && session?.user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/account") && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
