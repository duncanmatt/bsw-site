import ProductDisplay from '../components/shared/ProductDisplay';

function Sweatshirts() {
	const sweatShirtItems = [
		{
			id: 1,
			title: 'ANGEL SWEATSHIRT',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/sweatshirt-gray_1_v7viga.jpg',
		},
	];

	return (
		<div className='sweatshirts-wrapper'>
			<div className='sweatshirts-content'>
				<h2>Sweatshirts</h2>
				<ProductDisplay items={sweatShirtItems} />
			</div>
		</div>
	);
}

export default Sweatshirts;
