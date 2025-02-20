import { Dialog } from "radix-ui";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import "./styles.css";
import { Button } from "@radix-ui/themes";
import { searchAtom } from "../model/searchAtom";
import { useAtom } from "jotai";
import { useState } from "react";

export const SearchButton = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [inputValue, setInputValue] = useState<string>("");

  const searchBook = () => setSearch(inputValue);


  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="solid">
          <MagnifyingGlassIcon /> Поиск
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Title>Поиск</Dialog.Title>
        <Dialog.Content className="DialogContent">
          <fieldset className="Fieldset">
            <input
              className="Input"
              onChange={(e) => setInputValue(e.target.value)}
              id="name"
              placeholder="Поиск..."
              defaultValue={search}
            />
          </fieldset>
          <Dialog.Close asChild>
            <button className="Button green" onClick={() => searchBook()}>
              Найти
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
