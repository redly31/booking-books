import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, Container, Flex, Text } from "@radix-ui/themes";

export function Header() {
  return (
    <Container size="2" py="5">
      <Flex align="center" justify="between">
        <Text weight="bold">Booking Books</Text>
        <Button variant="solid"><MagnifyingGlassIcon/> Поиск</Button>
      </Flex>
      
    </Container>
  )
}
