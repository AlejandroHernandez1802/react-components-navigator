//Hooks import
import useNavigation from "../hooks/useNavigation";

//Other imports
import ClassNames from "classnames";

function Link({ to, children }) {
	//Context implementation
	const { navigate } = useNavigation();

	//ClassNames declaration
	const classes = ClassNames("text-blue-500");

	const handleClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		navigate(to);
	};

	return (
		<div>
			<a className={classes} onClick={handleClick} href={to}>
				{children}
			</a>
		</div>
	);
}

export default Link;
