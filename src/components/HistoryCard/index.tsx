import { Heading, HStack, Text, VStack } from "native-base";

export function HistoryCard(){
  return (
    <HStack  bg="gray.600" px={5} py={4} mb={3} style={{alignItems: 'center'}} rounded="md">
      <VStack flex={1}>
        <Heading color="white" fontSize="md" fontFamily="heading" textTransform="capitalize">Costas</Heading>
        <Text color="gray.100" fontSize="lg" fontFamily="body" numberOfLines={1}>Puxada frontal</Text>
      </VStack>

      <Text color="gray.300" fontSize="md" fontFamily="body">
        08:56
      </Text>
    </HStack>
  );
}