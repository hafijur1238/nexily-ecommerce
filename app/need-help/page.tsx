import FAQ from "../components/FAQ";
import SupportForm from "../components/SupportForm";

const Help = () => {
	return (
		<div className="min-h-screen bg-white p-8 md:p-16">
			<h1 className="text-2xl md:text-3xl font-bold mb-8">
				Frequently Asked Questions
			</h1>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="lg:w-3/5">
					<FAQ />
				</div>
				<div className="lg:w-2/5">
					<SupportForm />
				</div>
			</div>
		</div>
	);
};

export default Help;
