import {Box} from '@mui/material';
import NavBar from "./components/nav/NavBar";
import AppRoutes from "./components/routes/AppRoutes";
// import Hero from "./components/hero/Hero";
// import AuthorCards from "./components/cards/AuthorCards"

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
        <AppRoutes/>
        {/*<Hero/>*/}
        {/*<AuthorCards/>*/}
    </Box>
  )
}

export default App
