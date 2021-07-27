import React from "react";
import { useSelector } from "react-redux";

const UserInfo = ({ user }) => {
  const { name, email, picture } = user;

  const avatar = picture.large;
  const displayName = `${name.title} ${name.first} ${name.last}`;
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <div>Name: {displayName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

const App = () => {
  const user = useSelector((state) => state.user);
  const isError = useSelector((state) => state.isError);
  const isLoading = useSelector((state) => state.isLoading);

  if (isError) {
    return <h4>Something went wrong while data loading...</h4>;
  }

  if (isLoading) {
    return <h4>Data loading....</h4>;
  }

  return (
    <div>
      <UserInfo user={user} />
      <p>
        <button>Reload</button>
      </p>
    </div>
  );
};

// async fetchData() {
//   try {
//     this.setState({ status: DATA_STATE.LOADING });
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     const [user] = data.results;
//     this.setState({ user, status: DATA_STATE.LOADED });
//   } catch (e) {
//     console.error(e.message);
//     this.setState({ user: null, status: DATA_STATE.ERROR });
//   }
// }

export default App;
