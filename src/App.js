import Aos from "aos";
import axios from 'axios'
import { apiUrl } from "./config.json"
import Banner from "./components/banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Heros from './components/heros/heros';
import NavBar from "./components/navbar";
import React, { useEffect, useState } from "react";
import "./App.scss";
import 'aos/dist/aos.css'

const apiEndpoint = apiUrl + "/all.json"

const App = () => {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    const url = apiEndpoint;
    
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setHeros(...[res.data])
      } catch (err) {
        console.log("Something went wrong!", err)
      }
    };
    
    fetchData();
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Router>
      <div className="all">
        <NavBar />
        <Banner heros={heros} />
        <Heros heros={heros} />
        <Footer />
      </div>
    </Router>
  )
}

export default App