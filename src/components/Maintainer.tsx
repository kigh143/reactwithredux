import React from "react";

const styles: any = {
  container: {
    backgroundColor: "#2a9d8f",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    color: "#fff",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

const Maintainer: React.FC = () => {
  return (
    <div style={styles.container}>
      <span>Maintained by Katende Hakim</span>
      <a
        style={styles.link}
        href="https://ghkatende.com"
        target="_blank"
        rel="noreferrer"
      >
        <small>Let's connect for help to use this template.</small>
      </a>
    </div>
  );
};

export default Maintainer;
