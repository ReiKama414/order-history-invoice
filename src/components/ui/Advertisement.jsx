import React from "react";

const Advertisement = ({ text }) => {
	return (
		<div className="bg-background text-text xl:min-h-10 min-h-9 flex items-center justify-center  xl:text-sm text-xs">
			{text}
		</div>
	);
};

export default Advertisement;
