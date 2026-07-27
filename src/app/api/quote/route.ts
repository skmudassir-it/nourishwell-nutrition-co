import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In a real app, this would send an email, store in DB, etc.
    console.log("Quote request received:", body);

    return NextResponse.json({
      success: true,
      message: "Message received.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
