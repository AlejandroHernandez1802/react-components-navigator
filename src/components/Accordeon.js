//Hooks imports
import { useState } from "react";

//Icons imports
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

function Accordeon({ items }) {
	//States declaration
	const [expandedIndex, setExpandedIndex] = useState(-1);

	//Event handlers
	const handleClick = (index) => {
		if (expandedIndex === index) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(index);
		}
	};

	const renderItems = items.map((item, index) => {
		//Conditional rendering
		const expandedContent = expandedIndex === index;
		const icon = expandedContent ? <GoChevronUp /> : <GoChevronDown />;
		return (
			<div key={item.id}>
				<div
					className="flex justify-between items-center p-5 bg-gray-100 border-b"
					onClick={() => handleClick(index)}>
					{item.label}
					{icon}
				</div>
				{expandedContent && <div className="border-b p-5">{item.content}</div>}
			</div>
		);
	});

	return <div>{renderItems}</div>;
}

export default Accordeon;
