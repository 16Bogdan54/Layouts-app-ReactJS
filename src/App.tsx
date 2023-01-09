import {Box} from '@mui/material';
import NavBar from "./components/nav/NavBar";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards"
/*
<Code className="whitespace-pre d-block border-2" bg="transparent" color="white" children={
          `.box {
    background-color: white;
    border-radius: 10px;
}`
      }/>
 */

function App() {

  return (
    <Box>
        <NavBar/>
        <Hero/>
        <Cards/>
    </Box>
  )
}

export default App
