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
/*<Route path="/how-it-works" exact component={HowItWorks}></Route>
<Route path="/workflows" exact component={WorkFlows}></Route>
<Route path="/download" exact component={Download}></Route>
<Route path="/support" exact component={Support}></Route>
<Route path="/shop" exact component={Shop}></Route>
*/