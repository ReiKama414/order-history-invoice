import React, { useState, useEffect } from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";

// component
import SubNav from "./SubNav";

// image
import logo from "../../assets/logo.png";

// icon
import menuIcon from "../../assets/icons/Menu.svg";
import profileIcon from "../../assets/icons/Profile.svg";
import profileIconM from "../../assets/icons/Profile_m.svg";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	const closeMenu = () => setIsMenuOpen(false);

	const links = [
		{ text: "THE CTF CLUB", href: "#" },
		{ text: "rewards", href: "#" },
		{ text: "STORIES & EXPERIENCES", href: "#" },
		{ text: "COLLECTIONS", href: "#" },
		{ text: "eshop", href: "#" },
		{ text: "contact", href: "#" },
	];

	const sublinks = [
		{ text: "OVERVIEW", href: "#", active: false },
		{ text: "MY ACCOUNT", href: "#", active: true },
		{ text: "MY WALLET", href: "#", active: false },
		{ text: "COLLECTIONS", href: "#", active: false },
		{ text: "TRANSFER MY POINTS", href: "#", active: false },
	];

	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-10 uppercase  text-sm leading-[18px]">
			{links.map((link, index) => (
				<Typography
					key={index}
					as="li"
					variant="small"
					color="blue-gray"
					className="flex items-center gap-x-2 p-1 font-medium">
					<a href={link.href} className="text-text hover:text-primary">
						{link.text}
					</a>
				</Typography>
			))}
		</ul>
	);

	const subNavList = (
		<ul className="w-full xl:w-auto mt-2 mb-4 flex flex-col gap-2 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-15 uppercase text-sm leading-[18px]">
			{sublinks.map((link, index) => (
				<Typography
					key={index}
					as="li"
					variant="small"
					color="blue-gray"
					className={`flex items-center justify-center gap-x-2 py-[15px] font-medium border-2 border-transparent ${
						link.active ? "border-b-white" : ""
					}`}>
					<a href={link.href} className="text-white">
						{link.text}
					</a>
				</Typography>
			))}
		</ul>
	);

	return (
		<>
			<Navbar className="mx-auto px-4 py-3 xl:p-8  max-w-screen-2xl rounded-none xl:border-none border-solid border-b border-transparent border-b-background">
				<div className="mx-auto flex items-center justify-between text-blue-gray-900 gap-10">
					<div className="flex items-center">
						{/* Logo */}
						<Typography as="a" href="#" className="mr-10 cursor-pointer w-[60.45px] xl:w-[98px]">
							<img src={logo} className="w-full object-contain" alt="CHOW TAI FOOK" />
						</Typography>
						{/* Nav */}
						<div className="hidden xl:block">{navList}</div>
					</div>
					<div className="flex items-center gap-x-[14px] text-customColor1">
						<Button variant="text" size="sm" className="hidden xl:inline-flex items-center font-normal text-sm leading-6 p-1">
							<img src={profileIcon} className="w-full object-contain pe-1" alt="Account Icon" />
							<span>ACCOUNT</span>
						</Button>
						<Button variant="text" size="sm" className="hidden xl:inline-flex items-center font-normal text-sm leading-6 p-1">
							<span>LOGOUT</span>
						</Button>
						<select className="hidden xl:inline-flex row-start-1 col-start-1 text-text bg-transparent focus:outline-none  text-sm leading-6 py-2 ps-3 pe-6 cursor-pointer">
							<option value="EN">EN</option>
							<option value="CA">CA</option>
							<option value="FR">FR</option>
							<option value="DE">DE</option>
						</select>
					</div>
					<div className="flex items-center gap-3 xl:hidden">
						<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
							<MenuHandler>
								<IconButton
									variant="text"
									className="iconButton ml-auto w-6 h-6 aspect-square text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
									ripple={false}>
									<img src={profileIconM} className="w-full object-contain" alt="Account Icon" />
								</IconButton>
							</MenuHandler>
							<MenuList className="p-1 z-[1025]">
								{sublinks.map((link) => {
									return (
										<MenuItem
											key={link.text}
											onClick={closeMenu}
											className={"flex items-center gap-2 rounded pb-0 focus:outline-none"}>
											<Typography as="span" variant="small" className=" py-2 text-text" color={"inherit"}>
												{link.text}
											</Typography>
										</MenuItem>
									);
								})}
							</MenuList>
						</Menu>
						<IconButton
							variant="text"
							className="iconButton ml-auto w-9 h-9 aspect-square text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}>
							<img src={menuIcon} className="w-full object-contain" alt="Menu Icon" />
						</IconButton>
					</div>
				</div>
				<MobileNav open={openNav}>
					<div className={`container mx-auto ${openNav ? "" : "pointer-events-none"}`}>
						{navList}
						<div className="flex items-center gap-x-1 text-text">
							<Button fullWidth variant="text" size="sm" className="font-normal text-sm leading-6 py-2 ps-2 pe-6">
								<span>LOGOUT</span>
							</Button>
							<select className="w-full row-start-1 col-start-1 bg-transparent focus:outline-none text-sm leading-6 py-2 ps-2 pe-6 text-center">
								<option value="EN">EN</option>
								<option value="CA">CA</option>
								<option value="FR">FR</option>
								<option value="DE">DE</option>
							</select>
						</div>
					</div>
				</MobileNav>
			</Navbar>
			<SubNav classnames={"hidden xl:flex"}>{subNavList}</SubNav>
		</>
	);
};

export default Header;

// import React, { useState } from "react";

// // component
// import Advertisement from "./Advertisement";

// // image
// import logo from "../../assets/logo.png";

// // icon
// import menuIcon from "../../assets/icons/Menu.png";

// const Header = ({ adtext }) => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsMenuOpen(!isMenuOpen);
// 	};

// 	const links = [
// 		{ text: "THE CTF CLUB", href: "#" },
// 		{ text: "rewards", href: "#" },
// 		{ text: "STORIES & EXPERIENCES", href: "#" },
// 		{ text: "COLLECTIONS", href: "#" },
// 		{ text: "eshop", href: "#" },
// 		{ text: "contact", href: "#" },
// 	];

// 	return (
// 		<nav className="sticky top-0 w-full bg-black border-gray-200">
// 			<Advertisement text={adtext} />
// 			<div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3 xl:p-8">
// 				{/* Link */}
// 				<div className={`w-full xl:block xl:w-auto ${isMenuOpen ? "" : "hidden"}`} id="navbar-default">
// 					<ul className="uppercase  text-sm leading-[18px] flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-xl xl:flex-row xl:space-x-10 rtl:space-x-reverse xl:mt-0 xl:border-0">
// 						{links.map((link, index) => (
// 							<li key={index}>
// 								<a
// 									href={link.href}
// 									className="block py-2 px-3 text-text rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary xl:p-0">
// 									{link.text}
// 								</a>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 				{/* Menu */}
// 				<button
// 					type="button"
// 					onClick={toggleMenu}
// 					data-collapse-toggle="navbar-default"
// 					className="inline-flex items-center w-9 h-9 aspect-square justify-center text-sm text-gray-500 rounded-xl xl:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
// 					aria-controls="navbar-default"
// 					aria-expanded={isMenuOpen ? "true" : "false"}>
// 					<span className="sr-only">Open main menu</span>
// 					<img src={menuIcon} className="w-full object-contain" alt="Menu Icon" />
// 				</button>
// 			</div>
// 		</nav>
// 	);
// };
