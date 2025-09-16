import React from 'react'
import Heading from '../Heading/Heading'

const Values = () => {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading=" Values"/>
        </div>

    </section>
       
  )
}

export default Values

const values = [
    {
        id: 1,
        title: 'Quality',
        description: 'We are committed to providing fresh, high-quality products that meet the highest standards of safety and taste. Our rigorous quality control processes ensure that every item we offer is carefully selected and thoroughly inspected.',
    }
]