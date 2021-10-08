import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image" src="https://m.media-amazon.com/images/I/71iv6xO1QOL._SX3000_.jpg" alt="Loading" />

               <div className="home__row">
               <Product 
                   id="01"
                   title="Assassin's Creed IV: Black Flag (PS4)"
                   price={1149}
                   image="https://m.media-amazon.com/images/I/915xVjsO3iL._SL1500_.jpg"
               />
               <Product 
                   id="02"
                   title="PS4 Marvel's Spider-Man: Miles Morales (PS4)"
                   price={3091}
                   image="https://m.media-amazon.com/images/I/811umGHYORL._SL1500_.jpg"
               />
               <Product 
                   id="03"
                   title="Watch Dogs 2 (PS4)"
                   price={2702}
                   image="https://m.media-amazon.com/images/I/812E6hdG+VL._SL1500_.jpg"
               />
               <Product 
                   id="04"
                   title="
                   PS4 Horizon Forbidden West standard (PS4)"
                   price={3999}
                   image="https://m.media-amazon.com/images/I/91jxySQgvpL._SL1500_.jpg"
               />
               </div>
               
               <div className="home__row">
               <Product 
                   id="05"
                   title="
                   PS4 
                   PS4 Ghost of Tsushima (PS4)"
                   price={2699}
                   image="https://m.media-amazon.com/images/I/81jyRkf9qjL._SL1500_.jpg"
               />
               <Product 
                   id="06"
                   title="MARVEL'S SPIDER-MAN G.O.T.Y PS4"
                   price={1479}
                   image="https://m.media-amazon.com/images/I/81XEnkqC6KL._SL1500_.jpg"
               />
               </div>

               <div className="home__row">
               <Product 
                   id="07"
                   title="Sony PS VR V2 Camera Bundle (White)"
                   price={40127}
                   image="https://m.media-amazon.com/images/I/71PttBANPkL._SL1500_.jpg"
               />
               </div>
           </div>
        </div>
    )
}

export default Home
