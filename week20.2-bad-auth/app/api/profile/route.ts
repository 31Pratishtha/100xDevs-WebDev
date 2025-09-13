import { NextResponse } from "next/server";

export function GET () {
  return NextResponse.json({
    avatarUrl: "http://images.google.com/cat.png"
  })
}