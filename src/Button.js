import ProTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text, onClick}) { // props
    return <button className={styles.btn} onClick={onClick}>{text}</button>
}
Button.proTypes = {
    text: ProTypes.string.isRequired,
}
export default Button;
