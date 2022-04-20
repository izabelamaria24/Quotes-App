import React, { useState, useEffect } from 'react'

import { fetchData } from '../actions'

import { Link } from 'react-router-dom'

const FirstPage = () => {
  const [data, setData] = useState({user: {}, quotes: [], isFetching: false})

  useEffect(() => {
    fetchData(data, setData)
  }, [])

  return <>
    <section className="firstpage">
      <nav>
        <button className="firstpage-login"><Link to="/login">Login</Link></button>
        <button className="firstpage-join"><Link to="/register">Join</Link></button>
      </nav>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item c-item-1 active">
            <div><i className="fas fa-solid fa-quote-left"></i>
              {data.quotes.length && <h1>{data.quotes[Math.floor(Math.random() * data.quotes.length)].content}</h1>}
            </div>
          </div>
          <div className="carousel-item c-item-2">
            <div><i className="fas fa-solid fa-quote-left"></i>
              {data.quotes.length && <h1>{data.quotes[Math.floor(Math.random() * data.quotes.length)].content}</h1>}
            </div>
          </div>
          <div className="carousel-item c-item-3">
            <div><i className="fas fa-solid fa-quote-left"></i>
              {data.quotes.length && <h1>{data.quotes[Math.floor(Math.random() * data.quotes.length)].content}</h1>}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  </>
}

export default FirstPage
