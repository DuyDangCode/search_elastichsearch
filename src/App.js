import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const [suggestions, setSuggestions] = useState([])

  const getProducts = async () => {
    setSuggestions([])
    const res = await axios.get('http://localhost:8081/api/products', {
      params: {
        query
      }
    })
    console.log(res.data)
    setProducts(res.data)
  }

  const getSuggestions = async () => {
    const res = await axios.get('http://localhost:8081/api/products/suggestions', {
      params: {
        query
      }
    })
    console.log(res.data)
    setSuggestions(res.data)
  }

  useEffect(() => {
    if (query.trim() != '')
      getSuggestions()
  }, [query])

  return (
    <div className="container" style={{ width: "max-content" }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{ flexDirection: "row" }}>
          <input
            placeholder="search with Elasticsearch"
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => getProducts()}
          >
            Enter
          </button>
        </div>

        {
          products && products.length > 0 &&
          products.map(product => {
            return (
              <div key={product.id} class="box">
                <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                <p style={{ fontStyle: 'oblique' }}>{product.description}</p>
              </div>
            )
          })
        }
      </div>

      <div style={{ width: "100%", position: 'absolute', top: 95, zIndex: 999, cursor: 'pointer' }}>
        {
          suggestions && suggestions.length > 0 && suggestions.map((suggestion, index) => {
            return (
              <div
                key={index}
                className="propose"
                onClick={() => setQuery(suggestion)}
              >
                <p>{suggestion}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
