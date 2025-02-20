import { useQuery } from "@apollo/client";
import { BookCard } from "@entities/book";
import { GET_BOOKS } from "@entities/book/api/getBooks";
import { IBook } from "@entities/book/model/IBook";
import { AddBookToCartButton } from "@features/cart";
import { AddBookToFavoriteButton } from "@features/favorite";
import { searchAtom } from "@features/search/model/searchAtom";
import { Grid, Text } from "@radix-ui/themes";
import { useAtom } from "jotai";

export function BooksList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [search,] = useAtom(searchAtom);
  console.log(search)
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;
  const searchedBooks = data.books.filter((b: IBook) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <>
      <Text weight="bold">Книги ({searchedBooks.length})</Text>
      <Grid columns={{ xs: "1", sm: "2" }} gap="3" width="auto">
        {searchedBooks.map((book: IBook) => (
          <BookCard key={book.id} book={book}>
            <AddBookToCartButton book={book} />
            <AddBookToFavoriteButton book={book} />
          </BookCard>
        ))}
      </Grid>
    </>
    
  );
}
