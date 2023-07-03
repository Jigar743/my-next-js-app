import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/ThemeStyle.styled";
import { useState } from "react";
import { useEffect } from "react";

function CustomThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
