import React, { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

// tab page
import InvoiceCert from "./InvoiceCert";
import NonePage from "./NonePage";

const MainContent = () => {
	const [activeTab, setActiveTab] = useState("invoicecert");
	const data = [
		{
			label: "my profile",
			value: "myprofile",
			desc: <NonePage />,
		},
		{
			label: "my ctf points",
			value: "myctfpoints",
			desc: <NonePage />,
		},
		{
			label: "INVOICE/CERT",
			value: "invoicecert",
			desc: <InvoiceCert />,
		},
	];

	return (
		<Tabs value={activeTab}>
			<TabsHeader
				className="rounded-none border-b border-border bg-transparent p-0 px-2 sm:justify-center justify-start gap-10 uppercase overflow-auto"
				indicatorProps={{
					className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
				}}>
				{data.map(({ label, value }) => (
					<Tab
						key={value}
						value={value}
						onClick={() => setActiveTab(value)}
						className={"tab w-auto py-5 text-sm leading-[18px] whitespace-nowrap"}>
						{label}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody>
				{data.map(({ value, desc }) => (
					<TabPanel key={value} value={value} className="p-0">
						{desc}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
};

export default MainContent;
