import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/app/libs/prismadb";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const { userId } = auth();
    const getAllText = await prismadb.analysis.findMany({
      where: {
        userId: userId
      }
    });
    return NextResponse.json({ message: "Success", getAllText }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};


export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { userId } = auth();

    const { text } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const createText = await prismadb.analysis.create({ data: { text, userId } });
    return NextResponse.json({ message: "Success", createText }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};
