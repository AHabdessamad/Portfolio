import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./util/themes";
import { Navbar, Hero, Skills, Projects, Contact } from "./components/exports";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
    background: linear-gradient(
    38,73deg,
    rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
    141.27deg, 
    rgba(0, 70, 209, 0.15) 100%, rgba(0, 70, 209, 0.15) 100%
    );
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
        </Wrapper>
        <Projects/>
        <Wrapper>
          <Contact/>
        </Wrapper>
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
