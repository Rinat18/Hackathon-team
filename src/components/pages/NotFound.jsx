import React from "react";

export default function NotFound() {
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "100px",
    },
    heading: {
      fontSize: "32px",
      color: "#333",
    },
    text: {
      fontSize: "18px",
      color: "#666",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Страница не найдена</h1>
      <p style={styles.text}>
        Извините, запрашиваемая вами страница не найдена.
      </p>
    </div>
  );
}
