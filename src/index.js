import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
  )
);

// class Test extends React.Component {
// constructor(props) {
//     super(props)
// }
//   componentDidMount() {
//     setTimeout(() => {
//       this.props.history.goBack();
//     }, 1500);
//   }
//   render() {
//     console.log(this.props);
//     return <h2>测试组件 {this.props.match.params.location}</h2>;
//   }
// }
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <h1>component</h1>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
