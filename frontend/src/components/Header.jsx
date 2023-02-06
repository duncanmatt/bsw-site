import { useState } from 'react';
import {
	ShoppingCartOutlined,
	MenuOutlined,
	UserOutlined,
	UserDeleteOutlined,
	CloseOutlined,
	RightOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const showMenu = () => setMenuOpen(!menuOpen);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	const links = [
		{
			id: 0,
			title: 'Sweatshirts',
			page: '/sweatshirts',
		},
		{
			id: 1,
			title: 'T-shirts',
			page: '/shirts',
		},
		{
			id: 2,
			title: 'Jackets',
			page: '/jackets',
		},
	];

	return (
		<header className='header-wrapper'>
			{menuOpen ? (
				<div className='menu-content'>
					<div className='menu-upper-wrapper'>
						<strong style={{ alignSelf: 'flex-start' }}>Black Sheep</strong>

						<CloseOutlined
							style={{ alignSelf: 'flex-end' }}
							onClick={showMenu}
						/>
					</div>
					<hr />
					<div className='menu-lower-wrapper'>
						<ul className='menu-links'>
							{links.map(link => (
								<Link
									to={`${link.page}`}
									key={link.id}>
									<li
										className='menu-link'
										onClick={showMenu}>
										{link.title}
										<RightOutlined style={{ alignSelf: 'flex-end' }} />
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className='header-content'>
					<MenuOutlined
						className='menu-icon-wrapper'
						style={{
							fontSize: '1.1rem',
							justifySelf: 'left',
							maxWidth: 'fit-content',
						}}
						onClick={showMenu}
					/>

					<span className='header-title-wrapper'>
						<Link to='/'>
							<h1 className='header-title'>Black Sheep</h1>
						</Link>
					</span>
					<span className='header-navigation-wrapper'>
						{user ? (
							<UserDeleteOutlined onClick={onLogout} />
						) : (
							<Link to='/login'>
								<UserOutlined />
							</Link>
						)}
						<Link to='/cart'>
							<ShoppingCartOutlined />
						</Link>
					</span>
				</div>
			)}
		</header>
	);
}

export default Header;
