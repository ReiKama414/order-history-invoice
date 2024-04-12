import React, { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState(null);

	const toggleDrawer = () => setOpen(!open);
	const setDrawerOpen = (newState) => setOpen(newState);
	const setDrawerContent = (newContent) => setContent(newContent);

	return (
		<DrawerContext.Provider value={{ open, setDrawerOpen, toggleDrawer, content, setDrawerContent }}>
			{children}
		</DrawerContext.Provider>
	);
};

export const useDrawer = () => useContext(DrawerContext);
