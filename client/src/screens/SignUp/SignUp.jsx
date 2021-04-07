import React, { useState } from "react";
import "./SignUp.css";
import Nav from "../../components/shared/Nav/Nav";
import { signUp, signIn } from "../../services/users";
import { useHistory, Redirect } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false)

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then((user) => setUser(user))
      .then(() => goBack())
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    console.log(form.isError)
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  const goBack = () => {
    setRedirect(true)
  }

  if (redirect === true) {
    return <Redirect to="/products" />
  }

  return (
    <>
    <Nav />
    <div className="form-container">
      <div className="quote">
        <h1>Technologic</h1>
        <h3><em>Inspirational quote</em></h3>
      </div>
        <div className="input-container">
      <form onSubmit={onSignUp}>
        <label className="label">Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <label className="label">Email address</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <label className="label">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label className="label">Password Confirmation</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {renderError()}
        </form>
        </div>
      </div>
      </>
  );   
};

export default SignUp;
