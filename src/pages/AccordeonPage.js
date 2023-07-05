//Components import
import Accordeon from "../components/Accordeon";

function AccordeonPage() {
	const items = [
		{ id: 1, label: "Label 01", content: "Content 01" },
		{ id: 2, label: "Label 02", content: "Content 02" },
		{ id: 3, label: "Label 03", content: "Content 03" },
	];

	return <Accordeon items={items} />;
}

export default AccordeonPage;
