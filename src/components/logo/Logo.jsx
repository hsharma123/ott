import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./../../assets/images/logo/logo.jfif"; 
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const LinkStyled = styled(Link)(({ direction, theme }) => ({
  display: 'flex',
  columnGap: direction === 'row' ? '10px' : '0',
  alignItems: 'center',
  textDecoration: 'none',
  flexDirection: direction,
  textAlign: 'center',
  '@media (max-width: 1024px)': {
    textAlign: 'left',
    display: 'block',
  },
}));

const ImgStyled = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  '@media (max-width: 768px)': {
    width: '40px',
  },
}));

const TypographyStyled = styled(Typography)(({ direction, theme }) => ({
  color: theme.palette.primary.contrastText,
  marginTop: direction === 'row' ? '10px' : '0',
  '@media (max-width: 1024px)': {
    display: 'none',
  },
}));

const Logo = ({ direction = 'row' }) => {
  const theme = useTheme();

  return (
    <LinkStyled to="/" direction={direction} theme={theme}>
      <ImgStyled src={LogoImage} alt="Logo" theme={theme} />
      <TypographyStyled 
        variant="body2"
        direction={direction}
        theme={theme}
      >
        Shalom Television
      </TypographyStyled>
    </LinkStyled>
  );
};

export default Logo;
