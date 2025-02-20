import { Box, Card, Container, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import { IBook } from "../model/IBook";

type BookCardProps = {
  book: IBook;
  AddBookToCartButton: React.ComponentType<{ book: IBook }>;
  AddBookToFavoriteButton: React.ComponentType<{ book: IBook }>;
}

export function BookCard(props: BookCardProps) {
  const { book, AddBookToCartButton, AddBookToFavoriteButton } = props
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
            <AddBookToCartButton book={book}/>
            <AddBookToFavoriteButton book={book}/>
          </Container>
          <Text><Strong>{book.price} {book.currency}</Strong></Text>
        </Flex>
       
      </Card>
    </Box>
  );
}
