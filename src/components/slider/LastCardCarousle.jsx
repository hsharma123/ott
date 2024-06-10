import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box, styled, Typography, IconButton } from '@mui/material'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import image1 from '../../assets/images/cardslider/tamil1.jfif';
import image2 from '../../assets/images/cardslider/tamil2.jfif';
import image3 from '../../assets/images/cardslider/tamil3.jfif';
import image4 from '../../assets/images/cardslider/tamil4.jfif';
import { useTheme } from '@emotion/react';

const BoxStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  border: '2px solid #fff3',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'all .4s ease-in-out',
  overflow: 'hidden',
  '@media (max-width: 1024px)': { 
    marginRight: '0',
  },
  '&:hover': {
    border: '2px solid',
    borderColor: theme.palette.secondary.dark,
    transform: 'scale(1.2)',
    zIndex: 1000,
    margin: '16px 0',
    '@media (min-width: 1400px)': { 
      margin: '25px 0',
    },
  },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  height: '30px',
  width: '30px',
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: '50%',
  position: 'absolute',
  top: '-18px',
  right: '18px',
}));

const BoxDesStyled = styled(Box)(({ theme, visible }) => ({
  padding: '25px 10px 15px',
  backgroundColor: '#18273899',
  backdropFilter: 'blur(30px)',
  height: 'auto',
  width: '100%',
  transition: 'all .5s ease-in-out',
  position: 'absolute',
  left: '0',
  bottom: visible ? '0' : '-100%',
  
}));

const PlaceholderBox = styled(Box)(({ theme }) => ({
  border: '2px solid transparent',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
}));

const LastCardCarousle = () => {
  const sliderRef = useRef(null);
  const cards = [
    { image: image1, name: 'സന്തോഷത്തിന്റെ ദിവ്യരഹസ്യങ്ങൾ....', writer:'Holy Rosary' },
    { image: image2, name: 'ദുഖത്തിന്റെ ദിവ്യരഹസ്യങ്ങൾ....', writer:'Holy Rosary' },
    { image: image3, name: 'ദുഖത്തിന്റെ ദിവ്യരഹസ്യങ്ങൾ....', writer:'Holy Rosary' },
    { image: image4, name: 'ദുഖത്തിന്റെ ദിവ്യരഹസ്യങ്ങൾ....', writer:'Holy Rosary' },
  ];
  const totalSlots = 7;
  const placeholdersNeeded = totalSlots - cards.length;

  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    className: "left",
    centerMode: false,
    speed: 500,
    slidesToShow: totalSlots,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          
        }
      }
    ]
  };

  return (
    <Box sx={{ position: 'relative', height: '280px', '&:hover .arrow': { display: 'block', paddingTop: '5px' },'@media (max-width: 768px)': { 
      height:'auto'
      },
      '@media (max-width: 960px)': { 
        height:' auto',
        },
        '@media (min-width: 1400px)': { 
          height:' 300px',
          },
          '@media (min-width: 1600px)': { 
             height:' 420px',
            }, }}>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{ position: 'relative', padding: '10px 0 10px 10px', overflow: 'visible' }}
          >
            <BoxStyled>
              <Box>
                <img src={card.image} alt={`Slide ${index}`} style={{ width: '100%' }} />
				<BoxDesStyled visible={hoveredIndex === index}>
                <IconButtonStyled>
                  <PlayArrowIcon />
                </IconButtonStyled>
                <Typography variant='body2' sx={{ color: theme.palette.secondary.dark }}>{card.name}</Typography>
				<Typography variant='body2' sx={{ color: theme.palette.primary.contrastText,fontSize:'12px', paddingTop:'5px' }}>{card.writer}</Typography>
              </BoxDesStyled>
              </Box>
              
            </BoxStyled>
          </Box>
        ))}
        {[...Array(placeholdersNeeded)].map((_, index) => (
          <Box key={`placeholder-${index}`} sx={{ position: 'relative', padding: '10px 0 10px 10px', overflow: 'visible' }}>
            <PlaceholderBox />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LastCardCarousle;
