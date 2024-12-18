import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
}

export default useGlobal;
