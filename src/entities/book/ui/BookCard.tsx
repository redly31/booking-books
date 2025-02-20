import { BookmarkIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Container, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import { IBook } from "../model/IBook";

type BookCardProps = {
  book: IBook;
}

export function BookCard(props: BookCardProps) {
  const { book } = props
  return (
    <Box maxWidth="350px" mt="3">
      <Card size="1">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={book.image}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          {book.author} <Strong>{book.title}</Strong>
        </Text>
        <Text as="p" size="3">
          {book.genre}, год выпуска: {book.year} г.
        </Text>
        <Text as="p" size="3">
          Рейтинг: <Strong>{book.rating}</Strong>
        </Text>
        <Flex justify="between" align="center" mt="2">
          <Container>
            <Button variant="solid">В корзину</Button>
            <Button variant="solid" ml="2"><BookmarkIcon/></Button>
          </Container>
          <Text><Strong>{book.price} {book.currency}</Strong></Text>
        </Flex>
       
      </Card>
    </Box>
  );
}
