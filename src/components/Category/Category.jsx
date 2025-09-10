import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'



const Category = () => {

const rendreCards = categoury.map (card=>{ 
  return (

    //Card
    <div key={card.id} className='flex-1 basis-[300px] '>
      {/* Card image  */}

      <div className='w-full min-h-[30vh] relative -mb-10' >
        <img src={card.image} className='absolute bottom-0' />
      </div>

      {/* Cart content  */}

      <div  className=' bg-zinc-100 pt-17 p-8 rounded-xl'>
        <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
        <p className='text-zinc-600 mt-3 mb-9'>{card.Description}</p>
        <Button content="See All"/>
      </div>
    </div>
  )
})

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Shop" heading=" by Category"/>

            {/* Category cards  */}
            <div className='flex  flex-wrap gap-10 md:mt-15 mt-10'>
              {rendreCards}
            </div>
        </div>

    </section>
  )
}

export default Category

const categoury =[
  {
    id: 1,
    title: 'Fruits & Veggies',
    Description:'Fresh orgenic product produce source daily from local farm.Explore a wide range eof sesional fruits and crisp vegetables',
    image: FruitsCat
  },

  {
    id: 2,
    title: 'Dairy & Eggs',
    Description:'Wholesome dairy products and free-range egg. fromy creamy milk and yogurt to artisanal cheese and butter ',
    image: DairyCat
  },

  {
    id: 3,
    title: 'Meat & SeaFood',
    Description:'High-quality, responsibility sourced meat and seafood. choos from fresh cuts, marinated options and more',
    image: SeaFoodCat
  }
]