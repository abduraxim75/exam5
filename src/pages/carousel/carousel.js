import React from 'react';
import { Carousel } from 'antd';

const MyCarousel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <Carousel className='container' {...settings}>
            <div className=' carousel'>
                <div className='carousel-content'>
                    <div> 
                    <h3 className='carousel-h3'>Face Makeup Brush</h3>
                    <h1>Skincare Brush Set</h1>
                    <h1>Sale 30% Off</h1>
                    <button className='carousel-btn'>shop now</button>
                    </div>

                </div>
            </div>
            <div className='carousel'>
                <div className='carousel-content'>
                    <div className='content'> 
                    <h3 className='carousel-h3'>Face Makeup Brush</h3>
                    <h1>Skincare Brush Set</h1>
                    <h1>Sale 30% Off</h1>
                    <button  className='carousel-btn'>shop now</button>
                    </div>

                </div>
            </div>
            <div className='carousel'>
                <div className='carousel-content'>
                    <div> 
                    <h3 className='carousel-h3'>Face Makeup Brush</h3>
                    <h1>Skincare Brush Set</h1>
                    <h1>Sale 30% Off</h1>
                    <button className='carousel-btn'>shop now</button>
                    </div>

                </div>
            </div>
        </Carousel>
    );
};

export default MyCarousel;