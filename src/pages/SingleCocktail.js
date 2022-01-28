import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { loading, setLoading } = useGlobalContext()
  const { id } = useParams()
  const [item_id, setItemid] = useState(id)
  const [singleItem, setSingleItem] = useState([])
  const [ingredients, setingredients] = useState([])

  const fetchdata = async () => {
    setLoading(true)
    try {
      const resp = await fetch(`${url} ${item_id}`)
      const item = await resp.json()
      const { drinks } = item
      if (drinks) {
        const {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
          strCategory: category,
          strAlcoholic: alcoholic,
          strInstructions: instructions,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          id,
          name,
          image,
          category,
          alcoholic,
          instructions,
          glass,
        }
        setSingleItem(newCocktail)
        setingredients(ingredients)
      } else {
        setSingleItem(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [item_id])

  if (loading) {
    return <Loading />
  }
  if (!singleItem) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const { id, name, image, category, alcoholic, instructions, glass } =
      singleItem
    return (
      <>
        <h1 className='name'>{name}</h1>
        <section className='single-page'>
          <div className='img'>
            <img src={image} alt={name} />
          </div>
          <div className='subsection'>
            <p>
              <span className='span'>Name:</span>
              {name}
            </p>
            <p>
              <span className='span'>Category:</span>

              {category}
            </p>
            <p>
              <span className='span'> Alcoholic:</span>

              {alcoholic}
            </p>
            <p>
              <span className='span'> Glass:</span>

              {glass}
            </p>
            <p>
              <span className='span'> Ingredients:</span>

              {ingredients.map((item) => {
                return <span className='ingredients'>{item}</span>
              })}
            </p>
            <p>
              <span className='span'>Instructions:</span>

              {instructions}
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default SingleCocktail
