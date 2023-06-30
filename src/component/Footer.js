import React from 'react'
import { FaDribbble, FaFacebookSquare, FaGitSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bond text-orange-500'>YumEats</h1>
                    <p>

                        The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here,
                        making it look like readable English.
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGitSquare size={30} />
                        <FaDribbble size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Indiak</li>
                            <li className='py-2 text-sm'>Canada</li>

                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Indiak</li>
                            <li className='py-2 text-sm'>Canada</li>

                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Indiak</li>
                            <li className='py-2 text-sm'>Canada</li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
