import React from "react";

const UserInfo = ({
  user: {
    picture,
    name: { title, first, last },
    email,
  },
}) => {
  const awatar = picture.large;
  return (
    <div>
      <img src={awatar} alt="awatar" />
      <p>name: {`${title} ${first} ${last}`}</p>
      <p>Email: {`${email}`}</p>
    </div>
  );
};

const FETCH_STATUS = {
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      status: FETCH_STATUS.LOADING,
    };
  }

  async componentDidMount() {
    await this.getData();
  }

  getData = async () => {
    try {
      this.setState({
        user: null,
        status: FETCH_STATUS.LOADING,
      });
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();
      const [user] = results;
      console.log(user);

      this.setState({
        user,
        status: FETCH_STATUS.LOADED,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        user: null,
        status: FETCH_STATUS.ERROR,
      });
    }
  };

  refresh = async () => {
    await this.getData();
  };

  render() {
    const { user, status } = this.state;

    if (status === FETCH_STATUS.LOADING) {
      return <div>Loading...</div>;
    }
    if (status === FETCH_STATUS.ERROR) {
      return <div>Something went wrong ...</div>;
    }
    return (
      <div>
        <button onClick={this.refresh}>Refresh</button>
        <UserInfo user={user} />
      </div>
    );
  }
}

export default App;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.increment = this.increment.bind(this);
//   }
//   shouldComponentUpdate(nextProps, nextState, nextContent) {
//     return nextState.count % 2 === 0;
//     // return this.state.count % 2;
//   }

//   increment() {
//     this.setState(
//       (state) => ({ count: state.count + 1 }),
//       () => {
//         console.log("state.count ", this.state.count);
//       }
//     );
//     console.log(this.state.count);
//   }

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         Clicks: {count}
//         <button onClick={this.increment}>Click </button>
//       </div>
//     );
//   }
// }

// export default App;
