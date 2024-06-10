import { Box, Container, Grid,List,Stack, ListItem,Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material';
import Logo from '../components/logo/Logo';
import { Link } from 'react-router-dom';
import  Google from '../assets/images/ott/google.svg';
import  Apple from '../assets/images/ott/apple.svg';
import  Roku from '../assets/images/ott/roku.png';
import { useTheme } from '@emotion/react';

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(4, 0), 
  borderTop: '1px solid #0000',
  borderBottom:'1px solid #636364',
  marginTop: '60px'
}));
const ListStyled = styled(List)(({ theme }) => ({
	display:'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: ' 15px  0 0',
	'@media (max-width: 1024px)': { 
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent:'flex-start',
		alignItems: 'start'
	},
}));
const ListItemStyled = styled(ListItem)(({ theme }) => ({
	position: 'relative',
	padding: '0 20px',
	cursor: 'pointer',
	width:'auto',
    '&:after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
	  height: '5px',
	  width: '5px',
	  left: '7px',
	  top: '14px',
      backgroundColor: theme.palette.primary.contrastText,
	 
    },
	'@media (max-width: 1024px)': { 
		marginBottom: '20px',
	},
}));
const LinkStyled = styled(Link)(({ theme }) => ({
    position: 'relative',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    fontSize: '17px',
    letterSpacing: '1.5px',
	padding: '5px 0',
	whiteSpace:'nowrap',
	cursor: 'pointer',
	transtion: ' all .2s',
	'&:after': {
		content: '""',
		position: 'absolute',
		width: '0',
		bottom: '0',
		left: '0',
		top: 'inherit',
		height: '2px',
		transition: ' all .2s',
		backgroundColor: theme.palette.info.main,
	   
	},
	'&:hover:after':{
		width: '100%'
	}
  }));
  const LinkImgStyled = styled(Link)(({ theme }) => ({
      cursor: 'pointer',
	  'img':{
		width: '100px',
		'&:hover':{
			opacity: '.8'
		},
		'@media (min-width: 1400px)': { 
			
			width: '150px',
		 },
		'@media (max-width: 1024px)': { 
			
			 width: '70px',
			 marginBottom: '10px',
			 marginLeft:'5px'
		  },
		
	  }
  }));
  


const Footer = () => {
const theme = useTheme();
  return (
  <>
    <BoxStyled>
      <Container maxWidth='xxl'>
         <Box sx={{padding: '0 13px','@media (max-width: 1024px)': { 
									padding: '0'
								  },}}>
			<Grid container alignItems="center">
				<Grid item xs={12} md={12} lg={2} justifyContent='flex-start'>
					<Logo direction="column" />
				</Grid>
				<Grid item xs={12} md={12} lg={10} >
					<Grid container alignItems='center'>
						<Grid item xs={12} md={12} lg={7}>
							<ListStyled>
								<ListItemStyled>
									<LinkStyled to='/termscondition'>Terms and condition</LinkStyled>
								</ListItemStyled>
								<ListItemStyled>
									<LinkStyled to='/privacypolicy'>Privacy Policy</LinkStyled>
								</ListItemStyled>
								<ListItemStyled>
									<LinkStyled to='/faq'>Faq</LinkStyled>
								</ListItemStyled>
								<ListItemStyled>
									<LinkStyled to='/contact-us'>Contact Us</LinkStyled>
								</ListItemStyled>
								<ListItemStyled>
									<LinkStyled to='/about-us'>About Us</LinkStyled>
								</ListItemStyled>
							</ListStyled>
						</Grid>
						<Grid item xs ={12} lg={1}></Grid>
						<Grid item xs ={12} lg={4} pt={2}>
							<Stack direction='row' alignItems='center' justifyContent='flex-end'   spacing={{ xs: 0,lg:2}}
							sx={{
								'@media (max-width: 1024px)': { 
									flexWrap: 'wrap',
									flexDirection:'column',
									justifyContent:'flex-start',
									alignItems: 'start',
									marginLeft: '0'
								  },
							}}>
								<LinkImgStyled to ='/'>
									<img src ={Google}  alt='Google Play' />
								</LinkImgStyled>
								<LinkImgStyled to ='/'>
									<img src ={Apple}  alt='Apple Play' />
								</LinkImgStyled>
								<LinkImgStyled to ='/' ml={0}>
									<img src ={Roku}  alt='Roku' />
								</LinkImgStyled>
							</Stack>
		            	</Grid>
					</Grid>
				</Grid>
			</Grid>	
		 </Box>
		 
      </Container>
    </BoxStyled>
	<Box sx={{backgroundColor: theme.palette.secondary.main,}}>
		<Typography variant= 'body2' sx={{color: theme.palette.primary.contrastText, padding: '15px 0', textAlign:'center','@media (max-width: 1024px)': { 
									textAlign: 'left',
									padding: '50px'
								  },
								  '@media (max-width: 768px)': { 
									textAlign: 'center',
									padding: '50px'
								  },
								  }}>
		© Copyright 2023 Shalom Television All Right Reserved
		</Typography>
	</Box>
  </>
	
  );
};

export default Footer;
