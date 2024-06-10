import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import religion from '../../assets/images/slider/relegion.jfif';
import night from '../../assets/images/slider/night.jfif';
import old from '../../assets/images/slider/old.jfif';
import asetic from '../../assets/images/slider/asetic.jfif';
import { NextArrow, PrevArrow } from '../customarrow/CustomArrow';
import { useTheme } from '@emotion/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    appendDots: dots => (
      <Box sx={{ 
        position: 'absolute', 
        bottom: '20px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          padding: 0 
        }}>{dots}</ul>
      </Box>
    ),
    customPaging: (i) => (
      <Box
        key={i}
        sx={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: i === currentSlide ? theme.palette.secondary.dark : 'white',
          margin: '0 5px',
          transition: 'background-color 0.3s ease',
        }}
      />
    ),
    afterChange: (index) => {
      setCurrentSlide(index);
    }
  };

  const slidesData = [
    { id: 1, image: religion, alt: 'Religion Image' },
    { id: 2, image: night, alt: 'Night Image' },
    { id: 3, image: old, alt: 'Old Image' },
    { id: 4, image: asetic, alt: 'Asetic Image' },
  ];

  return (
    <Box sx={{ overflow: 'hidden',width:'100%', position: 'relative' }}>
      <Box 
        sx={{ 
          width: '100%', 
          height: '100%', 
          cursor: 'pointer',
          marginTop: { xs: '55px', md: '55px', lg:'auto' }, height: { xs: '22vh', md: '22vh', lg:'auto' }, 
          transition: 'all ease .5s',
          '&:hover .arrow': {
            display: 'block', 
          } 
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {slidesData.map(slide => (
            <Box
              key={slide.id}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <img src={slide.image} alt={slide.alt} style={{ width: '100%', }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                }}
              />
            </Box>
          ))}
        </Slider>
        <NextArrow
          onClick={() => sliderRef.current.slickNext()}
          fontSize="60px"
        />
        <PrevArrow
          onClick={() => sliderRef.current.slickPrev()}
          fontSize="60px"
        />
      </Box>
    </Box>
  );
};

export default HeroSlider;
