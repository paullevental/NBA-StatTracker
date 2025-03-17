import {BrowserRouter, Routes, Route} from 'react-router-dom'
import College from './pages/College';
import Home from './pages/Home'
import Country from './pages/Country';
import Team from './pages/Team';
import Name from './pages/Name';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path="/home" element = {<Home />} />
          <Route path="/college" element = {<College />}/ >
          <Route path="/country" element = {<Country />} />
          <Route path="/team" element = {<Team />} />
          <Route path="/name" element= {<Name />} />
        </Routes>
      </BrowserRouter>
    </>
    )
  }


