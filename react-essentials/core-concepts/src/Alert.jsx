import styles from "./Alert.module.css";

export const Alert = ({ children, type = "success" }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>;
};

/**
 * Inline style example
 */
// export const Alert = ({ children, type = "success" }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: type === "success" ? "#10b981" : "#ef4444",
//         color: "black",
//         padding: "16px",
//         borderRadius: "8px",
//         marginBottom: "16px",
//       }}
//     >
//       {children}
//     </div>
//   );
// };
