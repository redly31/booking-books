import { IBook } from "@entities/book/model/IBook";
import { atom } from "jotai";

export const favoriteBooksAtom = atom<IBook[]>([]);