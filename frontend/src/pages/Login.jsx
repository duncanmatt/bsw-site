import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import LoginForm from '../components/shared/LoginForm';

function Login() {
	return (
		<div className='login-wrapper'>
			<div className='login-heading'>
				<h2>
					<UserOutlined /> Login
				</h2>
				<p>login to your account for faster checkout</p>
			</div>
			<div className='login-content'>
				<LoginForm />
				<div className='register-prompt'>
					Don't have an account with us? <br />
					<Button
						block={true}
						href='/register'>
						Register
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Login;
