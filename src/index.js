import React from "react";
import ReactDOM from "react-dom";
 import App from "./components/App";
 import  Store  from "./components/Store";
 import { Provider } from "react-redux";
 import { HashRouter } from 'react-router-dom'
 import 'react-toastify/dist/ReactToastify.css';

 

ReactDOM.render(

<Provider store={Store} >
  <App/>

  </Provider>,
document.getElementById("root")

);