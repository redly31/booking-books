import { BookCard } from "@entities/book";
import { IBook } from "@entities/book/model/IBook";
import { favoriteBooksAtom } from "@entities/favorite/model/favoriteAtom";
import { RemoveBookFromFavoriteButton } from "@features/favorite";
import { Grid, Text } from "@radix-ui/themes";
import { useAtom } from "jotai";

export function FavoritePage() {
  const [favoriteBooks] = useAtom(favoriteBooksAtom);
  return (
    <>
      <Text weight="bold">Книги ({favoriteBooks.length})</Text>
      <Grid columns={{ xs: "1", sm: "2" }} gap="3" width="auto">
        {favoriteBooks.map((book: IBook) => (
          <BookCard key={book.id} book={book}>
            <RemoveBookFromFavoriteButton bookId={book.id}/>
          </BookCard>
        ))}
      </Grid>
    </>
    
  );
}
