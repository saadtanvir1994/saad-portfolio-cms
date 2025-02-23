/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const POST = async (_req: NextRequest) => {
  revalidatePath("/services/[...slug]", "page");
  return NextResponse.json({
    message: "Cache revalided successully!",
  });
};