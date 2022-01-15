import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/index";
import { Layout } from "./components/layouts/index";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={MainPage} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
