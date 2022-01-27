import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Costa</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          thiagohrcosta86@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Thiago Costa" src="https://github.com/thiagohrcosta.png" />

    </Flex>
  )
}