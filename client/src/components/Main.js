import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useGlobalContext } from '../context'
import { fetchData } from '../actions'
import Navbar from './Navbar'

const Main = () => {
  const [data, setData] = useState({user: {}, quotes: [], isFetching: false})
  const { state: { user, quotes, search }, getCurrentUser, openAddQuoteForm, fetchQuotes } = useGlobalContext()

  useEffect(() => {
    fetchData(data, setData)
  }, [])

  console.log(data.quotes)

  return <>
    <Navbar userId={data.user._id} />
    <button onClick={openAddQuoteForm} className="add-quote">
      <i className="fas fa-solid fa-feather"></i>
    </button>
    <section className="main-quotes-section">
      {data.quotes
        .filter((quote) => {
          return quote.content.toLowerCase().includes(search.toLowerCase()) ||
          quote.author.toLowerCase().includes(search.toLowerCase()) ||
          quote.username.toLowerCase().includes(search.toLowerCase())
        }).map((quote, id) => {
          return <article className="quote-container" key={id}>
            <i className="fas fa-solid fa-quote-right"></i>
            <div className="quote-content">{quote.content}</div>
            <div className="quote-author">- {quote.author ? quote.author : "John Doe"}</div>
            <div className="quote-user"></div>
          </article>
      })}
    </section>
  </>
}

export default Main
