
import React from 'react'
import { Grid,styled,Stack, Box, Typography,Button } from '@mui/material'
import logo from '../../assets/images/logo/radio.jpg'

const BoxStyled = styled(Box)(({ theme }) => ({
     width: '750px',
	 padding: ' 16px 10px',
	 borderRadius: '15px',
	 margin:'auto',
	 backgroundColor: theme.palette.info.dark,
	 '@media (max-width: 1024px)': { 
		width: '95%',
	  },

}));
const TypographyStyled = styled(Typography)(({ theme }) => ({
	position:'relative',
	'&:before':{
		position: 'absolute',
		bottom: 0,
		left: '-5px',
		right: 0,
		top: '0',
		margin: 'auto',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		backgroundColor: 'red',
		opacity: 1,
		content: '""',
		display: 'block',
		animationIterationCount: 'infinite',
		animation: 'flashing 1s ease-out 1s', 
        border: '3px solid red',
	},

}));
const BtnStyled = styled(Button)(({ theme }) => ({
	padding: '2px 25px',
	fontSize: '1rem',
	letterSpacing: '1.5px',
	backgroundColor: '#47b9d5',
	borderRadius: '30px',
	color: theme.palette.primary.contrastText,
	transition: ' all ease .5s',
	'&:hover': {
	  backgroundColor: 'unset',
	  backgroundImage: 'linear-gradient(90deg, #39a1bb, #47b9d5)',
	},
  }));

const Radio = () => {
  return (
	<>
	<Grid container mt={4} mb={5}>
        <Grid item xs={12} sx={{margin:'auto'}}>
			<BoxStyled>
                <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{'@media (max-width: 1024px)': { 
		          display:'flex', flexWrap: 'wrap', flexDirection:'column', alignItems:'center'
	  },}}>
                    <Box sx={{display:'flex', alignItems: 'center', columnGap: '20px','@media (max-width: 1024px)': { 
		          display:'flex', flexWrap: 'wrap', flexDirection:'column', alignItems:'center'
	  },}}>
						<Box sx={{width: '100px' ,backgroundColor:'#fff', margin: '0 20px' ,padding:'8px', borderRadius: '5px'}}>
							<img src={logo} alt =''  style={{maxWidth: '100%'}}/>
					    </Box>
                        <Box>
							<Box sx={{display: 'flex', columnGap: '20px', alignItems: 'center',flexWrap:'wrap','@media (max-width: 1024px)': { 
		         marginTop:'10px'
	  }, }}>
								<Typography variant='h4'>Radio</Typography>
								<Box variant='body2' sx={{	color: 'red',position:'relative', display:'flex', alignItems:'center', columnGap: '10px'}}>
									<TypographyStyled variant='body2' sx=''></TypographyStyled>
									Live
								</Box>
							</Box>
						  	<Typography variant='body1' mt={1} sx={{opacity:'.8','@media (max-width: 1024px)': { 
		                       marginBottom:'15px'
	  },}}>Radio For Web</Typography>
						</Box>
					</Box>
				   <BtnStyled variant="contained" sx={{}}>Play</BtnStyled>
				 
			    </Stack>
			</BoxStyled>
		</Grid>
	</Grid>
	</>
  )
}

export default Radio
