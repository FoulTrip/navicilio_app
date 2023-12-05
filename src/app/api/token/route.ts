import axios from "axios";
import { NextResponse } from "next/server";

const ClientId = process.env.NEQUI_CLIENT_ID;
const ClientSecret = process.env.NEQUI_CLIENT_SECRET;

const credentials = Buffer.from(`${ClientId}:${ClientSecret}`).toString(
  "base64"
);

export async function POST() {
  try {
    const nequiRes = await axios.post(
      "https://api.nequi.com/token",
      {
        grant_type: "client_credentials",
      },
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = nequiRes.data.access_token;

    return NextResponse.json({ accessToken });
  } catch (error) {
    // console.log(error)
    return NextResponse.json({ error: "Error al obtener el token de Nequi" });
  }
}
