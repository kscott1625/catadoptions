import React from 'react';
import '../styles/home.css';
import videoCat from '../assets/Cat.mp4';

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={videoCat} autoPlay loop />
      <div className="content">
        <h1>Kat's Pet Adoption Site</h1>
        <h2>425-244-2253</h2>
        <h2>1234 RedWood, Wa 98076</h2>
        <h2>kasc1625@gmail.com</h2>
      </div>
    </div>
  );
}

export default Home;
