import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useGlobalContext } from '../context'
import { postQuote } from '../actions'
import { fetchUser } from '../actions'

import speech from '../images/speech.png'
import mention from '../images/Mention.gif'

const AddQuoteForm = () => {
  const { state: { isAddQuoteFormOpen }, closeAddQuoteForm } = useGlobalContext()
  const [quoteContent, setQuoteContent] = useState({content: "", author: "", user: ""})

  const handleSubmit = () => {
    postQuote(quoteContent)
    closeAddQuoteForm()
  }

  return <>
    <section className={`${isAddQuoteFormOpen ? "show flex-center add-quote-form-wrapper" : "add-quote-form-wrapper"}`}>
      <section className="add-quote-form-container">
        <button onClick={closeAddQuoteForm} className="close-add-quote-form"><i className="fas fa-solid fa-arrow-left"></i></button>
        <section className="left flex-center flex-column full-w-h">  <blockquote className="quote-container">
          <img className="quote-img" src={speech}></img>
          <div className="quote-content">{quoteContent.content}</div>
          <div className="quote-author">- {quoteContent.author ? quoteContent.author : "John Doe"}</div>
        </blockquote>
          <form className="form flex-center flex-column">
            <div className="quote form-control">
              <textarea id="quote-insert" placeholder="Write quote here..." onChange={(e) => setQuoteContent({...quoteContent, content: e.target.value})}></textarea>
            </div>
            <div className="author form-control">
              <input type="text" id="quote-author" placeholder="Write quote author here..." onChange={(e) => setQuoteContent({...quoteContent, author: e.target.value})} />
            </div>
            <button className="post-quote-btn btn btn-dark" type="submit" onClick={handleSubmit}>Post Quote</button>
          </form></section>
        <section className="right flex-center full-w-h">
          <img src={mention} alt="mention"></img>
        </section>
      </section>
    </section>
  </>
}

export default AddQuoteForm
