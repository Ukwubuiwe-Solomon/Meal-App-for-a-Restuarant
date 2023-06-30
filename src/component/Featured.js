import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        { url: 'https://img.freepik.com/free-psd/fast-food-banner-template_23-2148609080.jpg?w=826&t=st=1687879016~exp=1687879616~hmac=edcb3c9be5b8a4eb5fab1db9043f779c9ca3627465c9928de3dcee029515929c' },
        { url: 'https://as2.ftcdn.net/v2/jpg/04/17/20/77/1000_F_417207718_klR6e5n3f805BpalE91IeJaoNDyu3tNd.jpg' },
        { url: 'https://as2.ftcdn.net/v2/jpg/01/87/87/53/1000_F_187875366_UOYAvWJWZFsQrjCkBiQLzC7e3CzkpP3A.jpg' }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1520px] h-[500px] w-full px-4 py-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}>

            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlider} />

            </div>
            <div className='flex top-4 py-2 justify-center'>
                {
                    sliders.map((sliderItems, slideIndex) => (
                        <div key={slideIndex} onClick={() => moveToNextSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured