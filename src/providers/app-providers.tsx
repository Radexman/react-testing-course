import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import type { ReactNode } from "react";

type AppProvidersProps = {
  children: ReactNode;
};

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
