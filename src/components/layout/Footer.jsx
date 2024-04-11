import React from "react";

// image
import logo2 from "../../assets/logo2.png";

const Footer = () => {
	return (
		<div className="mx-auto max-w-screen-2xl flex flex-col items-center">
			<div className="xl:max-w-[286px] max-w-[250px] pb-11">
				<img src={logo2} className="w-full object-contain" alt="CHOW TAI FOOK" />
			</div>
			<div className="pb-14">xxx</div>
			<div className="flex flex-col items-center gap-3 text-xs leading-[14px]">
				<div className="flex xl:flex-row flex-col items-center xl:gap-6 gap-5">
					<div className="flex xl:gap-6 gap-4">
						<a href={"#"}>Terms of Use</a>
						<a href={"#"}>Privacy Policy</a>
					</div>
					<p>© 2024 Chow Tai Fook Jewellery Company Limited</p>
				</div>
				<p className="xl:block hidden">Stock Code:1929 • A Hong Kong Main Board Listed Company</p>
			</div>
		</div>
	);
};

export default Footer;
