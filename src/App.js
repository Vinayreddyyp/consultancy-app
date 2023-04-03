
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';

function App() {

  return (
    <Router>
    <div className="App">
      <header className='App-header'>
       
       <Header/>
   
        <Routes>
          <Route path="/contact"  element={<Contact />}/>   
        </Routes>
   
      </header>
    </div>
  </Router>
  );
}

export default App;
