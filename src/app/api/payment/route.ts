import axios from "axios";

export async function POST(request: Request) {
  const { total } = await request.json();
  const response = await axios.post(
    "https://api.nequi.com/-services-paymentservice-generatecodeqr",
    {
      total,
    }
  );

  const qrCode = response.data.qrCode;
  return qrCode;
}
