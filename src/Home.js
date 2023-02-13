import React from 'react';
import './Home.css';
import Product from './Product';
// import Picture from './pic1.png'


function Home() {
    console.log("home component rendered");
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/613IvcWHzvL._SX3000_.jpg' alt='prime video promo'/>
            <div className='home__row'>
            <Product id="32599" title="Software Engineering Intern : John Feola"
                price={15.00} image="https://i.postimg.cc/90jsv52n/linked-in-profile-pic-2.png"
                rating={5} />
            </div>

            <div className='home__row'>
            <Product id="12345" title="The Innovators: How a Group of Hackers, Genuises, and Geeks Created the Digital Revolution"
                price={22.85} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51W4yxYn-JL._SY445_QL70_.jpg&f=1&nofb=1&ipt=f3f9de661316aaf26ede8c20996bd078f7572ecf667a16ab777f3b7cc795d069&ipo=images"
                rating={5} />
                 <Product id="34567" title="The Mobile Wave: How Mobile Intelligence Will Change Everything"
                price={12.99} image="https://m.media-amazon.com/images/I/41J7ksCzCEL._SX325_BO1,204,203,200_.jpg"
                rating={5} />
                <Product id="13245" title="The Computer Book: From the Abacus to Artificial Intelligence"
                price={11.74} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fa09da815-90ae-4ebc-85b7-4dac8f8b5a73.c7c44b0428cb438d25eb8c579e35214d.jpeg&f=1&nofb=1&ipt=cadefde96602c626598c437fb6c402c1c500958a95cbefa4a4e95b326e3621eb&ipo=images"
                rating={4} />
            </div>

            <div className='home__row'>
            <Product id="45033"title="Steve Jobs"
                price={14.48} image="https://m.media-amazon.com/images/I/41-z0MNHwKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                rating={4} />
                  <Product id="13299" title="Is God a Mathematician?"
                price={9.45} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41+4DPXnUjL._SY344_BO1,204,203,200_.jpg"
                rating={5} />
                  <Product id="90901"title="The Bitcoin Standard: The Dencentralized Alternative to Central Banking"
                price={12.16} image="https://m.media-amazon.com/images/I/41CIGDnsw+S._SY344_BO1,204,203,200_.jpg"
                rating={5} />
            </div>
        </div>
    </div>
  )
}

export default Home;