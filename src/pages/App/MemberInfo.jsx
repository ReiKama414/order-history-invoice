import React from "react";

/**
 * 會員資訊區塊
 * @param {Object} memberInfo - 會員資訊
 * @returns
 */
const MemberInfo = ({ memberInfo }) => {
	/** 千分制數字 */
	const formatNumber = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	return (
		<div className="flex justify-between xl:pb-6 pb-4 border-b border-text">
			<div className="flex gap-4">
				<div>
					<h5 className="xl:text-[28px] xl:leading-8 text-[21px] leading-[25.2px] mb-1.5 OrpheusPro">
						{memberInfo.name}
					</h5>
					<p className="text-sm leading-4">Member ID: {memberInfo.memberId}</p>
				</div>
				<div className="text-xs leading-[14px] xl:px-3 px-2 xl:py-2 py-1 text-white bg-customColor2 h-fit whitespace-nowrap">
					{memberInfo.membershipLevel}
				</div>
			</div>
			<div className="flex flex-col xl:gap-1.5 gap-1 text-right">
				<p className="xl:text-xs text-[10px] xl:leading-[14px] leading-[18px] uppercase pt-1">CTF POINTS</p>
				<h5 className="xl:text-[28px] xl:leading-8 text-[21px] leading-[25.2px] OrpheusPro">
					{formatNumber(memberInfo.ctfPoints)}
				</h5>
			</div>
		</div>
	);
};

export default MemberInfo;
