import { NextResponse } from "next/server";

import prismadb from "@/app/libs/prismadb";
import { auth } from "@clerk/nextjs";


export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const { userId } = auth();
    const id: number = parseInt(req.url.split("/openai/")[1]);
    const { emotion } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const putEmotion = await prismadb.analysis.update({
      data: { emotion },
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Success", putEmotion }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};
