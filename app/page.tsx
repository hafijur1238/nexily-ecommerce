import BestDeals from "./components/BestDeals";
import CategoriesSection from "./components/CategoriesSection";
import ElectronicsBrands from "./components/ElectronicsBrands";
import HeroSection from "./components/HeroSection";
import NewsItem from "./components/NewsItem";
import SubscribeSection from "./components/SubscribeSection";
import TopSellSection from "./components/TopSellSection";

const page = () => {
	return (
		<div>
			<HeroSection />
			<BestDeals />
			<CategoriesSection />
			<ElectronicsBrands />
			<TopSellSection />
			<NewsItem />
			<SubscribeSection />
		</div>
	);
};

export default page;
