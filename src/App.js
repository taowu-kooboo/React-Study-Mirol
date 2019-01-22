import React from "react";
import { connect } from "react-redux";
import { increase, decrease, increaseAsync } from "./index.redux";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd-mobile";

// 方便对比
// const mapStatetoProps = state => {
//   return { num: state };
// };
// const actionCreators = { increase, decrease, increaseAsync };
// App = connect(
//   mapStatetoProps,
//   actionCreators
// )(App);
@connect(
  // 你要state什么属性放到props里
  state => ({num: state.counter}),
  // 你要什么方法放到props里，自动dispatch
  {increase, decrease, increaseAsync}
)


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const num = this.props.num;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <small>state: {num}</small>
          <Button type="primary" onClick={this.props.increase}>
            increase
          </Button>
          <Button type="warning" onClick={this.props.decrease}>
            decrease
          </Button>
          <Button type="ghost" onClick={this.props.increaseAsync}>
            increaseAsync
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
