import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home';
import Cart from './components/Cart';
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className='navbar'>
        <p>Shooping Cart</p>
        <div>
          <Link style={{color:'white',textDecoration:'none',marginRight:'50px'}} to='/'>Home</Link>
          <Link style={{color:'white',textDecoration:'none',marginRight:'50px'}} to='cart'>Cart</Link>
        </div>
      </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
        </Routes>
      
  
    </Provider>
  );
}

export default App;
