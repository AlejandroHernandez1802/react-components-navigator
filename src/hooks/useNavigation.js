//Hooks import
import { useContext } from "react";

//Context import
import NavigationContext from "../context/navigation";

function useNavigation() {
	return useContext(NavigationContext);
}

export default useNavigation;
