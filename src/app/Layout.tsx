import { ApolloProvider } from "@apollo/client";
import { HomePage } from "../pages/home";
import { Theme } from "@radix-ui/themes";
import { Header } from "@widgets/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import apolloClient from "./config/apolloClient";
import { FavoritePage } from "@pages/favorite";

export default function Layout() {
  return (
    <Theme accentColor="lime" scaling="110%">
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorite" element={<FavoritePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Theme>
  );
}
