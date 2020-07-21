import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
             <img className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
             />

             {/* Products */}
             <div className="home__row">
                <Product
                id="12321341"
                title="The Lean Startup: How Conatant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                id="49538094"
                title="KitchenAid KSM155GBCA 5-Qt. Artisan Design Series with Glass Bowl - Candy Apple Red"
                price={429.00}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81QkLzXfKHL._AC_SX679_.jpg"
                />
             </div>

             <div className="home__row">
                <Product
                id="72521347"
                title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
                price={149.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/715obo1cz0L._AC_SX569_.jpg"
                />
                <Product
                id="10051345"
                title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
                price={69.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SX522_.jpg"
                />
                <Product
                id="92821342"
                title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
                price={949.00}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX425_.jpg"
                />
             </div>
             <div className="home__row">
                <Product
                id="17521388"
                title="Samsung CJ89 43 Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black"
                price={799.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SX569_.jpg"
                />
             </div>

            
     
        </div>
    )
}


export default Home;
