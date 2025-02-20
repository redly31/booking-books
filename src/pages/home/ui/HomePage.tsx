import { Container } from "@radix-ui/themes";
import { BooksList } from "@widgets/books-list";

export function HomePage() {
  return (
    <Container size="2">
      <BooksList/>
    </Container>
  )
}
