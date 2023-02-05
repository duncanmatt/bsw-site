import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserAddOutlined } from '@ant-design/icons';
import { Input, Button, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		state => state.auth,
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		// Redirect when logged in
		if (isSuccess || user) {
			navigate('/');
		}

		// dispatch(reset());
	}, [isError, isSuccess, user, message, navigate, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
			navigate('/');
		}
	};

	if (isLoading) {
		return <Spin />;
	}

	return (
		<div className='register'>
			<section className='heading'>
				<h1>
					<UserAddOutlined /> Register {user}
				</h1>
				<p>Please create an account</p>
			</section>

			<form
				name='register'
				className='register-form'
				onSubmit={onSubmit}>
				<div className='form-control'>
					<Input
						name='name'
						type='text'
						value={name}
						onChange={onChange}
						placeholder='Name'
						required
					/>
				</div>
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
					<Input
						name='password2'
						type='password'
						value={password2}
						onChange={onChange}
						placeholder='Confirm Password'
						required
					/>
				</div>
				<div className='form-control'>
					<Button htmlType='submit'>Register</Button>
				</div>
			</form>
		</div>
	);
}

export default Register;
