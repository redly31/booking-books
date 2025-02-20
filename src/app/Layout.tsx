import { ApolloProvider } from "@apollo/client";
import { HomePage } from "../pages/home";
import { Theme } from "@radix-ui/themes";
import { Header } from "@widgets/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import apolloClient from "./config/apolloClient";

export default function Layout() {
  return (
    <Theme accentColor="lime" scaling="110%">
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Theme>
  );
}
