import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const CocktailList = () => {
  const { loading, newitem } = useGlobalContext()
  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='container'>
        {newitem.map((item) => {
          const { id, name, image, category, alcoholic } = item
          return (
            <div key={id} className='sections'>
              <img src={image} alt='name' />
              <h2>{name}</h2>
              <h3
                className={
                  alcoholic === 'Alcoholic'
                    ? 'alcoholic'
                    : 'alcoholic non-alcoholic'
                }
              >
                {alcoholic}
              </h3>
              <h4>{category}</h4>
              <Link to={`/cocktail/${id}`} className='detail-btn'>
                details
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}
export default CocktailList
