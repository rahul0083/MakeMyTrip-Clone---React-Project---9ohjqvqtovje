import React from "react";
import ReactDOM from "react-dom";
 import App from "./components/App";
 import  Store  from "./components/Store";
 import { Provider } from "react-redux";


 

ReactDOM.render(
<React.StrictMode>
<Provider store={Store} >
  <App/>

  </Provider>
</React.StrictMode>,
document.getElementById("root")

);