import React from "react";
import { MaterialIndicator } from "react-native-indicators";

const Loader = ({ size, color }) => {
  return <MaterialIndicator color={color || "#0b64eb"} size={size || 40} />;
};

export default Loader;
