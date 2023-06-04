import {useState} from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery } from '@mui/material';
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  ViewKanban,
  Notifications,
  Help,
  Menu,
  Close } from '@mui/icons-material';
import {useDispatch, useSelector} from 'react-redux';
import {setMode, setLogout} from 'state';
import {useNavigate} from 'react-router-dom';
import FlexBetween from 'components/FlexBetween';

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); //Kollar om det är mobilmenyn eller datormenyn som ska användas
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme(); //Här hämtar vi alla färger vi kommer använda
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  //Convenience variable som ber oss användarens fulla namn
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding='1rem 6%' backgroundColor={alt}>
      <FlexBetween gap='1.75rem'>
        {/*Skapar "Loggan" i menyn som man kan klicka på för att komma till "home".*/}
        <Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 2rem, 2.25rem)'
          color='primary'
          onClick={() => navigate('/home')}
          sx={{ /*Låter oss ha css kod */
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          Hodge
        </Typography>
        {/*Här slutar loggan */}
        {isNonMobileScreens && ( /*Om det är mobilskärm ska sökrutan inte synas */
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius='9px'
            gap='3rem'
            padding='0.1rem 1.5rem'
          >
            <InputBase placeholder='Search...' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap='2rem'>
          <IconButton onClick={() => dispatch(setMode())}> {/*Knapp som ändrar mellan light och dark mode */}
            {theme.palette.mode === 'dark' ? (
              <LightMode sx={{fontSize: '25px'}} />
            ) : (
              <DarkMode sx={{color: dark, fontSize: '25px'}} />
            )}
          </IconButton>
          <Message sx={{fontSize: '25px'}} />
          <Notifications sx={{fontSize: '25px'}} />
          <ViewKanban 
            onClick={() => navigate(`/saved/${user._id}`)}
            sx={{fontSize: '25px'}} />
          <Help sx={{fontSize: '25px'}} /> {/*Vi borde göra så folk får en tour om de klickar här */}
          
          {/*Skapar dropdown menyn */}
          <FormControl variant='standard' value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(`/myprojects/${user._id}`)}>Projects</MenuItem>
              <MenuItem onClick={() => navigate(`/saved/${user._id}`)}>Saved</MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position='fixed'
          right='0'
          bottom='0'
          height='100%'
          zIndex='10'
          maxWidth='500px'
          minWidth='300px'
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display='flex' justifyContent='flex-end' p='1rem'>
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            gap='3rem'
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{fontSize: '25px'}}
            >
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{fontSize: '25px'}} />
              ) : (
                <LightMode sx={{color: dark, fontSize: '25px'}} />
              )}
            </IconButton>
            <Message sx={{fontSize: '25px'}} />
            <Notifications sx={{fontSize: '25px'}} />
            <ViewKanban 
            onClick={() => navigate(`/saved/${user._id}`)}
            sx={{fontSize: '25px'}} />
            <Help sx={{fontSize: '25px'}} />
            <FormControl variant='standard' value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: '150px',
                  borderRadius: '0.25rem',
                  p: '0.25rem 1rem',
                  '& .MuiSvgIcon-root': {
                    pr: '0.25rem',
                    width: '3rem',
                  },
                  '& .MuiSelect-select:focus': {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate(`/myprojects/${user._id}`)}>Projects</MenuItem>
                <MenuItem onClick={() => navigate(`/saved/${user._id}`)}>Saved</MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;