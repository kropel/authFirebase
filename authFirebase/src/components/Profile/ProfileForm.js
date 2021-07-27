import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const passwordEntered = passwordInputRef.current.value;

    const token = 'AIzaSyBHnJUG0zI79CC8lc6PsozC7Q335_2xkx8';

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + token, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: passwordEntered,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : res.json().then((res) => {
              throw new Error(res.error.message);
            })
      )
      .then((date) => {
        console.log(date);
        history.replace('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} minLength={7} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
