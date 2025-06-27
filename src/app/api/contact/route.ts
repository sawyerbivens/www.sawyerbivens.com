import { createClient } from "@/utils/supabase/server";
import { validate } from "email-validator";
import { NextRequest, NextResponse } from "next/server";

// const ALLOWED_ORIGIN =
//   process.env.NODE_ENV === 'production'
//     ? 'https://sawyerbivens.com'
//     : '*';

// export async function OPTIONS() {
//   return new Response(null, {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
//       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       'Access-Control-Allow-Credentials': 'true',
//     },
//   });
// }

export async function POST(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const email = url.searchParams.get("email");

    const supabase = await createClient();

    if (email !== null && validate(email as string)) {
      const supaRes = await supabase.from("contact-mail-list").insert({
        email,
      });

      return NextResponse.json(supaRes);
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error " },
      { status: 500 },
    );
  }
}
