import React, { useState, useEffect, useRef } from "react";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

// context
import { useDrawer } from "./context/DrawerProvider";

// component
import Advertisement from "./components/ui/Advertisement";
import Header from "./components/layout/Header";
import MemberInfo from "./pages/App/MemberInfo";
import MainContent from "./pages/App/MainContent";
import Footer from "./components/layout/Footer";

// divide
import divideInside from "./assets/icons/divide_inside.svg";

// icon
import closeIcon from "./assets/icons/Close.svg";
import arrowIcon from "./assets/icons/arrow.svg";

const App = () => {
	// Drawer 開合狀態
	const { open, setDrawerOpen, toggleDrawer, content } = useDrawer();
	// 標頭廣告推薦
	const adtext = "999.9 Gold Selling Price: HK$20,770/Tael, About HK$555/Gram";
	// Drawer Content
	const drawercontentRef = useRef(null);
	// Drawer certificate
	const [openStates, setOpenStates] = useState([]);

	// 會員資訊
	const memberInfo = {
		name: "Ms Annie Wong",
		memberId: "908475930",
		membershipLevel: "GOLD",
		ctfPoints: "3000",
	};

	const theme = {
		drawer: {
			styles: {
				base: {
					drawer: {
						position: "fixed",
						zIndex: "z-[9999]",
						pointerEvents: "pointer-events-auto",
						backgroundColor: "bg-white",
						boxSizing: "box-border",
						width: "w-full",
						boxShadow: "shadow-2xl shadow-blue-gray-900/10",
					},
					overlay: {
						position: "fixed",
						inset: "inset-0",
						width: "w-full",
						height: "h-full",
						pointerEvents: "pointer-events-auto",
						zIndex: "z-[9995]",
						backgroundColor: "bg-black",
						backgroundOpacity: "bg-opacity-60",
						backdropBlur: "backdrop-blur-sm",
					},
				},
			},
		},
	};

	useEffect(() => {
		setDrawerOpen(false);
	}, []);

	// 當 Drawer 打開時禁用頁面滾動事件
	useEffect(() => {
		const handleScroll = (e) => {
			e.preventDefault();
		};

		if (open) {
			document.body.style.overflow = "hidden";
			window.addEventListener("scroll", handleScroll, { passive: false });

			// 打開 Drawer 時將其滾動到頂部
			drawercontentRef.current.scrollTo(0, 0);

			// Drawer certificate 全部重設關閉
			setOpenStates([]);
		} else {
			document.body.style.overflow = "auto";
			window.removeEventListener("scroll", handleScroll);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [open]);

	const toggleItem = (index) => {
		const newOpenStates = [...openStates];
		newOpenStates[index] = !newOpenStates[index];
		setOpenStates(newOpenStates);
	};

	return (
		<ThemeProvider value={theme}>
			<div className="flex flex-col bg-white text-text min-h-screen">
				{/* Header */}
				<div className="sticky top-0 w-full z-[1024]">
					<Advertisement text={adtext} />
					<Header />
				</div>
				{/* MainContent */}
				<div className="container mx-auto lg:max-w-screen-lg xl:pt-12 xl:pb-8 px-8 py-3 flex-1">
					<MemberInfo memberInfo={memberInfo} />
					<MainContent />
				</div>
				{/* Footer */}
				<div className="text-white bg-primary pt-10 pb-2.5 px-8">
					<Footer />
				</div>

				{/* Drawer */}
				<Drawer placement="right" open={open} onClose={toggleDrawer} size={603} className="flex flex-col">
					<div className="flex items-center justify-between OrpheusPro md:text-[28px] md:leading-8 text-2xl leading-7 border-b md:border-customColor3 border-border lg:ps-14 lg:pe-[50px] px-8 lg:pt-7 lg:pb-6 pt-[15px] pb-3.5">
						<Typography variant="h5" className="flex-1 md:text-left text-center">
							Diamond Certificate
						</Typography>
						<IconButton variant="text" className="iconButton md:w-[34px] w-6 md:h-[34px] h-6" onClick={toggleDrawer}>
							<img src={closeIcon} />
						</IconButton>
					</div>
					{content && (
						<div
							ref={drawercontentRef}
							className="py-9 md:px-14 px-5 font-normal text-base leading-5 overflow-y-auto flex-1">
							<>
								<div className="pb-6 font-bold">
									<h5>Date of Purchase: {content.date}</h5>
									<p>Invoice no.: {content.item.invoiceNo}</p>
								</div>
								{content.item.diamonds?.map((obj, index) => (
									<div key={obj.no}>
										<div className="pb-8">
											<img src={divideInside} className="w-full object-contain pb-6" alt="divide Line" />
											<h5 className="font-bold md:pb-2.5 pb-2">Love in Petals Collection: {obj.name}</h5>
											<p>Stock No.: {obj.no}</p>
										</div>
										<div className={`flex flex-col pb-6 ${openStates[index] ? "gap-6" : ""}`}>
											{obj.certificate.map((iv) => (
												<div
													key={iv.name}
													className={`grid grid-cols-3 border border-text divide-x divide-text ${
														openStates[index]
															? "py-6 h-[150px]"
															: "opacity-0 h-0 py-0 pointer-events-none first-of-type:pointer-events-auto first-of-type:opacity-100 first-of-type:h-[150px] first-of-type:py-6 first-of-type:mb-6"
													} transition-all`}>
													<div className="flex items-center justify-center md:p-4 ps-4 pe-[18px] py-4">
														<img src={iv.img} className="object-contain" alt={iv.name} />
													</div>
													<div className="flex flex-col justify-center col-span-2 text-base md:ps-12 pe-2 ps-[18px]">
														<p className="font-bold">{iv.name}</p>
														<p>{iv.number}</p>
														<p className="underline underline-offset-1">{iv.describe}</p>
													</div>
												</div>
											))}

											{/* 如果超過一個，則顯示開合按鈕 */}
											{obj.certificate.length > 1 && (
												<div className="relative w-fit mx-auto text-center">
													<button
														onClick={() => toggleItem(index)}
														className="inline-flex items-center justify-center w-full font-normal text-base rounded-sm gap-1">
														<span>{openStates[index] ? "SHOW LESS" : "SHOW ALL"}</span>
														<img
															src={arrowIcon}
															className={`w-2.5 object-contain ${openStates[index] ? "" : "rotate-180"}`}
															alt={"arrow icon"}
														/>
													</button>
													<div className="absolute inset-x-0 bottom-1 h-px bg-text"></div>
												</div>
											)}
										</div>
									</div>
								))}
							</>
						</div>
					)}
				</Drawer>
				{/* 
				<div class="fixed inset-0 w-full h-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm" style="opacity: 1;"></div>
				<div tabindex="-1" class="fixed z-[9999] pointer-events-auto w-full top-0 right-0 p-4" style="max-width: 300px; max-height: 100%; height: 100vh; transform: none;"></div>
				 */}
			</div>
		</ThemeProvider>
	);
};

export default App;
