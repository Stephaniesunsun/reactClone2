import {Navbar} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home'
import Next from './pages/NextSection/Next'
import Foot from './pages/Footer/Footer'
import GlobalStyle from './globalStyle';
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
        <Next />
        <Foot />
      </Router>
    </>
  );
}

export default App;

