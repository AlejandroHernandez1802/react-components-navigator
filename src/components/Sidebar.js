import Link from "./Link";

function Sidebar() {
	//Variables implementation
	const links = [
		{ label: "button", path: "/" },
		{ label: "select", path: "/select" },
		{ label: "accordeon", path: "/accordeon" },
	];

	//Conditional rendering variables
	const linksToRender = links.map((link) => {
		return (
			<Link key={link.path} to={link.path}>
				{link.label}
			</Link>
		);
	});

	return <div>{linksToRender}</div>;
}

export default Sidebar;
