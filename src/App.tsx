import { BrowserRouter } from "react-router-dom";
import { TwizzleRouter } from "./Router.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <TwizzleRouter />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
