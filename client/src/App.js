import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import CreateProjectPage from 'scenes/createProjectPage';
import ProjectPage from 'scenes/projectPage';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from './theme';
import SavedPage from 'scenes/savedPage';

function App() {
  const mode = useSelector((state) => state.mode); //Tar state info från state/index.js
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //skapar constant tema som låter oss byta mellan ljus/mörkt läge.
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route
              path='/home'
              element={isAuth ? <HomePage /> : <Navigate to='/' />}
            />
            <Route
              path='/profile/:userId'
              element={isAuth ? <ProfilePage /> : <Navigate to='/' />}
            />
            <Route
              path='/saved/:userId'
              element={isAuth ? <SavedPage /> : <Navigate to='/' />}
            />
            <Route
              path='*'
              element={isAuth ? <HomePage /> : <Navigate to='/' />}
            />
            <Route
              path='/projects/:userId'
              element={isAuth ? <ProjectPage /> : <Navigate to='/' />}
            />
            <Route
              path='/createproject/:userId'
              element={isAuth ? <CreateProjectPage /> : <Navigate to='/fuck' />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;