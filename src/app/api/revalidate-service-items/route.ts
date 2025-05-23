/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest } from "next/server";
import { revalidatePage } from "@/lib/actions";

export const POST = async (_req: NextRequest) => await revalidatePage("/services/[...slug]", "page");
