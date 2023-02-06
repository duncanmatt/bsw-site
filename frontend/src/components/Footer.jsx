

function Footer() {
	return (
		<div
			className='footer'
			style={{
				lineHeight: '18px',
				fontSize: '12px',
				paddingBlock: '.25rem',
				display: 'flex',
				flex: '1',
				alignItems: 'end',
			}}>
			<p
				className='footer-text'
				style={{ textAlign: 'center', width: '100%' }}>
				2023 Black Sheep World
			</p>
		</div>
	);
}

export default Footer;
