import { IBook } from "@entities/book/model/IBook";
import { favoriteBooksAtom } from "@entities/favorite/model/favoriteAtom";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useAtom } from "jotai";

export const AddBookToFavoriteButton: React.FC<{ book: IBook }> = ({ book }) => {
    const [, setFavoriteBooks] = useAtom(favoriteBooksAtom);
    const addToFavorite = (book: IBook) => {
      setFavoriteBooks((prev) => [...prev, book]);
    };
  return <Button variant="solid" onClick={() => addToFavorite(book)}><BookmarkIcon/></Button>
}