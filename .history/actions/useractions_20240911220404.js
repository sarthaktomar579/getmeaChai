"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "@/db/connectDb"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })
    
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    
    let x = await instance.orders.create(options)

    //create a payment object which shows the pending payment in the database
    await Payment.create({oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message})

    return x;
}

    export const fetchuser = async(username)=>{
        await connectDb()
        let u = await User.findOne({username: username})
        let user= u.toObject({flattenObjectIds:true})
        return user
    }

    export const fetchpayments = async(username)=>{
        await connectDb()
        //find all the payments sorted by decreasing order of amount and flatten object ids
        let p = await Payment.find({to_user: username, done:true}).sort({amount: -1}).lean()
        return p
    }

    export const updateProfile = async(data, oldusername)=>{
        await connectDb()
        let ndata = Object.fromEntries(data)

        //if the username is updated check if the username is available
        if(oldusername !== ndata.username)
        {
            let u = await User.findOne({username: ndata.username})
            if(u)
            {
                return{error: "username already exists"}
            }
        }
        
        else
    }

