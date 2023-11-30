import React from 'react'
import './topBrands.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandList = [
    {
        id:1,
        title: "La Pino'z Pizza",
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160212.png?output-format=webp"
    },
    {
        id:2,
        title: "McDonald's",
        time: "23 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383084.png?output-format=webp"
    },
    {
        id:3,
        title: "Burger King",
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187787.png"
    },
    {
        id:4,
        title: "Domino's Pizza",
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1583218467.png?output-format=webp"
    },
    {
        id:5,
        title: "KFC",
        time: "28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433428.png?output-format=webp"
    },
    {
        id:6,
        title: "Subway",
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520851.png?output-format=webp"
    },
    {
        id:7,
        title: "Roll Nation",
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/40240642ecd418a22d86b83b6294ec32_1617951162.png?output-format=webp"
    },
    {
        id:8,
        title: "Roll Express",
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2c016d3df949bb43d9f128abf6923d56_1580883937.png?output-format=webp"
    },
    {
        id:9,
        title: "Briyani Blues",
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ee4e8f69c552e612a2dbb9aa891a7670_1594200586.png?output-format=webp"
    },
    {
        id:10,
        title: "Pizza Hut",
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
    },


];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };




function TopBrands() {
  return (
    <div className='top-brands max-width'>
    <div className='collection-title'>Top brands for you</div>
    <Slider {...settings}>
    {topBrandList.map((brand) => {
        return <div className='top-brands-cover'>
            <img src={brand.cover} className='top-brands-image' alt={brand.image}/>
            </div>
    })}
    </Slider>
    </div>
  )
}

export default TopBrands