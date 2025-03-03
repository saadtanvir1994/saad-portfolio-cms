/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { revalidatePage } from "@/lib/actions";

export const POST = async (_req: NextRequest) => {
  await revalidatePage("/blog", "layout");

  return NextResponse.json({ message: "Cache revalidated successfully!" }, { status: 200 });
};