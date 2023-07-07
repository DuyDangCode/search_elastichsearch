import "./App.css";
import { suggestData, getData } from "./getData";
import { useState } from "react";

let suggest = suggestData;

function App() {
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState(false);

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
              suggest = suggestData;
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
          ? getData
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
