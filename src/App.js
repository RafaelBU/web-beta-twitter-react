import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import MainPage from "./ui/pages/MainPage";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MainPage />
    </StyledEngineProvider>
  );
}

export default App;
