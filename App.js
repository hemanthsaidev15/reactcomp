import logo from './logo.svg';
import './App.css';
import Funcomp from './Funcomp';
import LoginPage from './LoginPage'

// import Signup from './Signup.jsx';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
 

function App() {
  return (
    <>
    <Funcomp></Funcomp>
    <LoginPage></LoginPage>
    {/* <Router>
  <Routes>
   
   <Route path='/' element={<LoginPage/>} />
  
  </Routes>
</Router> */}
      
    </>
   
  );
}

export default App;
