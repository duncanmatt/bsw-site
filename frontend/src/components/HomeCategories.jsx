import { useState, useEffect, createContext } from 'react';
import useViewport from '../hooks/useViewport';
import CategoryCard from './shared/CategoryCard';
import { Col, Row } from 'antd';

const viewportContext = createContext();

const ViewportProvider = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<viewportContext.Provider value={width}>
			{children}
		</viewportContext.Provider>
	);
};

function HomeCategories() {
	const categories = [
		{
			id: 1,
			title: 'Sweatshirts',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/sweatshirt-gray_1_v7viga.jpg',
		},
		{
			id: 2,
			title: 'Shirts',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/shortsleeve-black-red_1_tpxw5m.jpg',
		},
		{
			id: 3,
			title: 'Jackets',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/zipup-black_1_jxzmgu.jpg',
		},
	];

	function MobileCategories({ categories }) {
		return (
			<div className='categories-wrapper-mobile'>
				{categories.map(category => (
					<CategoryCard
						height='94vw'
						key={category.id}
						category={category}
					/>
				))}
			</div>
		);
	}

	function DesktopCategories({ categories }) {
		const { width } = useViewport();
		const breakpoint = 1000;

		return (
			<div className={'categories-wrapper-desktop'}>
				<Row gutter={[16, 16]}>
					<Col span={width < breakpoint ? 12 : 8}>
						<CategoryCard
							height={width < breakpoint ? '44vw' : '33vw'}
							category={categories[0]}
						/>
					</Col>
					<Col span={width < breakpoint ? 12 : 8}>
						<CategoryCard
							height={width < breakpoint ? '44vw' : '33vw'}
							category={categories[1]}
						/>
					</Col>
					<Col span={width < breakpoint ? 24 : 8}>
						<CategoryCard
							height={width < breakpoint ? '94vw' : '33vw'}
							category={categories[2]}
						/>
					</Col>
				</Row>
			</div>
		);
	}

	const DisplayCategories = () => {
		const { width } = useViewport();
		const breakpoint = 430;

		return width < breakpoint ? (
			<MobileCategories categories={categories} />
		) : (
			<DesktopCategories categories={categories} />
		);
	};

	return (
		<ViewportProvider>
			<section className='home-categories'>
				<h2 className='categories-header'>Outerwear</h2>
				<DisplayCategories />
			</section>
		</ViewportProvider>
	);
}

export default HomeCategories;
