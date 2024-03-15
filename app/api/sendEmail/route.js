import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	const response = await req.json();
	console.log(response.data);
	const result = response.data;
	try {
		const data = await resend.emails.send({
			from: "russb.palms.@gmail.com",
			to: [response.data.email],
			subject: "Appointment Booking Confirmation",
			react: EmailTemplate({ result }),
		});
		return NextResponse.json({ data });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
