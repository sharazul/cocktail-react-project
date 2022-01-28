import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [fetchdata, setFetchdata] = useState('y')
  const [newitem, setNewitem] = useState([])
  const fetchdrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${fetchdata}`)
      const data = await response.json()
      setLoading(false)
      const { drinks } = data
      const newdrink = drinks.map((drink) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strCategory,
          strAlcoholic,
          strInstructions,
          strGlass,
        } = drink
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          category: strCategory,
          alcoholic: strAlcoholic,
          instructions: strInstructions,
          glass: strGlass,
        }
      })
      setNewitem(newdrink)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchdrinks()
  }, [fetchdata])
  return (
    <AppContext.Provider
      value={{ loading, setLoading, newitem, setFetchdata, fetchdata }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
