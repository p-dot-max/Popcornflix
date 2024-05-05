import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { CssBaseline, styled } from "@mui/material";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import MovieInformation from "./components/MovieInformation/MovieInformation";
import Actors from "./components/Actors/Actors";
import Movies from "./components/Movies/Movies";
import Profile from "./components/Profile/Profile";

const Customstyle1 = styled('div')(( { theme } ) => ({
  // display: 'flex',
  // height: '100%'
}));

const Content = styled('main')(( { theme } ) => ({
  flexGrow: '1',
  padding: '1em'
}));

const Toolbar = styled('div')(( { theme } ) => ({
  height: '6px'
}));

export default function App() {
  return (
    <Customstyle1>
      <CssBaseline />
      <NavBar />
      <Content>
        {/* <Outlet /> */}
        <Toolbar />
        <BrowserRouter>
          <Routes>
            <Route path="/movie/:id" element={<MovieInformation />}/>
            <Route path="/actors/:id" element={<Actors />}/>
            <Route path="/" element={<Movies />}/>
            <Route path="/profile/:id" element={<Profile />}/>
          </Routes>
        </BrowserRouter>
      </Content>
    </Customstyle1>
  );
}
