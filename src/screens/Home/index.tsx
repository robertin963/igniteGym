import { useState } from 'react';
import { GroupHome } from '@components/GroupHome';
import { HomeHeader } from '@components/HomeHeader';
import { Center, HStack, Text, VStack } from 'native-base';

export function Home(){
  const [groupSelected, setGroupSelected] = useState('ombro');

  

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <GroupHome name='costa' isActive={groupSelected === 'costa'} onPress={() => setGroupSelected("costa")}/>
        <GroupHome name='ombro' isActive={groupSelected === 'ombro'} onPress={() => setGroupSelected("ombro")}/>
        <GroupHome name='perna' isActive={groupSelected === 'perna'} onPress={() => setGroupSelected("perna")}/>

      </HStack>
    </VStack>

  );
}