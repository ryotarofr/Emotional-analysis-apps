import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/analysis/")[1]);

    const getAnalysisById = await prismadb.analysis.findFirst({
      where: {
        id,
      }
    });

    if (!id) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Success", getAnalysisById }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/analysis/")[1]);
    const { text } = await req.json();

    const putAnalysis = await prismadb.analysis.update({
      data: { text },
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Success", putAnalysis }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/analysis/")[1]);

    const deleteAnalysis = await prismadb.analysis.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Success", deleteAnalysis }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prismadb.$disconnect();
  }
};
