import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Product,
  PictaLife,
  Team,
  Tech,
  Partnerships,
  RejoinsNous,
} from "./utils/exportPages";
import Layout from "./components/Layouts/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pictalife" element={<PictaLife />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/rejoinsnous" element={<RejoinsNous />} />
      </Route>
    </Routes>
  );
}

export default App;
