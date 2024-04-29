import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async(id)=>{
  const response = await fetch(`${url}${id}`)
  if(!response.ok){
    throw new Error("Failed to fetch the drink details")
  }

  const data = response.json()
  return data
}

const SingleDrinksPage = async({params}) => {

  const drink = await getSingleDrink(params.id)
  const title = drink?.drinks[0]?.strDrink
  const imgSrc = drink?.drinks[0]?.strDrinkThumb


  return (
    <>
      <Link href={"/drinks"} className='btn btn-primary mt-8 mb-12'>
        Back to Drinks
      </Link>
      <h1 className='text-5xl mb-8'> {title}</h1>
      <Image 
      src={imgSrc} 
      height={300} 
      width={300} 
      className='w-48 h-48 rounded-lg shadow-lg mb-4' 
      priority 
      alt={title}
      />
    </>
  )
}

export default SingleDrinksPage