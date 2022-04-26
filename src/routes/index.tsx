import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";

import { Home } from "../pages/Home";

export function RoutesAppllication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
