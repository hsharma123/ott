import React from 'react';
import radioImg from '../../assets/images/slider/radio.jpg';
import Layout from '../../layouts/Layout';
import { Box, Container,styled, Grid, Typography } from '@mui/material';
import RadioComponent from '../../components/radio/Radio';
import CardPopupSlider from '../../components/slider/CardPopupSlider';
import { useTheme } from '@emotion/react';
import NextCardCaeousle from '../../components/slider/NextCardCarousle';
import LastCardCarousle from '../../components/slider/LastCardCarousle';
import PodcastCarousle from '../../components/slider/PodcastCarousle';

const BoxStyled = styled(Box)(({ theme }) => ({
    width: '100%',
	  paddingLeft:  '45px',
	'.slick-list':{
      padding: '0 !important'
	},
  '@media (max-width: 1024px)': { 
       padding: '0 18px 0 5px'
    },
  
  }));

const RadioPage = () => {
	const theme =useTheme();
  return (
    <Layout>
      <Box sx={{ overflow: 'hidden', position: 'relative', marginTop: { xs: '55px', md: '55px', lg:'auto' }, height: { xs: '22vh', md: '22vh', lg:'auto' }, }}>
        <Box>
          <img src={radioImg} style={{ width: '100%' }} />
        </Box>
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
      <Container>
        <RadioComponent />
      </Container>
	  <Container maxWidth='xxl'>
        <Box mt={4}   sx={{ padding: '0 30px','@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}> Holy Bible (Courtesy: POC Audio Bible)</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled mb={3}>
        <CardPopupSlider />
      </BoxStyled>
	  <Container maxWidth='xxl'>
        <Box mt={4}   sx={{ padding: '0 30px','@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}> Shalom Times Audio Magazine</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled mb={3}>
        <NextCardCaeousle />
      </BoxStyled>
	  <Container maxWidth='xxl'>
        <Box mt={4}   sx={{ padding: '0 30px','@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}> ജപമാല</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled mb={3}>
        <LastCardCarousle />
      </BoxStyled>
	  <Container maxWidth='xxl'>
        <Box mt={4}   sx={{ padding: '0 30px','@media (max-width: 1024px)': { 
		padding:  ' 0 ',
	  }, }}>
          <Grid container justifyContent='space-between' mb={2}>
            <Grid item>
              <Typography variant='h4' sx={{ color: theme.palette.primary.contrastText }}>Shalom Radio - Podcast</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxStyled mb={3}>
        <PodcastCarousle />
      </BoxStyled>
    </Layout>
  );
};

export default RadioPage;
