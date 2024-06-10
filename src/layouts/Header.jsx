import React,{useState,useEffect} from 'react';
import { Box, AppBar, Toolbar, List, ListItem, styled, Grid, Button,Container,Drawer,
	IconButton, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import Logo from '../components/logo/Logo';
import { useTheme } from '@emotion/react';


const ListItemStyled = styled(ListItem)(({ theme }) => ({
    position: 'relative',
	padding: '0 15px',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '7px',
      opacity: '0.5',
      right: '0',
      height: '15px',
      width: '1px',
      backgroundColor: theme.palette.primary.contrastText,
	 
    },
	'&:last-child:after': {
		display: 'none',
	  },
  }));
  const ListStyled = styled(ListItem)(({ theme }) => ({
   display:'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   padding: ' 15px  0 0',
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
  const BtnStyled = styled(Button)(({ theme }) => ({
	padding: '10px 25px',
	fontSize: '1rem',
	letterSpacing: '1.5px',
	backgroundColor: '#47b9d5',
	borderRadius: '7px',
	color: theme.palette.primary.contrastText,
	transition: ' all ease .5s',
	'&:hover': {
	  backgroundColor: 'unset',
	  backgroundImage: 'linear-gradient(90deg, #39a1bb, #47b9d5)',
	},
  }));
  const ButtonMobileStyled = styled(Button)(({ theme }) => ({
	minWidth: '0',
	paddingRight: '0',
  }));
  const ButtonStyled = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	transition: ' all ease .5s',
	margin: '0 15px',
	height: '50px',
	minWidth: '50px',
	borderRadius: '50%',
	'&:hover': {
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
		height: '50px',
		minWidth: '50px'
	  },
  }));
const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const theme = useTheme();
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	  };
	  useEffect(() => {
		const handleScroll = () => {
		  if (window.scrollY > 100) { 
			setIsSticky(true);
		  } else {
			setIsSticky(false);
		  }
		};
	
		window.addEventListener('scroll', handleScroll);
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);
 

  
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    	 <Toolbar>
			<Grid container alignItems="center" justifyContent="space-between">
			<Grid item xs={12}>
				<Box sx={{position:'relative'}}>
					<Logo />
					<IconButton onClick={handleDrawerToggle} sx={{ position:'absolute', top:'5px', right:'10px', color: theme.palette.primary.contrastText ,border: '1px solid #fff', padding:' 5px 10px',height:'40px', borderRadius: '7px'}}>
					<CloseIcon />
					</IconButton>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Box>
				<Box sx={{ display: { xs: 'block', md:'none' } }}>
					<List sx={{ display: 'block'}}>
					<ListStyled>
						<LinkStyled to="/">Home</LinkStyled>
						<ButtonMobileStyled><KeyboardArrowRightIcon sx={{color: theme.palette.primary.contrastText, fontSize:'20px'}}  /></ButtonMobileStyled>
					</ListStyled>
					<ListStyled>
						<LinkStyled to="/radio">Radio</LinkStyled>
						<ButtonMobileStyled><KeyboardArrowRightIcon sx={{color: theme.palette.primary.contrastText, fontSize:'20px'}} /></ButtonMobileStyled>
					</ListStyled>
					<ListStyled>
						<LinkStyled to="/kids">Kids TV</LinkStyled>
						<ButtonMobileStyled><KeyboardArrowRightIcon sx={{color: theme.palette.primary.contrastText, fontSize:'20px'}} /></ButtonMobileStyled>
					</ListStyled>
					</List>
				</Box>			
				</Box>
			</Grid>
			</Grid>
		</Toolbar>
    </Box>
  );
  
  return (
    <>
      <Box>
        <AppBar position='fixed'  sx={{
    backgroundColor: isSticky ? '#182738' : 'transparent',
    backgroundImage: isSticky ? '#182738' : 'unset',
    boxShadow: isSticky ? '0 1px 5px #0000001a' : 'none',
    transition: 'background-color 0.3s ease',
    '@media (max-width: 960px)': { 
      boxShadow: '0 1px 5px #0000001a', 
      position: 'fixed', 
      zIndex: 1000, 
	  backgroundColor: '#182738',
	  overflow: 'hidden'
    },
  }}>
          <Container maxWidth='xxl'>
				<Toolbar sx={{ '@media (max-width: 1024px)': { 
            padding:'0'
    },}}>
					<Grid container alignItems="center" justifyContent="space-between">
					<Grid item xs={3}>
						<Logo />
					</Grid>
					<Grid item xs={9} sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ marginLeft: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
						<Box sx={{ display: { xs: 'none', sm: 'none', md:'block' } }}>
							<List sx={{ display: 'flex', justifyContent: 'space-between'}}>
							<ListItemStyled>
								<LinkStyled to="/">Home</LinkStyled>
							</ListItemStyled>
							<ListItemStyled>
								<LinkStyled to="/radio">Radio</LinkStyled>
							</ListItemStyled>
							<ListItemStyled>
								<LinkStyled to="/kids">Kids TV</LinkStyled>
							</ListItemStyled>
							</List>
						</Box>
						<Link to="/search">
							<ButtonStyled>
							<SearchIcon sx={{color: theme.palette.primary.contrastText, fontSize:'25px'}} />
							</ButtonStyled>
						</Link>
						  <BtnStyled variant="contained" sx={{ display: { xs: 'none', md: 'block' }  }}>Donation</BtnStyled>
						  <IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							sx={{
								mr: 2,
								display: { sm: "block", md:'none' },
								'@media (max-width: 1024px)': { 
									 padding: '0', margin: '0'
								  },
							}}
							onClick={handleDrawerToggle}
							>
							<MenuIcon />
							</IconButton>
						</Box>
					</Grid>
					</Grid>
				</Toolbar>
				<Box>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					anchor= 'right'
					onClose={handleDrawerToggle}
					sx={{
					display: { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: "240px",
						backgroundColor: 'unset',
						backgroundImage: 'linear-gradient(90deg, #182738, #22354c)',
						paddingTop: '15px',
					},
					}}
				>
					{drawer}
				</Drawer>
                </Box>
		  </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
