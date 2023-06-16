
import React from 'react';
import { Card, Comfort, Img1, Img2, Img3, Operator, Van } from '../../assets/icons';
import Footer from '../footer/footer';


const Main = () => {
    return (
        <div className='container section-1'>
            <section className='section-component'>
                <ul className='ul-list-home'>
                    <li>
                        <div className='section-content'>
                            <Van />
                            <div className='order'>
                                <h4>Free Shipping</h4>
                                <p>
                                    On all orders over $75.00
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='section-content'>
                            <Comfort />
                            <div className='order' >
                                <h4>Free Returns</h4>
                                <p>
                                    Returns are free within 9 days
                                </p>
                            </div>

                        </div>

                    </li>
                    <li>
                        <div className='section-content'>
                            <Operator />
                            <div className='order'>
                                <h4>100% Payment Secure</h4>
                                <p>
                                    Your payment are safe with us.
                                </p>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='section-content'>
                            <Card />
                            <div className='order'>
                                <h4>Support 24/7</h4>
                                <p>
                                    Contact us 24 hours a day
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='ready-img'>
                    <div>
                        <span>
                            <Img2 />
                        </span>

                    </div>
                    <div>
                        <span>
                            <Img1 />
                        </span>

                    </div>
                    <div>
                        <span>
                            <Img3 />
                        </span>

                    </div>
                </div>
            </section >
            <section className='container product-container'>
                <div className='product-first-div'>
                    <div className='product-conent'>
                        <h1>
                            Our products
                        </h1>
                        <h2 className='hr1'>

                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
                    </div>
                    <div >
                        <p style={{textAlign:"center"}}>all products</p>
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </div>
        
    );
}

export default Main;
