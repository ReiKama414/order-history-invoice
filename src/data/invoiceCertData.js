// logo
import giaLogo from "../assets/images/GIA.png";
import tmarkLogo from "../assets/images/TMARK.png";
import agsLogo from "../assets/images/AGS.png";
import dbfLogo from "../assets/images/DBF.png";

// invoiceCertData.js
const data = [
	{
		date: "1 October, 2023 13:52",
		invoices: [
			{
				type: "simple",
				invoiceNo: "202310010080",
				storeInfo: "iSquare Branch",
			},
			{
				type: "simple",
				invoiceNo: "202310010079",
				storeInfo: "iSquare Branch",
			},
			{
				type: "diamond",
				invoiceNo: "202310010078",
				storeInfo: "iSquare Branch",
				diamonds: [
					{
						name: "18K/750 White Gold Diamond Ring",
						no: "01A10496222",
						certificate: [
							{ name: "GIA", number: "123456789", describe: "DOWNLOAD E-CERTIFICATE", img: giaLogo },
							{ name: "T MARK", number: "123456789", describe: "", img: tmarkLogo },
							{ name: "AGS", number: "123456789", describe: "Please visit AGS.com for more information", img: agsLogo },
						],
					},
					{
						name: "18K/750 White Gold Diamond Earrings (Certificate)",
						no: "01A10496333",
						certificate: [{ name: "T MARK", number: "123456789", describe: "", img: tmarkLogo }],
					},
					{
						name: "18K/750 White Gold Diamond Earrings (Certificate)",
						no: "01A10496444",
						certificate: [
							{ name: "De Beers Forevermark", number: "123456789", describe: "", img: dbfLogo },
							{ name: "AGS", number: "123456789", describe: "Please visit AGS.com for more information", img: agsLogo },
						],
					},
				],
			},
			{
				type: "diamond",
				invoiceNo: "202310010077",
				storeInfo: "iSquare Branch",
			},
		],
	},
	{
		date: "26 February, 2023 14:00",
		invoices: [
			{
				type: "simple",
				invoiceNo: "202310010045",
				storeInfo: "Cloud Kiosk World Peace Center",
			},
			{
				type: "diamond",
				invoiceNo: "202310010080",
				storeInfo: "iSquare Branch",
				diamonds: [
					{
						name: "18K/750 White Gold Diamond Ring",
						no: "01A10496222",
						certificate: [
							{ name: "GIA", number: "123456789", describe: "DOWNLOAD E-CERTIFICATE", img: giaLogo },
							{ name: "T MARK", number: "123456789", describe: "", img: tmarkLogo },
						],
					},
					{
						name: "18K/750 White Gold Diamond Earrings (Certificate)",
						no: "01A10496333",
						certificate: [{ name: "T MARK", number: "123456789", describe: "", img: tmarkLogo }],
					},
					{
						name: "18K/750 White Gold Diamond Earrings (Certificate)",
						no: "01A10496444",
						certificate: [
							{ name: "De Beers Forevermark", number: "123456789", describe: "", img: dbfLogo },
							{ name: "AGS", number: "123456789", describe: "Please visit AGS.com for more information", img: agsLogo },
							{ name: "T MARK", number: "123456789", describe: "", img: tmarkLogo },
						],
					},
				],
			},
		],
	},
	{
		date: "19 January, 2023 15:27",
		invoices: [
			{
				type: "simple",
				invoiceNo: "202310010080",
				storeInfo: `2nd Central Branch
				(Manning House)`,
			},
			{
				type: "simple",
				invoiceNo: "202310010079",
				storeInfo: `2nd Central Branch
				(Manning House)`,
			},
			{
				type: "diamond",
				invoiceNo: "202310010078",
				storeInfo: `2nd Central Branch
				(Manning House)`,
				diamonds: [
					{
						name: "18K/750 White Gold Diamond Earrings (Certificate)",
						no: "01A10496444",
						certificate: [
							{ name: "De Beers Forevermark", number: "123456789", describe: "", img: dbfLogo },
							{ name: "AGS", number: "123456789", describe: "Please visit AGS.com for more information", img: agsLogo },
							{ name: "T MARK", number: "123456789", describe: "", img: tmarkLogo },
						],
					},
				],
			},
			{
				type: "diamond",
				invoiceNo: "202310010078",
				storeInfo: `2nd Central Branch
				(Manning House)`,
			},
		],
	},
];

export default data;
