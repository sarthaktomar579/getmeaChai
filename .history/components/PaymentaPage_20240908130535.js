"use client"
import React from 'react'
import Script from 'next/script'

const PaymentaPage = () => {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <Script>
        {`var options = {
          "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp", //your business name
        "deScription": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the id obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
        "notes": {
          "address": "Razorpay Corporate Office"
    },
        "theme": {
          "color": "#3399cc"
    }
};
        var rzp1 = new Razorpay(options);
        document.getElementById('rzp-button1').onclick = function(e){
          rzp1.open();
        e.preventDefault();
}`}
      </Script>


      <div className='info flex flex-col justify-center gap-1 items-center my-20'>

        <div className='font-bold text-lg'>
          @{params.username}
        </div>

        <div className='text-slate-400'>
          Creating premium audio content
        </div>

        <div className='text-slate-400'>
          59,764 members1,061 posts
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 rounded-lg bg-slate-900 text-white py-5 px-8">
            {/* show the list of all the supporters as a leaderboard*/}

            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.png" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50 </span>with a message "I support you, lots of ❤️"</span>
              </li>
              
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.png" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50 </span>with a message "I support you, lots of ❤️"</span>
              </li>
              
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.png" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50 </span>with a message "I support you, lots of ❤️"</span>
              </li>
              
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.png" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50 </span>with a message "I support you, lots of ❤️"</span>
              </li>
              
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.png" alt="user avatar" />
                <span>Akash donated <span className='font-bold'>$50 </span>with a message "I support you, lots of ❤️"</span>
              </li>
              

            </ul>

          </div>

          <div className="supporters w-1/2 rounded-lg bg-slate-900 text-white py-5 px-10">
            <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
            <div className="flex flex-col gap-2">

              <div>
                <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Name' />
              </div>

              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full rounded-lg p-3 bg-slate-800' placeholder='Enter Amount' />

              <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>

            <div className="mt-5 flex gap-2">
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $50</button>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default PaymentaPage