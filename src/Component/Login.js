import React, { useState } from "react";
import { useHistory } from "react-router";
import "../css/login.css";
import { useDispatch } from "react-redux";
import { actionTypes } from "../_redux/rootReducer";

function Login() {
  const [passowrd, setPassowrd] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const generate_token = (length) => {
    var a =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
        ""
      );
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join("");
  };

  const signIn = (event) => {
    event.preventDefault();
    let token = generate_token(32);
    let userDetails = {
      name,
      passowrd,
    };

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      localStorage.setItem("authToken", token);

      let data = {
        userDetails,
        token,
      };
      dispatch({
        type: actionTypes.SET_USER,
        data: data,
      });

      history.push("/");
    }, 500);
  };
  return (
    <div className="login">
      <div className="login__container">
        <h2>Sign-in</h2>

        <form onSubmit={signIn}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passowrd">Passowrd</label>
            <input
              type="passowrd"
              className="form-control"
              id="passowrd"
              aria-describedby="passowrdHelp"
              placeholder="Enter Passowrd"
              value={passowrd}
              onChange={(e) => setPassowrd(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary login__signInButton">
            {loading ? <div className="spinner-border"></div> : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
