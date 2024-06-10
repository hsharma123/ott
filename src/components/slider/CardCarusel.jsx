import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, styled } from '@mui/material'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../customarrow/CustomArrow';
import image1 from '../../assets/images/cardslider/img1.jfif';
import image2 from '../../assets/images/cardslider/img2.jfif';
import image3 from '../../assets/images/cardslider/img3.jfif';
import image4 from '../../assets/images/cardslider/img4.jfif';
import image5 from '../../assets/images/cardslider/img5.jfif';
import image6 from '../../assets/images/cardslider/img6.jfif';
import image7 from '../../assets/images/cardslider/img7.jfif';
import image8 from '../../assets/images/cardslider/img8.jfif';
import image9 from '../../assets/images/cardslider/img9.jfif';
import image10 from '../../assets/images/cardslider/img10.jfif';
import { useTheme } from '@emotion/react';
import  playIcon from '../../assets/images/slider/paly.png';

const BoxStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  border: '2px solid #fff3',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '15px',
  transition: 'all .4s ease-in-out',
  '@media (max-width: 1024px)': { 
	marginRight: '10px',
  },
'@media (max-width: 768px)': { 
	marginRight: '10px',
  },
  '&:hover': {
    border: '2px solid',
    borderColor: theme.palette.secondary.dark,
    transform: 'scale(1.2)',
	  margin: '15px 0',
    zIndex: 1000,
    '@media (min-width: 1400px)': { 
        margin: '25px 0'
      },
  },
}));

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all  ease .3s',
  '&:hover': {
    opacity: 1,
  },
});

const PlayButton = styled('img')({
	width: '40px',
	height: 'auto',
  });

const CardCarousel = () => {
  const sliderRef = useRef(null);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          centerMode: false,

        },
		
      },
	  {
		breakpoint: 540,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: false,
		  centerMode: false,
		}
	  }
    ]
  };

  return (
    <Box 
	sx={{ position: 'relative',
	 height: '250px', 
	  '&:hover .arrow': { display: 'block' ,paddingTop: '5px' },
	  '@media (max-width: 960px)': { 
		height:' auto',
	  },
    '@media (min-width: 1400px)': { 
      height:' 300px',
      },
      '@media (min-width: 1600px)': { 
        height:' 350px',
        },
	  
	 }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ padding: '10px 0 5px 10px', overflow: 'visible', '@media (max-width: 1400px)': { 
          padding: '30px 0'
          }, }}>
            <BoxStyled>
              <Box>
                <img src={image} alt={`Slide ${index}`} className="carousel-image" style={{ width: '100%' }} />
                <Overlay>
                  <PlayButton src={playIcon} alt="Play" />
                </Overlay>
              </Box>
            </BoxStyled>
          </Box>
        ))}
      </Slider>
      <NextArrow
        onClick={() => sliderRef.current.slickNext()}
        fontSize="14px"
        backgroundColor="#343537"
        hoverBackgroundColor={theme.palette.secondary.dark}
        height="40px"
        width="40px"
        borderRadius="50%"
      />
      <PrevArrow
        onClick={() => sliderRef.current.slickPrev()}
        fontSize="14px"
        backgroundColor="#343537"
        hoverBackgroundColor={theme.palette.secondary.dark}
        height="40px"
        width="40px"
        borderRadius="50%"
        left="-15px"
      />
    </Box>
  );
};

export default CardCarousel;
