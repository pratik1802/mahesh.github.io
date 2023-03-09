// import logo from './logo.svg';
import "./App.css";
import React from 'react';
import { useEffect,useState } from "react";
import axios from 'axios';

function App() {
  const [qoute,setQuote]=useState("")

  useEffect(()=>{
    let data= async()=>{
      let res= await axios.get("https://api.quotable.io/random")
      console.log(res);
      setQuote(res.data);
    }
    data();

  },[])

  let fetchData= async()=>{
    let res= await axios.get("https://api.quotable.io/random")
    console.log(res);
    setQuote(res.data);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{qoute.author}</h5>
                <p className="card-text"> {qoute.content}</p>
                
                <button className="btn btn-primary" onClick={fetchData}>New Qoute</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
