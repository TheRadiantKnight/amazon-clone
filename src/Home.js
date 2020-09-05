import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                {/* Product id, title, price, rating, image */}
                <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={15}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />

                <Product
                    id="12321400"
                    title="Apple iMac (27-inch, 8GB RAM, 2TB Storage) - Previous Model"
                    price={2500}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/810RI8O1jJL._AC_SX425_.jpg"
                    />
                </div>

                <div className="home__row">
                <Product
                    id="12321341"
                    title="All-new Blink Outdoor – wireless, weather-resistant HD"
                    price={100}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61dymHa0ECL._SL1000_.jpg"
                    />

                <Product
                    id="12321341"
                    title="Marvel's Avengers for PlayStation 4"
                    price={60}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SL1500_.jpg"
                    />

                <Product
                    id="12321480"
                    title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa"
                    price={170}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/613HESgMbAL._AC_UY218_.jpg"
                    />
                </div>
                <div className="home__row">
                <Product
                    id="12321500"
                    title="Samsung UN65RU7300FXZA Curved 65-Inch 4K UHD"
                    price={697}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91o08DsRplL._AC_UY218_.jpg"
                    />

                </div>
                {/* Product */}
                    
        
        </div>
    );
}

export default Home
