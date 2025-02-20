import { favoriteBooksAtom } from "@entities/favorite/model/favoriteAtom";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useAtom } from "jotai";

export const RemoveBookFromFavoriteButton: React.FC<{ bookId: string }> = ({ bookId }) => {
    const [, setFavoriteBooks] = useAtom(favoriteBooksAtom);
    const removeFromFavorite = (bookId: string) => {
        setFavoriteBooks((prev) => prev.filter((book) => book.id !== bookId));
    };
  return <Button variant="solid" onClick={() => removeFromFavorite(bookId)}><Cross2Icon/></Button>
}