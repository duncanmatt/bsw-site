import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Sweatshirts from './pages/Sweatshirts';
import TShirts from './pages/T-Shirts';
import Jackets from './pages/Jackets';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
	return (
		<>
			<Router>
				{/* <div className='container'> */}
				<Header />

				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='/sweatshirts'
						element={<Sweatshirts />}
					/>
					<Route
						path='/shirts'
						element={<TShirts />}
					/>
					<Route
						path='/jackets'
						element={<Jackets />}
					/>
				</Routes>
				<Newsletter />
				<Footer />
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
