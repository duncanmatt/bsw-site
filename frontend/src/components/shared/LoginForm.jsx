import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import { Spin, Button, Input } from 'antd';

function LoginForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			toast.error('User Credentials Not Recognized');
		}

		// Redirect when logged in
		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [isError, isSuccess, user, message, navigate, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spin />
	}

	return (
		<div className='login-form-wrapper'>
			<div className='login-form-content'>
				<form
					name='login'
					className='login-form'
					onSubmit={onSubmit}>
					<div className='form-control'>
						<Input
							name='email'
							value={email}
							onChange={onChange}
							placeholder='Email'
							type='email'
							required
						/>
					</div>
					<div className='form-control'>
						<Input
							name='password'
							type='password'
							value={password}
							onChange={onChange}
							placeholder='Password'
							required
						/>
					</div>
					<div className='form-control'>
						<Button htmlType='submit'>Login</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
