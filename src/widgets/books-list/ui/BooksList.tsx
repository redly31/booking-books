import { BookCard } from "@entities/book";
import { Grid } from "@radix-ui/themes";

export function BooksList() {
  return (
    <Grid columns="2" gap="3" width="auto">
      <BookCard/>
      <BookCard/>
      <BookCard/>
    </Grid>
  )
}
