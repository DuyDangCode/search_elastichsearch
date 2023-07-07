import "./App.css";
// import Data from "./mock-data.json";
import Data from "./getData";
import { useState } from "react";

let suggest = Data;

function App() {
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState(false);
  const [propose, setPropose] = useState(false);
  return (
    <div class="container" style={{ width: "max-content" }}>
      <div class="container" style={{ width: "100%" }}>
        <div style={{ flexDirection: "row" }}>
          <input
            placeholder="search with Elasticsearch"
            class="search"
            value={query}
            onChange={(event) => {
              //call search function
              setQuery(event.target.value);
              setBtn(false);
              suggest = Data;
            }}
          />
          <button
            class="btn"
            onClick={() => {
              setBtn(true);
              suggest = null;
            }}
          >
            Enter
          </button>
        </div>

        {btn
          ? Data.filter((movie) => {
              if (
                query !== "" &&
                movie.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return movie;
              }
            }).map((movie, index) => {
              return (
                <div key={index} class="box">
                  <p>{movie.title}</p>
                </div>
              );
            })
          : null}
      </div>

      <div style={{ width: "100%" }}>
        {console.log(1)}
        {suggest != null
          ? suggest
              .filter((movie) => {
                if (
                  query !== "" &&
                  movie.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return movie;
                }
              })
              .map((movie, index) => {
                return (
                  <div
                    key={index}
                    class="propose"
                    onClick={() => {
                      setQuery(movie.title);
                      setBtn(true);
                      suggest = null;
                    }}
                  >
                    <p>{movie.title}</p>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}

export default App;
