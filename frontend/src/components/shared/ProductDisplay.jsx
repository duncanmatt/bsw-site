import { Card } from 'antd';

function ProductDisplay({ items }) {
	return (
		<div className='products-wrapper'>
			<div className='products-content'>
				{items.map(item => (
					<Card
						hoverable
						style={{ width: '266px' }}
						key={item.id}
						cover={
							<img
								alt={item.title}
								src={item.imgUrl}
							/>
						}>
						{item.title}
					</Card>
				))}
			</div>
		</div>
	);
}

export default ProductDisplay;
