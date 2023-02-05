import ProductDisplay from '../components/shared/ProductDisplay';

function Jackets() {
	const jacketItems = [
		{
			id: 1,
			title: 'ANGEL FULL-ZIP',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/zipup-black_1_jxzmgu.jpg',
		},
	];

	return (
		<div className='jackets-wrapper'>
			<div className='jackets-content'>
				<h2>Jackets</h2>
				<ProductDisplay items={jacketItems} />
			</div>
		</div>
	);
}

export default Jackets;
