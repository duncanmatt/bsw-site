import { useNavigate } from 'react-router-dom';

function CategoryCard({ category, height }) {
	const navigate = useNavigate();

	return (
		<div
			className='category-wrapper'
			style={{
				height: `${height}`,
			}}>
			<div
				style={{
					display: 'flex',
					backgroundImage: `url(${category.imgUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					height: 'inherit',
					width: 'inherit',
					justifyContent: 'end',
					borderRadius: '0.835rem',
				}}>
				<div
					className='btn'
					onClick={() => navigate(`/${category.title}`.toLowerCase())}
					style={{
						color: '#f7f7f2',
						height: 'fit-content',
						margin: '1rem 1rem 0 0',
						paddingBlock: '1rem',
						paddingInline: '1.25rem',
						backgroundColor: '#2f2f1d',
						borderRadius: '25% 5rem',
						lineHeight: '1',
						filter: 'drop-shadow(0 0 1rem rgba(51, 51, 51, .4))'
					}}>
					{`${category.title}`.toUpperCase()}
				</div>
			</div>
		</div>
	);
}

export default CategoryCard;
