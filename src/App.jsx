import React from "react";

// Component
import Advertisement from "./components/ui/Advertisement";
import Header from "./components/layout/Header";

const App = () => {
	// 標頭廣告推薦
	const adtext = "999.9 Gold Selling Price: HK$20,770/Tael, About HK$555/Gram";

	return (
		<>
			<div className="min-h-full bg-white text-text">
				<div className="sticky top-0 w-full">
					<Advertisement text={adtext} />
					<Header />
				</div>
				<div className="h-[200vh]">123</div>
			</div>
		</>
	);
};

export default App;
