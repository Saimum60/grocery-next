import Link from 'next/link'
import React from 'react'
import { FaRegMessage } from 'react-icons/fa6'


const Contact = () => {
    return (
        <div className='bg-[#F1F1F1]'>
            <div className='container py-8 border-t border-gray-300'>
                <div>
                    <div className='grid grid-cols-4'>
                        <div className='text-2xl flex flex-col gap-5 border-r border-gray-300'>
                            <h1 className='font-medium text-2xl'>Contact us</h1>
                            <p className='text-lg pb-5 text-gray-600'>Classyshop-Mega super Store <br /> 507 union trade center France</p>
                            <p className='text-lg text-gray-600'>sales@yourcompany.com</p>
                            <p>(+91)9876-543-210</p>
                            <div className="flex items-center gap-3">
                                <FaRegMessage className="text-4xl text-primary" />

                                <div>
                                    <h4 className="text-xl font-medium  leading-tight">
                                        Online Chat <br />Get Expert Help
                                        
                                    </h4>
                                    
                                </div>
                            </div>

                        </div>
                        <div className='text-2xl pl-10 space-y-6'>

                            <h2>Product</h2>
                            <div>
                            <ul className='text-lg text-gray-600 space-y-2'>
                                <li>Price drop</li>
                                <li>New products</li>
                                <li>Best sales</li>
                                <li>Contact us</li>
                                <li>Sitemap</li>
                                <li>Stores</li>
                            </ul>
                            </div>

                        </div>
                        <div className='text-2xl space-y-6'>
                            <h2>Our Company</h2>
                            <div>
                                <ul className='text-lg text-gray-600 space-y-2'>
                                    <li>Delivery</li>
                                    <li>Legal Notic</li>
                                    <li>Terms and conditions of use</li>
                                    <li>About us</li>
                                    <li>Secure payment</li>
                                    <li>Login</li>
                                </ul>
                            </div>

                        </div>
                        <div className='text-2xl flex flex-col gap-5'>
                            <div>
                                <h2>Subscribe to newsletter</h2>
                            <p className='text-lg text-gray-600'>Subscribe to our latest newsletter to get news about spacial discount</p>
                            </div>
                            <div>
                                <Link href={'/'} className='border  border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white'>
                                Subscribe
                                </Link>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact