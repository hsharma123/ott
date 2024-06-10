import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export const PrevArrow = ({ onClick, fontSize, backgroundColor, hoverBackgroundColor, height, width, borderRadius,left, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
	  left: left || '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'white',
      display: 'none',
	  transition: 'all .2s',
      backgroundColor,
      height,
      width,
      borderRadius,
      '&:hover': {
		backgroundColor: hoverBackgroundColor || 'transparent',
        transition: 'background-color 0.3s ease',
      },
      ...sx
    }}
    className="arrow"
  >
    <ArrowBackIos sx={{ fontSize }} />
  </IconButton>
);

export const NextArrow = ({ onClick, fontSize, backgroundColor, hoverBackgroundColor, height, width, borderRadius, sx }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: 'white',
      display: 'none',
	  transition: 'all .2s',
      backgroundColor,
      height,
      width,
      borderRadius,
      '&:hover': {
        backgroundColor: hoverBackgroundColor || 'transparent',
        transition: 'background-color 0.3s ease',
      },
      ...sx
    }}
    className="arrow"
  >
    <ArrowForwardIos sx={{ fontSize }} />
  </IconButton>
);
