import { NextResponse } from "next/server";

export const runtime = "nodejs"; // force real server

export async function POST(req: Request) {
  const body = await req.json();

  console.log("API RECEIVED:", body); // will appear in Vercel logs

  return NextResponse.json({ received: body });
}
