import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Contributions from './components/Contributions'
import Contact from './components/Contact'
import styled from 'styled-components'

function App() {

  return (
    <>
    <Home />
    <Projects />
    <Contributions />
    <Contact />
    <Rights>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</Rights>
    </>
  )
}

const Rights = styled.div`
  margin: 2rem 0;
  font-weight: 200;
  
  @media screen and (max-width: 762px) {
    font-size: 0.75rem;
  }
`

export default App
