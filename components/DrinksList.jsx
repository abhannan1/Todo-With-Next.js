import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DrinksList = ({drinks}) => {
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
        {drinks.map((drink,index)=>{
            return(
                <li key={drink.strDrinkThumb}>
                    <Link 
                    href={`/drinks/${drink.idDrink}`} 
                    className='text-xl font-medium'
                    >
                        <div className='relative h-48 mb-4'>
                            <Image
                            src={drink.strDrinkThumb}
                            fill
                            priority
                            sizes='(max-width:786px) 100vw, (max-width:1200px) 50vw'
                            className='rounded-md object-cover'
                            alt={drink.strDrink}
                            />
                        </div>
                        {drink.strDrink}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default DrinksList