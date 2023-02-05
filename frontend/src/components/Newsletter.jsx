import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Button, Spin } from 'antd';
import { subscribe } from '../features/newsletter/newsletterSlice';

function Newsletter() {
	const [formData, setFormData] = useState({
		email: '',
	});

	const { email } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { newsletter, isLoading, isError, isSuccess, message } = useSelector(
		state => state.newsletter,
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		
	

	}, [isError, isSuccess, newsletter, message, navigate, dispatch]);

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = e => {
		e.preventDefault();

		if (!email) {
			toast.error('Please enter a valid email address');
		} else {
			const subData = {
				email,
			};
			dispatch(subscribe(subData));
			setFormData('');
		}
	};

	if (isLoading) {
		return <Spin />
	}

	return (
		<div className='newsletter-wrapper'>
			<div className='newsletter'>
				<h3>JOIN OUR NEWSLETTER</h3>
				<p>Stay up to date with our latest releases and much more.</p>
				<form
					className='newsletter-form'
					onSubmit={onSubmit}
					>
					<Input
						name='email'
						id='email'
						value={email}
						onChange={onChange}
						placeholder='Email address'
						type='email'
						required
					/>
					<Button htmlType='submit' className='subscribe-btn'>Subscribe</Button>
				</form>
			</div>
		</div>
	);
}

export default Newsletter;
