import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async(req) =>{
    await connectDb();
    let body = await req.formData()
    body = object.fromEntries(body)

    //check if razorpay orderid is present on the server
    let p = await payment.findOne({oid: body.razorpay_order_id})

    if(!p)
    {
        return NextResponse.error("Order id not found")

    }

    //verify the payment
    let xx = 
}