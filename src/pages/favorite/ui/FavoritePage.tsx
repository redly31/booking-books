import { BookCard } from "@entities/book";
import { IBook } from "@entities/book/model/IBook";
import { favoriteBooksAtom } from "@entities/favorite/model/favoriteAtom";
import { AddBookToCartButton } from "@features/cart";
import { AddBookToFavoriteButton } from "@features/favorite";
import { Grid } from "@radix-ui/themes";
import { useAtom } from "jotai";

export function FavoritePage() {
    const [favoriteBooks, ] = useAtom(favoriteBooksAtom);
  return (
    <Grid columns={{xs: "1", sm: "2"}} gap="3" width="auto">
      {favoriteBooks.map((book: IBook) => 
          <BookCard key={book.id} AddBookToFavoriteButton={AddBookToFavoriteButton} AddBookToCartButton={AddBookToCartButton} book={book}/>
      )}
    </Grid>
  )
}
