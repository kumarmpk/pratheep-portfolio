import React from "react";
import * as Icon from "react-bootstrap-icons";

export function PlayFill() {
  return <Icon.PlayFill size={30} color="royalblue" />;
}

export function Asterisk() {
  return (
    <Icon.Asterisk
      size={20}
      style={{ paddingRight: "0.5rem" }}
      color="royalblue"
    />
  );
}

export function Github() {
  return <Icon.Github size={40} color="white" />;
}

export function BackButton() {
  return <Icon.ArrowLeft size={30} />;
}
