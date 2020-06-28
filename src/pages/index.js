import React from 'react';
import SEO from '../components/seo';
import StandardPage from '../components/layouts/StandardPage';
import HeroImage from '../components/media/HeroImage';
import TestimonialSlider from '../components/content/TestimonialSlider';

const IndexPage = () => (
	<StandardPage>
		<SEO title="Home" />
		<HeroImage
			src="https://via.placeholder.com/1200x500"
			alt="Hero Image"
		/>
		<TestimonialSlider />
	</StandardPage>
);

export default IndexPage;
