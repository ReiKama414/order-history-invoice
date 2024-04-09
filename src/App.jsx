import React from "react";

// Component
import Header from "./components/layout/Header";

const App = () => {
	// 標頭廣告推薦
	const adtext = "999.9 Gold Selling Price: HK$20,770/Tael, About HK$555/Gram";
  
	return (
		<>
			<Header adtext={adtext} />
			<div className="h-[200vh]"></div>
		</>
	);
};

export default App;
