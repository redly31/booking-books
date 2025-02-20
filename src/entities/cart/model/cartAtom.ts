import { IBook } from "@entities/book/model/IBook";
import { atom } from "jotai";

export const cartBooksAtom = atom<IBook[]>([]);