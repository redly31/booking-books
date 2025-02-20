import { HomePage } from "../pages/home";
import { Theme } from "@radix-ui/themes";
import { Header } from "@widgets/header";

export default function Layout() {
  return (
    <Theme accentColor="lime" scaling="110%">
        <Header/>
        <HomePage/>
    </Theme>
  )
}
