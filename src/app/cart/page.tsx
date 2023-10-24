import Image from 'next/image'
import React from 'react'

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3'>
                <div className='flex items-center justify-between mb-4 '>
                    <Image src="/temporary/p1.png" width={100} height={100} alt='' />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4 '>
                    <Image src="/temporary/p1.png" width={100} height={100} alt='' />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4 '>
                    <Image src="/temporary/p1.png" width={100} height={100} alt='' />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col g-4 justify-center lg:h-full lg:w-1/3'>
                <div className='flex justify-between'>
                    <span>Subtotal (3 items)</span>
                    <span>$81.70</span>
                </div>
                <div className='flex justify-between'>
                    <span>Service cost</span>
                    <span>$81.70</span>
                </div>
                <div className='flex justify-between'>
                    <span>Delivery cost</span>
                    <span className='text-green-500'>FREE!</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between'>
                    <span>TOTAL(INCL. VAT)</span>
                    <span className='font-bold'>$81.70</span>
                </div>
                <button className='bg-red-500 text-white w-1/2 p-3 rounded-md self-end'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartPage