import React from "react";

const SubNav = ({ classnames, children }) => {
	return <div className={`items-center justify-center bg-primary h-15 ${classnames}`}>{children}</div>;
};

export default SubNav;
