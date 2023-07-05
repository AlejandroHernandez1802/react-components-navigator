//Hooks
import { useState, useEffect, useRef } from "react";

//Icons
import { GoChevronDown } from "react-icons/go";

//Components
import Panel from "./global/Panel";

function Select({ selectItems, selectItem, onSelect }) {
	//States declaration
	const [openSelect, setOpenSelect] = useState(false);

	//Hooks implementation
	const divEl = useRef();
	useEffect(() => {
		const handleScreenClick = (event) => {
			if (!divEl.current) {
				return;
			}
			if (!divEl.current.contains(event.target)) {
				handleSelectClick();
			}
		};

		document.addEventListener("click", handleScreenClick, true);

		return () => {
			document.removeEventListener("click", handleScreenClick);
		};
	}, []);

	/*State handlers*/
	const handleSelectClick = () => {
		setOpenSelect(!openSelect);
	};

	const handleItemSelect = (item) => {
		onSelect(item);
		handleSelectClick();
	};

	//Props data handler
	const listItems = selectItems.map((item) => {
		return (
			<div
				className="text-left mb-2 cursor-pointer"
				key={item.id}
				onClick={() => handleItemSelect(item)}>
				<span>{item.name}</span>
			</div>
		);
	});

	return (
		<div ref={divEl} className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleSelectClick}>
				<span>{selectItem?.name || "Select..."}</span>
				<GoChevronDown />
			</Panel>
			{openSelect && <Panel className="absolute w-full">{listItems}</Panel>}
		</div>
	);
}

export default Select;
