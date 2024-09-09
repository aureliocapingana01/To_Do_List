import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Layout } from "./Layouts/Layout";
import { SaibaMais } from "./Pages/SaibaMAis/SaibaMais";
import { Erro } from "./Pages/Erro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/saibamais" element={<SaibaMais />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export { Router };
