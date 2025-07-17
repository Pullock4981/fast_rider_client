import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
    return (
        <div className="w-full my-4 rounded-2xl overflow-hidden shadow-lg">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
                transitionTime={600}
                emulateTouch={true}
            >
                <div>
                    <img src={bannerImg1} alt="Banner 1" className="h-96 w-full" />
                </div>
                <div>
                    <img src={bannerImg2} alt="Banner 2" className="h-96 w-full" />
                </div>
                <div>
                    <img src={bannerImg3} alt="Banner 3" className="h-96 w-full" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;