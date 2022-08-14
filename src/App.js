// import Avion from './Pages/Avion';
import './app.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Avion from './Pages/Avion';
import Vol from './Pages/Vol';
import Reservation from './Pages/Reservation';
import Styled from 'styled-components';

const App = () => {
  return (
    <>
      {/* <Avion /> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Avion'>
            <Container>
              <Avion />
            </Container>
          </Route>
          <Route path='/Vol' component={Vol} />
          <Route path='/Reservation' component={Reservation} />
        </Switch>
      </Router>
    </>
  )
}

export default App;

const Container = Styled.div`
  width: calc(100%-250px);
  margin: 100px 20px 20px 270px;
  padding: 10px;
  background-color: #ffffff;
  height: 100%;
`