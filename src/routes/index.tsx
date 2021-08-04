import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";

import PublicRoutes from "./PublicRoutes";

export default function NavigationRouter () {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
};