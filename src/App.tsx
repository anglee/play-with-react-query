import React from "react";
import "./App.less";
import { ReactQueryDevtools } from "react-query-devtools";
import User from "./User";

const App = () => (
  <div>
    <ReactQueryDevtools />
    <User userId={123} />
    <User userId={456} />
  </div>
);

export default App;
