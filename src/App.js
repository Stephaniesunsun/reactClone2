import {Navbar} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
