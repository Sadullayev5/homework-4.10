import React, { useEffect , useState } from 'react'
import axios from 'axios'
import './Home.css'

const Home : React.FC = () => {
    interface Quote {
        id: number;
        quote: string;
        author: string;
      }
    
    const [quotes , setQuotes] = useState<Quote[]>([])
    useEffect(() => {
        axios.get('https://dummyjson.com/quotes')
    .then (response => response.data)
    .then (data => setQuotes(data.quotes))
    } , [])
    console.log(quotes)


  return (
    <div className="home-container">
      <h1 className="title">Quotes</h1>
      <div className="quotes-list">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <p className="quote-text">"{quote.quote}"</p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home