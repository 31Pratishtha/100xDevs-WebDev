import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prismaClient = new PrismaClient()

export async function POST(req: NextRequest) {

  const data = await req.json();

  await prismaClient.user.create({
    data: {
      username: data.username,
      password: data.password
    }
  })
  
  return NextResponse.json({
    message: 'You have been Signed Up'
  })
}

export async function GET(req: NextRequest) {
  const user = await prismaClient.user.findFirst()

  return NextResponse.json({
    user
  })
}