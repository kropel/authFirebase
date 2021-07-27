import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';
import { AuthContext } from '../../store/auth-context';

const AuthForm = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const emailEntered = emailInputRef.current.value;
    const passwordEntered = passwordInputRef.current.value;

    setIsLoading(true);
    let url = '';
    const token = 'AIzaSyBHnJUG0zI79CC8lc6PsozC7Q335_2xkx8';
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        token;
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + token;
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: emailEntered,
        password: passwordEntered,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // show error modal
            const errorMessage = data?.error?.message ?? 'Authentication failed!';

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.loginHandler(data.idToken);
        history.replace('/');
      })
      .catch((error) => alert(error.message));
  };

  const submitButton = !isLoading ? (
    <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
  ) : (
    <p>Sending request...</p>
  );

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {submitButton}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
