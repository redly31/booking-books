import { BookmarkIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Container, Flex, Inset, Strong, Text } from "@radix-ui/themes";

export function BookCard() {
  return (
    <Box maxWidth="350px" mt="3">
      <Card size="1">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          А. П. Чехов <Strong>"Хамелеон"</Strong>
        </Text>
        <Text as="p" size="3">
          Рассказ, год выпуска: 1884 г.
        </Text>
        <Text as="p" size="3">
          Рейтинг: <Strong>9.3</Strong>
        </Text>
        <Flex justify="between" align="center" mt="2">
          <Container>
            <Button variant="solid">В корзину</Button>
            <Button variant="solid" ml="2"><BookmarkIcon/></Button>
          </Container>
          <Text><Strong>1999₽</Strong></Text>
        </Flex>
       
      </Card>
    </Box>
  );
}
