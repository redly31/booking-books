import { BookmarkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, Container, Flex, Text } from "@radix-ui/themes";
import { NavLink, Outlet } from "react-router-dom";

export function Header() {
  return (
    <Container size="2" py="5">
      <Flex align="center" justify="between">
        <NavLink to="/"><Text weight="bold">Booking Books</Text></NavLink>
        <Flex>
          <NavLink to="/search"><Button variant="solid" mr="2"><BookmarkIcon/></Button></NavLink>
          <NavLink to="/search"><Button variant="solid" mr="2">Корзина</Button></NavLink>
          <NavLink to="/search"><Button variant="solid"><MagnifyingGlassIcon/> Поиск</Button></NavLink>
        </Flex>
        
      </Flex>
      <Outlet />
    </Container>
  )
}
