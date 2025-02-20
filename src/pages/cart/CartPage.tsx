import { BookCard } from "@entities/book";
import { IBook } from "@entities/book/model/IBook";
import { cartBooksAtom } from "@entities/cart/model/cartAtom";
import { RemoveBookFromCartButton } from "@features/cart";
import { Grid, Text } from "@radix-ui/themes";
import { useAtom } from "jotai";

export default function CartPage() {
  const [cartBooks] = useAtom(cartBooksAtom);
  return (
    <>
      <Text weight="bold">Книги ({cartBooks.length})</Text>
      <Grid columns={{ xs: "1", sm: "2" }} gap="3" width="auto">
        {cartBooks.map((book: IBook) => (
          <BookCard key={book.id} book={book}>
            <RemoveBookFromCartButton bookId={book.id} />
          </BookCard>
        ))}
      </Grid>
    </>
  );
}
