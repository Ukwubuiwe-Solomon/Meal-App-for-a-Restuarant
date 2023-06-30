import React from 'react'

const Delivery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>

            <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
            <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[550px] mx-auto my-4' src='https://img.freepik.com/premium-psd/youtube-mobile-phone-mockup_106244-1675.jpg?w=740' alt='' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Get The App</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and
                        web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>

    )
}

export default Delivery