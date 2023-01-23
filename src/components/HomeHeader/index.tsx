import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from "@components/UserPhoto";

export function HomeHeader(){
  return(
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto 
        source={{uri: 'https://media.licdn.com/dms/image/D4D03AQFai_3NCXkKkg/profile-displayphoto-shrink_200_200/0/1669766182261?e=1680134400&v=beta&t=vt-EHkhdX7yJuNeNOMdAjAnNjT4izhUG4xoERJjtz_Q'}} 
        alt="Imagem do usuário do sistema" 
        size={16} 
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">Roberto</Heading>
      </VStack>
      <TouchableOpacity>
        <Icon  
          as={MaterialIcons} 
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}