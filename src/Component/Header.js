import React, { useState } from "react";
import "../css/header.css";
import { actionTypes } from "../_redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function Header({ searchInput }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const url = useSelector((state) => state.urlAddress);

  const [inp, setInp] = useState({
    input1: url ? url.input1 : "",
    input2: url ? url.input2 : "",
  });

  const logout = () => {
    dispatch({
      type: actionTypes.USER_LOGOUT,
    });
    history.push("/");
  };

  const handleInput = (e) => {
    let { name, value } = e.target;

    setInp((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const onHitEnter = () => {
    localStorage.setItem("urls", JSON.stringify(inp));
    dispatch({
      type: actionTypes.URL_ENTERED,
      inputUrl: inp,
    });
  };

  let validateUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
  const handleInput1KeyPress = (e) => {
    if (e.keyCode === 13) {
      if (validateUrl(inp.input1)) {
        onHitEnter();
      } else {
        alert("Please Enter a valid url with http/https");
      }
    }
  };

  const handleInput2KeyPress = (e) => {
    if (e.keyCode === 13) {
      if (validateUrl(inp.input2)) {
        onHitEnter();
      } else {
        alert("Please Enter a valid url with http/https");
      }
    }
  };

  return (
    <>
      <div className="header">
        <div className="username">{user.name}</div>
        <div className="inputDiv">
          <div className="inputDiv1">
            <input
              type="text"
              className="form-control"
              name="input1"
              onChange={handleInput}
              value={inp.input1}
              placeholder="http://www.example.com"
              onKeyDown={handleInput1KeyPress}
            />
            <button
              onClick={onHitEnter}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>

          <div className="inputDiv2">
            <input
              type="text"
              className="form-control"
              name="input2"
              onChange={handleInput}
              value={inp.input2}
              placeholder="http://www.example.com"
              onKeyDown={handleInput2KeyPress}
            />
            <button
              onClick={onHitEnter}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="logout__button">
          <button onClick={logout} type="button" className="btn btn-secondary">
            <span className="mob">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z" />
              </svg>
            </span>

            <span className="desk">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
