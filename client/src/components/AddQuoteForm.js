import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useGlobalContext } from '../context'
import { postQuote } from '../actions'
import { fetchUser } from '../actions'

const AddQuoteForm = () => {
  const { state: { isAddQuoteFormOpen }, closeAddQuoteForm } = useGlobalContext()
  const [quoteContent, setQuoteContent] = useState({content: "", author: "", username: ""})

  // useEffect(() => {
  //   const fetchUser = async () =>
  //   {
  //   	try
  //   	{
  //   		setQuoteContent(
  //   		{
  //   			...quoteContent,
  //   		})
  //   		const res = await axios(
  //   		{
  //   			method: "GET",
  //   			withCredentials: true,
  //   			url: "http://localhost:5000/currentUser"
  //   		})
  //   		setQuoteContent(
  //   		{
  //   			username: res.data.username
  //   		})
  //   	}
  //   	catch (err)
  //   	{
  //   		console.log(err)
  //   		setQuoteContent(
  //   		{
  //   			...quoteContent
  //   		})
  //   	}
  //   }
  //
  //   fetchUser()
  // }, [quoteContent.username])

  const handleSubmit = () => {
    postQuote(quoteContent)
    closeAddQuoteForm()
  }


  return <>
    <section className={`${isAddQuoteFormOpen ? "show add-quote-form-wrapper" : "add-quote-form-wrapper"}`}>
      <section className="add-quote-form-container container">
        <h1>Add a new quote!</h1>
        <i className="fas fa-solid fa-quote-left"></i>
        <blockquote>
          {quoteContent.content}
        </blockquote>
        <i className="fas fa-solid fa-quote-right"></i>
        <div>{quoteContent.author}</div>
        <form className="form">
          <div className="form-control">
            <textarea id="quote-insert" placeholder="Write quote here..." onChange={(e) => setQuoteContent({...quoteContent, content: e.target.value})}></textarea>
          </div>
          <div className="form-control">
            <input type="text" id="quote-author" placeholder="Write quote author here..." onChange={(e) => setQuoteContent({...quoteContent, author: e.target.value})} />
          </div>
        </form>
        <button className="btn btn-dark" type="submit" onClick={handleSubmit}>Post Quote</button>
      </section>
    </section>
  </>
}

export default AddQuoteForm
