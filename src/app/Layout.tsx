import { HomePage } from "../pages/home";
import { Theme } from "@radix-ui/themes";
import { Header } from "@widgets/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <Theme accentColor="lime" scaling="110%">
      <BrowserRouter>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}
