
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'
import Blogs from './pages/blogs'
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <Router>
      <Switch>
        <ScrollToTop>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route path='/contact' component={Contact} exact/>
        <Route path='/blogs' component={Blogs} exact/>

        </ScrollToTop>
       
      </Switch>
      
    </Router>
   
  );
}

export default App;
