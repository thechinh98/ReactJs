import React from "react";
import "../search/Search.css";
import { searchUser } from "../../redux/actions";
import store from "../../redux/store";
import { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");

  const onClickOk = () => {
    console.log(input);
    store.dispatch(searchUser({ str: input }));
  };

  return (
    <div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            value={input}
            onChange={e => {
              setInput(e.target.value);
            }}
            className="prompt"
            type="text"
            placeholder="Search By Name"
          />
          <i className="search icon" />
          <button onClick={onClickOk}>Ok</button>
        </div>
        <div className="results" />
      </div>
    </div>
  );
}
