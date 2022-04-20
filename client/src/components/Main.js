import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useGlobalContext } from '../context'
import { fetchData } from '../actions'
import speech from '../images/speech.png'

import Navbar from './Navbar'

const Main = () => {
  const [data, setData] = useState({user: {}, quotes: [], isFetching: false})
  const { state: { search }, openAddQuoteForm } = useGlobalContext()

  useEffect(() => {
    fetchData(data, setData)
  }, [])

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
            <img className="quote-img" src={speech}></img>
            <div className="quote-content">{quote.content}</div>
            <div className="quote-author">- {quote.author ? quote.author : "John Doe"}</div>
            <div className="quote-user"> @{quote.username}</div>
          </article>
        })}
    </section>
  </>
}

export default Main
