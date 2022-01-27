import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Thiago Costa</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          thiagohrcosta86@gmail.com
        </Text>
      </Box>
      )}
      <Avatar size="md" name="Thiago Costa" src="https://github.com/thiagohrcosta.png" />

    </Flex>
  )
}