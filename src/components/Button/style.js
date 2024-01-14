import styled from "styled-components";

const getType = (type) => {
  const obj = {
    primary: {
      background: "var(--primary)",
      color: "var(--white)",
      borderColor: "var(--primary)",
    },
    dashed: {
      borderStyle: "dashed",
    },
    text: {
      background: "transparent",
      border: "none",
    },
    link: {
      border: "none",
      background: "transparent",
      color: "var(--primary)",
    },
    ghostPrimary: { borderColor: "var(--primary)", color: "var(--primary)" },
    ghostDefault: {
      borderColor: "var(--white)",
      color: "var(--white)",
    },
    ghostDashed: { border: "1px dashed var(--white)", color: "var(--white)" },
    ghostDanger: { borderColor: "var(--danger)", color: "var(--danger)" },
    disabled: {
      background: "rgba(0,0,0,0.2)",
      color: "rgba(0,0,0,0.3)",
      border: "none",
    },
    dangerPrimary: {
      background: "var(--danger)",
      color: "var(--white)",
      borderColor: "var(--danger)",
    },
    defaultDanger: {
      color: "var(--danger)",
      borderColor: "var(--danger)",
    },
    dangerDashed: {
      borderStyle: "dashed",
      color: "var(--danger)",
      borderColor: "var(--danger)",
    },
    dangerText: {
      background: "transparent",
      border: "none",
      color: "var(--danger)",
    },
    dangerLink: {
      border: "none",
      background: "transparent",
      color: "var(--danger)",
    },
  };
  return obj[type] || null;
};

const getHoverType = (type) => {
  const obj = {
    primary: {
      color: "var(--white)",
      opacity: 0.6,
    },
    text: {
      color: "var(--btn)",
      background: "lightgray",
    },
    link: {
      opacity: 0.6,
    },
    ghostDanger: { borderColor: "var(--danger)", color: "var(--danger)" },
    disabled: {
      background: "rgba(0,0,0,0.2)",
      color: "rgba(0,0,0,0.3)",
      border: "none",
      cursor: "no-drop",
    },
    dangerPrimary: {
      color: "var(--white)",
      borderColor: "var(--danger)",
      opacity: 0.7,
    },
    defaultDanger: {
      color: "var(--danger)",
      borderColor: "var(--danger)",
      opacity: 0.7,
    },
    dangerDashed: {
      color: "var(--danger)",
      borderColor: "var(--danger)",
      opacity: 0.7,
    },
    dangerText: {
      background: "rgba(255, 0, 0, 0.114)",
      border: "none",
      color: "var(--danger)",
      opacity: 0.7,
    },
    dangerLink: {
      // border: "none",
      background: "transparent",
      color: "var(--danger)",
      opacity: 0.5,
    },
  };
  return obj[type] || null;
};

const getActiveType = (type) => {
  const obj = {
    primary: {
      opacity: 1,
    },
    text: {
      background: "rgba(0,0,0,0.3)",
      boxShadow: "none",
    },
    link: {
      opacity: 1,
      boxShadow: "none",
    },
    ghostDanger: { boxShadow: "0 0 5px var(--danger)" },
    disabled: {
      boxShadow: "none",
    },
    dangerPrimary: { boxShadow: "0 0 10px rgba(255, 0, 0, 0.514)" },
    defaultDanger: { boxShadow: "0 0 10px rgba(255, 0, 0, 0.514)" },
    dangerDashed: { boxShadow: "0 0 10px rgba(255, 0, 0, 0.514)" },
    dangerText: {
      boxShadow: "0 0 10px rgba(255, 0, 0, 0.514)",
    },
    dangerLink: {
      textShadow: "0 0 10px rgba(255, 0, 0, 0.514)",
      boxShadow: "none",
    },
  };
  return obj[type] || null;
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ type }) => getType(type)}
  &:hover {
    ${({ type }) => getHoverType(type)}
  }
  &:active {
    ${({ type }) => getActiveType(type)}
  }
`;
