import ProductDisplay from '../components/shared/ProductDisplay';

function TShirts() {
	const shirtItems = [
		{
			id: 1,
			title: 'DARK ANGEL TEE',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/short-sleeve-black_1_ktlflp.jpg',
		},
		{
			id: 2,
			title: 'LIGHT ANGEL TEE',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/short-sleeve-white_spoyt5.jpg',
		},
		{
			id: 3,
			title: 'LOGO TEE RED',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/shortsleeve-black-red_1_tpxw5m.jpg',
		},
		{
			id: 4,
			title: 'LOGO TEE BLUE',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/shortsleeve-brown-blue_1_ghv2ik.jpg',
		},
	];

	return (
		<div className='tshirts-wrapper'>
			<div className='tshirts-content'>
				<h2>T-Shirts</h2>
				<ProductDisplay items={shirtItems} />
			</div>
		</div>
	);
}

export default TShirts;
