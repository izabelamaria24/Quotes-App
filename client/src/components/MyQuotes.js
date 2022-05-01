import React, { useState, useEffect } from 'react'

import { fetchData } from '../actions'

import speech from '../images/speech.png'

const MyQuotes = () => {

  const [data, setData] = useState({user: {}, quotes: [], isFetching: false})

  useEffect(() => {
    fetchData(data, setData)
  }, [])

  console.log(data.quotes)

  return <section className="main-quotes.section">
    {data.quotes.filter((quote) => {
      return quote.username === data.user.username
    }).map((quote, id) => {
      return <blockquote key={id} className="quote-container">
        <img className="quote-img" src={speech}></img>
        <div className="quote-content">{quote.content}</div>
        <div className="quote-author">- {quote.author ? quote.author : 'John Doe'}</div>
        <div className="quote-user">@{quote.username}</div>
      </blockquote>
    })}
  </section>
}

export default MyQuotes
