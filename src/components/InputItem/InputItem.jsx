import styles from "./InputItem.module.css";

/**
 * Custom input box with a label.
 */
function InputItem({
  label,
  value,
  name,
  placeholder,
  onChange,
  className,
  onBlur,
  hasError,
  // onFocus,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label} </span>
      <input
        className={`${styles.input} ${hasError ? styles.error : ""}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={"text"}
      />
    </div>
  );
}

export default InputItem;

// InputItem.propTypes = {
//   label: PropTypes.string,
//   value: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
// };
