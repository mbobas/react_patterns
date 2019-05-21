import React from 'react';
import './App.css';
import { BrowserRouter as Router,NavLink } from "react-router-dom";
import {Root} from './Root'

const App: React.FC = () => {
  return (
    <Router>
        <NavLink to={"/anti-pattern/props-map-state"}>Inicjalizacja stanu na podstawie props</NavLink><br/>
        <NavLink to={"/anti-pattern/key"}>Przypadkowe wartości w props key</NavLink><br/>
        <NavLink to={"/anti-pattern/arrow-function"}>Funkcja strzałkowa w props komponentu (przykład 1)</NavLink><br/>
        <NavLink to={"/anti-pattern/arrow-function2"}>Funkcja strzałkowa w props komponentu (przykład 2)</NavLink><br/>    
        <NavLink to={"/anti-pattern/arrow-function4000"}>Funkcja strzałkowa w props komponentu (przykład hard arrow)</NavLink><br/>
        <NavLink to={"/anti-pattern/bind-function4000"}>Funkcja strzałkowa w props komponentu (przykład hard bind)</NavLink><br/>
        <Root />
    </Router>
  );
}

export default App;
