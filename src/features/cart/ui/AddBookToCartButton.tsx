import { IBook } from "@entities/book/model/IBook";
import { cartBooksAtom } from "@entities/cart/model/cartAtom";
import { Button } from "@radix-ui/themes";
import { useAtom } from "jotai";

export const AddBookToCartButton: React.FC<{ book: IBook }> = ({ book }) => {
    const [, setCartBooks] = useAtom(cartBooksAtom);
    const addToCart = (book: IBook) => {
        setCartBooks((prev) => [...prev, book]);
    };
  return <Button mr="1" variant="solid" onClick={() => addToCart(book)}>В корзину</Button>
}