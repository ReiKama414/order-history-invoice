import React from "react";
import { Button } from "@material-tailwind/react";
import { useDrawer } from "../../context/DrawerProvider";

// divide
import divide from "../../assets/icons/divide.svg";
import divideM from "../../assets/icons/divide_m.svg";
import divide2 from "../../assets/icons/divide2.svg";

// icon
import invoiceIcon from "../../assets/icons/Invoice.svg";
import diamondIcon from "../../assets/icons/diamond.svg";

//ui
import btnBorder from "../../assets/ui/ButtonBorder.svg";

// data
import data from "../../data/invoiceCertData";

const InvoiceCert = () => {
	const { toggleDrawer, setDrawerContent } = useDrawer();

	const handleOpenDrawer = (date, item) => {
		setDrawerContent({ date, item });
		toggleDrawer();
	};

	return (
		<div className="pt-9">
			<h5 className="text-base font-bold pb-2">50 orders since 2021</h5>
			<div className="text-sm leading-6 pb-[15px]">
				Only product sales records since January 1, 2021 are shown. All receipts must be based on physical receipts for
				our maintenance and buyback services in all Chow Tai Fook branches in Hong Kong and Macau.
			</div>
			{/* Divide - start */}
			<img src={divide} className="w-full object-contain md:block hidden" alt="divide Line" />
			<img src={divideM} className="w-full object-contain md:hidden" alt="divide Line" />
			{/* Divide - end */}

			{/* 迴圈開始 */}
			{data.map((item, index) => (
				<div key={index}>
					{/* Date of Purchase */}
					<h5 className="text-base font-bold pb-6 pt-4">{`Date of Purchase: ${item.date.slice(0, -5)}`}</h5>

					{/* Invoices */}
					<div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:pb-[30px] pb-6">
						{/* 處理發票資訊 */}
						{item.invoices.slice(0, 3).map((invoice, invoiceIndex) => (
							<div key={invoiceIndex} className="border border-border rounded-[10px] text-base overflow-hidden">
								<div className="flex flex-col items-center p-4 pb-1.5">
									{/* Invoice no. */}
									<div className="inline-flex pb-1 gap-[5px]">
										<img
											src={invoice.type === "diamond" ? diamondIcon : invoiceIcon}
											className="w-3.5 object-contain"
											alt={invoice.type === "diamond" ? "Diamond Icon" : "Invoice Icon"}
										/>
										<span className="text-sm">Invoice no.</span>
									</div>
									<p className="font-bold pb-1">{invoice.invoiceNo}</p>
									<img src={divide2} className="w-full object-contain pb-1.5" alt="divide Line" />
									{/* Store Information */}
									<h6 className="pb-0.5">Store Information</h6>
									<div className="font-bold text-center break-words whitespace-pre-line h-12">{invoice.storeInfo}</div>
								</div>
								{/* Invoice Button */}
								<div className="bg-customColor2 flex items-center">
									{invoice.type === "diamond" && (
										<>
											<Button
												variant="filled"
												className="underline underline-offset-2 text-sm leading-6 px-0"
												onClick={() => handleOpenDrawer(item.date, invoice)}
												fullWidth>
												DIAMOND CERT
											</Button>
											<div className="w-px h-8 bg-border"></div>
										</>
									)}
									<Button variant="filled" className="underline underline-offset-2 text-sm leading-6 px-0" fullWidth>
										INVOICE
									</Button>
								</div>
							</div>
						))}
					</div>

					{/* 如果發票數量超過三個，則顯示顯示更多按鈕 */}
					{item.invoices.length > 3 && (
						<div className="w-full text-center pb-4">
							<Button
								variant="text"
								className="rounded-none pt-3.5 pb-3 border border-text text-text font-normal text-sm leading-[18px] w-[182px]"
								style={{
									clipPath: "polygon(1.5% 0, 98.5% 0, 100% 8%, 100% 94%, 98.5% 100%, 1.5% 100%, 0 94%, 0 8%)",
								}}>
								SHOW ALL
							</Button>
						</div>
					)}

					{/* 兩個日期間的間隔 */}
					{/* Divide - start */}
					<img src={divide} className="w-full object-contain md:block hidden" alt="divide Line" />
					<img src={divideM} className="w-full object-contain md:hidden" alt="divide Line" />
					{/* Divide - end */}
				</div>
			))}
			{/* 迴圈結束 */}

			<div className="w-full xl:pt-8 pt-5 pb-4">
				<div className="relative w-fit mx-auto">
					<Button
						variant="filled"
						className="rounded-none pt-3 pb-3 border-2 border-white bg-customColor2 text-customColor2 font-normal text-sm leading-[18px] w-[182px]">
						MORE INVOICES
					</Button>
					<img src={btnBorder} className="absolute top-0 pointer-events-none" alt={"btn border"} />
				</div>
			</div>
		</div>
	);
};

export default InvoiceCert;
