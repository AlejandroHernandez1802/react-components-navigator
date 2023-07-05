//
import { useState } from "react";

//Components import
import Select from "../components/Select";

function SelectPage() {
	//States declaration
	const [selectValue, setSelectValue] = useState(null);

	//Event handler
	const handleSelectItem = (item) => {
		setSelectValue(item);
	};

	const selectItems = [
		{ id: 1, name: "Red" },
		{ id: 2, name: "Blue" },
		{ id: 3, name: "Yellow" },
	];

	return (
		<Select
			selectItems={selectItems}
			selectItem={selectValue}
			onSelect={handleSelectItem}
		/>
	);
}

export default SelectPage;
