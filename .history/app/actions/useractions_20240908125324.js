"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "@/db/connectDb"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })
    
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    
    let x = await instance.orders.create(options)

    //create a payment object which shows the pending payment in the database
    await Payment.create({oid: x.id, amount: amount, to_username: to_username, name: pa})


}