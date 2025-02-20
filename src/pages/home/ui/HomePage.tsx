import { Container, Text } from "@radix-ui/themes";
import { BooksList } from "@widgets/books-list";

export function HomePage() {
  return (
    <Container size="2" mt="2">
      <Text weight="bold">Книги (1)</Text>
      <BooksList/>
    </Container>
  )
}
