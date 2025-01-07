import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Err, Home, SobreNos } from "./Pages";
import { LayoutPadrao } from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="*" element={<Err />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
