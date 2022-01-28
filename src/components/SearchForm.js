import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setFetchdata, Fetchdata } = useGlobalContext()
  const serachValue = React.useRef('')
  const searchCocktail = () => {
    setFetchdata(serachValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  React.useEffect(() => {
    serachValue.current.focus()
  }, [])
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Search Your favorite Drink</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={serachValue}
          onChange={searchCocktail}
        />
      </form>
    </div>
  )
}

export default SearchForm
