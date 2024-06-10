import { useTheme } from '@emotion/react';
import { Grid, Typography, styled, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import CardCarousel from '../../components/slider/CardCarusel';
import HeroSlider from '../../components/slider/HeroSlider';
import Layout from '../../layouts/Layout';

const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textDecoration: 'none',
  fontWeight: '700',
  transition: 'all .2s',
  
  '&:hover': {
    color: theme.palette.primary.contrastText
  }
}));
const BoxStyled = styled(Box)(({ theme }) => ({
    width: '100%',
	paddingLeft:  '45px',
	'.slick-list':{
      padding: '0 !important'
	},
	'@media (max-width: 1024px)': { 
		padding:  ' 0 15px',
	  },
	'@media (max-width: 768px)': { 
		padding:  ' 0 15px',
	  },
  }));

const Kids = () => {
  const theme = useTheme();
  
  return (
    <Layout>
      <HeroSlider />
      <Container maxWidth='xxl'>
        <Box mt={3}  sx={{ padding: '0 30px','@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}> Motivational</Typography>
            </Grid>
            <Grid item>
              <LinkStyled to='/'> View All</LinkStyled>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled>
        <CardCarousel />
      </BoxStyled>
	  <Container maxWidth='xxl'>
        <Box mt={3}  sx={{ padding: '0 30px' ,'@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}> Telefilms</Typography>
            </Grid>
            <Grid item>
              <LinkStyled to='/'> View All</LinkStyled>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled>
        <CardCarousel />
      </BoxStyled>
	  <Container maxWidth='xl'>
        <Box mt={3}  sx={{ padding: '0 30px' ,'@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}> Motivaional</Typography>
            </Grid>
            <Grid item>
              <LinkStyled to='/' sx={{'@media (max-width: 1024px)': { 
		 fontSize:'20px'
	  }, }}> View All</LinkStyled>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled mb={3}>
        <CardCarousel />
      </BoxStyled>
    </Layout>
  );
};

export default Kids;
