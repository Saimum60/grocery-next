import React from 'react'
import { BsGift } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { PiKeyReturnThin } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'

const Delivery = () => {
  return (
    <div className='bg-[#F1F1F1]'>
        <div className='container py-4 pb-15 '>
        <div className='flex items-center justify-center gap-5'> 

            <div className="flex flex-col items-center text-center gap-3">
                <TbTruckDelivery className='text-5xl'/>
                <h4 className='text-xl font-semibold '>Free Shipping</h4>
                <p>For all Order Over $100 </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
                <PiKeyReturnThin  className='text-5xl'/>
                <h4 className='text-xl font-semibold '>30 Days Returns</h4>
                <p>For an Exchange Product</p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
                <IoWalletOutline  className='text-5xl'/>
                <h4 className='text-xl font-semibold '>Secured Payment</h4>
                <p>Payment Card Accepted</p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
                <BsGift className='text-5xl' />
                <h4 className='text-xl font-semibold '>Spacial Gift</h4>
                <p>Our First Product order</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
                <MdOutlineSupportAgent className='text-5xl' />
                <h4 className='text-xl font-semibold '>Support 24/7</h4>
                <p>Contact Us Anytime</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Delivery