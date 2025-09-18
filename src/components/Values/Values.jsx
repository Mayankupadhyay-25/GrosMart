import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa6'
import Basket from '../../assets/basket-full-vegetables.png'        

const Values = () => {

    const LeftValues = values.slice(0, 2).map(item =>{
        return(
            <div className='flex md:flex-row-reverse items-center gap-7'>
                <div className='w-1/2'>
                    <span className='flex justify-center items-center bg-gradient-to-b text-3xl text-white from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right  '>
                    <h3 className='text-c-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = values.slice(2).map(item =>{
        return(
            <div className='flex items-center gap-7 ' >
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-b text-3xl text-white from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div >
                    <h3 className='text-c-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading=" Values"/>
            <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15'>
                {/* Left Values  */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {LeftValues}
                </div>
                <div className='md:flex w-1/2 hidden'>
                    <img src={Basket} />
                </div>
                {/* Right Values  */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {rightValues}
                </div>
            </div>
        </div>

    </section>
       
  )
}

export default Values

const values = [
    {
        id: 1,
        title: 'Trust',
        para:'It is a long established fact that reader will be distructed by the readable ' ,
        icon: <FaHeart />
    },
        {
        id: 2,
        title: 'Always Fresh',
        para:'It is a long established fact that reader will be distructed by the readable ' ,
        icon: <FaLeaf />
    },
        {
        id: 3,
        title: 'Food seafty',
        para:'It is a long established fact that reader will be distructed by the readable ' ,
        icon: <FaShieldAlt />
    },
        {
        id: 4,
        title: '100% Organic',
        para:'It is a long established fact that reader will be distructed by the readable ' ,
        icon: <FaSeedling />
    },

]