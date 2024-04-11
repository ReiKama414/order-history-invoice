import React from "react";

// image
import logo2 from "../../assets/logo2.png";

// icon
import fbIcon from "../../assets/icons/FB.svg";
import ytIcon from "../../assets/icons/YT.svg";
import igIcon from "../../assets/icons/IG.svg";
import wcIcon from "../../assets/icons/WC.svg";
import inIcon from "../../assets/icons/IN.svg";

const Footer = () => {
	return (
		<div className="mx-auto max-w-screen-2xl flex flex-col items-center">
			<div className="xl:max-w-[286px] max-w-[250px] pb-11">
				<img src={logo2} className="w-full object-contain" alt="CHOW TAI FOOK" />
			</div>
			<div className="flex flex-row justify-around pb-14 w-full">
				<div className="xl:block hidden min-w-[200px]">
					<h6 className="OrpheusPro pb-6 text-[21px] leading-[25.2px]">The CTF Club</h6>
					<div className="flex flex-col gap-3">
						<a href="#" className="text-base">
							Overview
						</a>
						<a href="#" className="text-base">
							Stories & Experiences
						</a>
						<a href="#" className="text-base">
							Collections
						</a>
					</div>
				</div>
				<div className="xl:block hidden min-w-[200px]">
					<h6 className="OrpheusPro pb-6 text-[21px] leading-[25.2px]">Member Rewards</h6>
					<div className="flex flex-col gap-3">
						<a href="#" className="text-base">
							Promotions
						</a>
						<a href="#" className="text-base">
							Birthday Offers
						</a>
					</div>
				</div>
				<div className="xl:block hidden min-w-[200px]">
					<h6 className="OrpheusPro pb-6 text-[21px] leading-[25.2px]">Support</h6>
					<div className="flex flex-col gap-3">
						<a href="#" className="text-base">
							Contact
						</a>
						<a href="#" className="text-base">
							Store Location
						</a>
						<a href="#" className="text-base">
							FAQ
						</a>
						<a href="#" className="text-base">
							Hong Kong Gold Price
						</a>
					</div>
				</div>
				<div className="xl:min-w-[250px] min-w-[326px]">
					<div className="flex xl:justify-start justify-center xl:gap-2 gap-8 pb-6">
						<img src={fbIcon} className="xl:w-10 w-12 object-contain xl:order-1 order-2" alt="Facebook Icon" />
						<img src={ytIcon} className="xl:w-10 w-12 object-contain xl:order-2 order-4" alt="YouTube Icon" />
						<img src={igIcon} className="xl:w-10 w-12 object-contain xl:order-3 order-1" alt="Instagram Icon" />
						<img src={wcIcon} className="xl:w-10 w-12 object-contain xl:order-4 order-3" alt="WeChat Icon" />
						<img src={inIcon} className="xl:w-10 w-12 object-contain xl:order-5 xl:block hidden" alt="Indeed Icon" />
					</div>
					<select className="w-full row-start-1 col-start-1 bg-primary focus:outline-none text-sm leading-6 py-3.5 ps-4 pe-6 border select-arrow-white">
						<option value="STAYCONNECTED">STAY CONNECTED</option>
						<option value="Related Sites">Related Sites</option>
					</select>
				</div>
			</div>
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
