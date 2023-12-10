import { connectBD } from "@/lib/mongoose";
import { Date } from "@/model/Menu";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const isConnected = await connectBD();

    if (!isConnected) {
      throw new Error("Unable to connect to MongoDB")
    }

    const data = await Date.find();

    if (!data || data.length == 0) {
      return NextResponse.json({ message: "Dates not found" });
    }

    console.log("Date obtained:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al obtener Menu: ", error);
    return NextResponse.json(
      { error: "Error al obtener datos del menú." },
      { status: 500 }
    );
  }
}
