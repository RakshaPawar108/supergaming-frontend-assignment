import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
