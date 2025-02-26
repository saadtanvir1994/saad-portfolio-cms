/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { regenerateSitemap } from "@/lib/actions";

export const POST = async (_req: NextRequest) => {
  revalidatePath("/about");
  regenerateSitemap();
  return NextResponse.json({
    message: "Cache revalided successully!",
  });
};