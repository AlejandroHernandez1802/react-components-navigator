import className from "classnames";

function Button({
	children,
	rounded,
	outline,
	primary,
	secondary,
	success,
	warning,
	danger,
	...rest
}) {
	/*Classes declaration*/
	const classes = className(rest.className, "px-3 py-1.5 border", {
		"border-blue-500 bg-blue-500 text-white": primary,
		"border-gray-500 bg-gray-500 text-white": secondary,
		"border-green-500 bg-green-500 text-white": success,
		"border-yellow-400 bg-yellow-400 text-white": warning,
		"border-red-500 bg-red-500 text-white": danger,
		"rounded-full": rounded,
		"bg-white": outline,
		"text-blue": outline && primary,
		"text-gray": outline && secondary,
		"text-green": outline && success,
		"text-yellow": outline && warning,
		"text-red-500": outline && danger,
	});

	return (
		<div>
			<button {...rest} className={classes}>
				{children}
			</button>
		</div>
	);
}

export default Button;
