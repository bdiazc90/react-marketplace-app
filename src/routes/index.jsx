import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts";
import { HomeView, CartView, LoginView, RegisterView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/cart" element={<CartView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
        <Route path="/sign-up" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
