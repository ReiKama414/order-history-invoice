import React from "react";

// Component
import Advertisement from "./components/ui/Advertisement";
import Header from "./components/layout/Header";
import MemberInfo from "./pages/App/MemberInfo";
import Footer from "./components/layout/Footer";

const App = () => {
	// 標頭廣告推薦
	const adtext = "999.9 Gold Selling Price: HK$20,770/Tael, About HK$555/Gram";

	const memberInfo = {
		name: "Ms Annie Wong",
		memberId: "908475930",
		membershipLevel: "GOLD",
		ctfPoints: "3000",
	};

	return (
		<>
			<div className="min-h-full bg-white text-text">
				{/* Header */}
				<div className="sticky top-0 w-full">
					<Advertisement text={adtext} />
					<Header />
				</div>
				{/* MainContent */}
				<div className="container mx-auto h-[200vh] lg:max-w-screen-lg xl:pt-12 xl:pb-8 px-8 py-3">
					<MemberInfo memberInfo={memberInfo} />
				</div>
				{/* Footer */}
				<div className="text-white bg-primary pt-10 pb-2.5 px-8">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default App;
