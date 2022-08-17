// import Avion from './Pages/Avion';
import './app.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Avion from './Pages/Avion';
import Vol from './Pages/Vol';
import Login from './Pages/Login';
import Reservation from './Pages/Reservation';
import ReservationForm from './Component/ReservationForm';

import Styled from 'styled-components';

const App = () => {
  return (
    <>
      {/* <Avion /> */}
      <Router>

        <Switch>
          <Route exact path='/Home'>
            <Navbar />
            <Container>
              <Home />
            </Container>
          </Route>
          <Route path='/Avion'>
            <Navbar />
            <Container>
              <Avion />
            </Container>
          </Route>
          <Route path='/Vol'>
            <Navbar />
            <Container>
              <Vol />
            </Container>
          </Route>
          <Route path='/Reservation'>
            <Navbar />
            <Container>
              <Reservation />
            </Container>
          </Route>
          <Route path='/Reserve'>
            <Navbar />
            <Container>
              <ReservationForm />
            </Container>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
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