import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "../Components/Header/Header";
import HomePage from "../Components/HomePage/HomePage";
import PerfumariaPage from "../Components/PerfumariaPage/PerfumariaPage";
import CabelosPage from "../Components/CabelosPage/CabelosPage";
import MaquiagemPage from "../Components/MaquiagemPage/MaquiagemPage";
import InfantilPage from "../Components/InfantilPage/InfantilPage";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/perfumaria" component={PerfumariaPage} />
        <Route path="/cabelos" exact component={CabelosPage} />
        <Route path="/maquiagem" component={MaquiagemPage} />
        <Route path="/infantil" component={InfantilPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
