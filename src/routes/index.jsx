import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, LoginView, RegisterView } from "../pages";
import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
        <Route path="/sign-up" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
