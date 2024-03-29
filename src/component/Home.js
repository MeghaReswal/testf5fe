import '../component/Home.css';
import Products from '../component/Products';

import React from 'react';

function Home() {
    return (
        <>
            <div className='heros'>
                <div className="banner">
                    <div className='container'>
                        <div className="row justify-content-end">
                            <div className='col-lg-7 col-md-8 col-sm-12 heading_div'>
                                <h5 className="card_title">New Session Arival</h5>
                                <p className="card_text">Check Out All The Trends</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </>


    );
}

export default Home;