import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import LogoSVG from '@assets/logo.svg';

import BackgroundImg  from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} >
        <Image source={BackgroundImg} alt="Pessoas treinando Academia" resizeMode="contain" position="absolute" defaultSource={BackgroundImg}/>

        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="sm">Treine sua mente e o seu corpo</Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6}  fontFamily="heading">
          Crie sua conta
          </Heading>
          <Input placeholder='Nome' keyboardType="default" autoCapitalize="words"/>
          <Input placeholder='E-mail' keyboardType="email-address" autoCapitalize="none"/>
          <Input placeholder='Senha' secureTextEntry/>
          <Input placeholder='Confirme a Senha' secureTextEntry/>
          <Button  title='Criar e acessar'/>
        </Center>
        
          <Button  title='Voltar para o login' variant="outline" mt={8} onPress={handleGoBack}/>
        

      </VStack>
    </ScrollView>
  );
}