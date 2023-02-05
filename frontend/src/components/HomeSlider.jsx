import { createContext, useState, useEffect } from 'react';
import useViewport from '../hooks/useViewport';
import { Carousel } from 'antd';

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

const MobileGallery = ({ title, url }) => (
	<div
		style={{
			background: `center / contain no-repeat url(${url})`,
			width: '100vw',
			height: '100vw',
		}}></div>
);

const DesktopGallery = ({ title, url }) => (
	<div className='desktop-product-gallery'>
		<img
			alt={title}
			src={url}
			style={{
				objectFit: 'contain',
				borderTopLeftRadius: '30px',
				borderBottomLeftRadius: '30px',
			}}
		/>
		<div
			style={{
				minwidth: '300px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#f2f3f4',
				borderTopRightRadius: '30px',
				borderBottomRightRadius: '30px',
			}}>
			<p
				style={{
					paddingInline: '3rem',
					fontWeight: 600,
					fontSize: '1.6rem',

					wordBreak: 'keep-all',
				}}>
				{title}
			</p>
		</div>
	</div>
);

function HomeSlider() {
	const products = [
		{
			id: 1,
			title: 'ANGEL FULL-ZIP',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/zipup-black_1_jxzmgu.jpg',
		},
		{
			id: 2,
			title: 'DARK ANGEL TEE',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/short-sleeve-black_1_ktlflp.jpg',
		},
		{
			id: 3,
			title: 'LIGHT ANGEL TEE',
			imgUrl:
				'https://res.cloudinary.com/dd9eckjri/image/upload/v1674588091/short-sleeve-white_spoyt5.jpg',
		},
	];

	const Gallery = ({ title, url }) => {
		const { width } = useViewport();
		const breakpoint = 1000;

		return width < breakpoint ? (
			<MobileGallery
				title={title}
				url={url}
			/>
		) : (
			<DesktopGallery
				title={title}
				url={url}
			/>
		);
	};

	return (
		<ViewportProvider>
			<Carousel >
				{products.map(product => (
					<div
						key={product.id}
						className='slide-wrapper'>
						<div className='slide-content'>
							<Gallery
								title={product.title}
								url={product.imgUrl}
							/>
						</div>
					</div>
				))}
			</Carousel>
		</ViewportProvider>
	);
}

export default HomeSlider;
