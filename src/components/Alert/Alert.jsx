import { useEffect, useContext } from "react";
import { ShopContext } from "../../context/context";

// style
import "./Alert.css";

export default function Alert() {
  const { displayName, closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [displayName]);

  return (
    <div>
      <h4 className="Pop-up-window"> Add tu cart: {displayName} </h4>
    </div>
  );
}
