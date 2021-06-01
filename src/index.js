import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { HolidayRoad } from "./components/HolidayRoad"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HolidayRoad />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);