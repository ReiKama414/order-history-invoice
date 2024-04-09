import React from "react";

// component
import Advertisement from "./Advertisement";

// image
import logo from "../../assets/logo.png";

// icon
import menuIcon from "../../assets/icons/Menu.png";

const Header = ({ adtext }) => {
	return (
		<nav className="fixed top-0 w-full bg-white border-gray-200">
			<Advertisement text={adtext} />
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				{/* Logo */}
				<a href="#" className="flex items-center space-x-3 rtl:space-x-reverse w-[60.45px] lg:w-[98px]">
					<img src={logo} className="w-full object-contain" alt="CHOW TAI FOOK" />
				</a>
				{/* Link */}
				<div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
					<ul className="uppercase font-normal text-sm leading-[18px] flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
								THE CTF CLUB
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
								rewards
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
								STORIES & EXPERIENCES
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
								COLLECTIONS
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
								eshop
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
								contact
							</a>
						</li>
					</ul>
				</div>
				{/* Menu */}
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center w-9 h-9 aspect-square justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
					aria-controls="navbar-default"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<img src={menuIcon} className="w-full object-contain" alt="Menu Icon" />
				</button>
			</div>
		</nav>
	);
};

export default Header;
