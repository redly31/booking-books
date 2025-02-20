import { cartBooksAtom } from "@entities/cart/model/cartAtom";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useAtom } from "jotai";

export const RemoveBookFromCartButton: React.FC<{ bookId: string }> = ({ bookId }) => {
    const [, setCartBooks] = useAtom(cartBooksAtom);
    const removeFromCart = (bookId: string) => {
        setCartBooks((prev) => prev.filter((book) => book.id !== bookId));
    };
  return <Button variant="solid" onClick={() => removeFromCart(bookId)}><Cross2Icon/></Button>
}