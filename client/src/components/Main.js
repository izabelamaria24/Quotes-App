import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useGlobalContext } from '../context'
import { fetchData } from '../actions'
import Navbar from './Navbar'

const Main = () => {
  const [data, setData] = useState({user: {}, quotes: [], isFetching: false})
  const { state: { user, quotes }, getCurrentUser, openAddQuoteForm, fetchQuotes } = useGlobalContext()

  useEffect(() => {
    fetchData(data, setData)
  }, [])

  return <>
    <Navbar userId={data.user._id} />
    <button onClick={openAddQuoteForm} className="add-quote">
      <i className="fas fa-solid fa-feather"></i>
    </button>
    <section className="main-quotes-section">
      {data.quotes.map((quote, id) => {
        return <article className="quote-container" key={id}>
          {quote.content}
        </article>
      })}
    </section>
  </>
}

export default Main
