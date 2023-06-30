import React, { useState } from 'react'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { mealData } from '../data/Data'

export const Meals = () => {
    const [foods, setFoods] = useState(mealData)

    const fillterCat = (category) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }
    return (
        <div className='max-w-[1520px] mx-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center'>
                    <button
                        onClick={() => setFoods(mealData)}
                        className='m-1 border-orange-700 text-white  bg-orange-700 hover:text-orange-700 hover:bg-white'>All</button>
                    <button
                        onClick={() => fillterCat('Pizza')}
                        className='m-1 border-orange-700 text-white  bg-orange-700 hover:text-orange-700 hover:bg-white'>Pizza</button>
                    <button
                        onClick={() => fillterCat('Chicken')}
                        className='m-1 border-orange-700 text-white  bg-orange-700 hover:text-orange-700 hover:bg-white'>Chicken</button>
                    <button
                        onClick={() => fillterCat('Salad')}
                        className='m-1 border-orange-700 text-white  bg-orange-700 hover:text-orange-700 hover:bg-white'>Salad</button>
                </div>

            </div>
            <div className=' mt-3 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
                {
                    foods.map((item) => {
                        return (
                            <div key={item.id} className='border-none hover:scale-105 duration-300'>
                                <img className='w-full h-[200px] object-cover rounded-lg' src={item.image} alt={item.name} />
                                <div className='flex justify-between px-2 py-2'>
                                    <p className='font-bold'>{item.name}</p>
                                    <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                                </div>
                                <div className='pl-2 py-4'>
                                    <p className='flex items-center text-indigo-700'>View More <ArrowSmRightIcon className='w-5 ml-2' /></p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
