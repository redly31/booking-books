import { useQuery } from "@apollo/client";
import { BookCard } from "@entities/book";
import { GET_BOOKS } from "@entities/book/api/getBooks";
import { IBook } from "@entities/book/model/IBook";
import { AddBookToCartButton } from "@features/cart";
import { AddBookToFavoriteButton } from "@features/favorite";
import { Grid, Text } from "@radix-ui/themes";

export function BooksList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <>
      <Text weight="bold">Книги ({data.books.length})</Text>
      <Grid columns={{ xs: "1", sm: "2" }} gap="3" width="auto">
        {data.books.map((book: IBook) => (
          <BookCard key={book.id} book={book}>
            <AddBookToCartButton book={book} />
            <AddBookToFavoriteButton book={book} />
          </BookCard>
        ))}
      </Grid>
    </>
    
  );
}
