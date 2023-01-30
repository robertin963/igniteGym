import { useState } from 'react';
import { VStack, FlatList, HStack, Heading, Text } from 'native-base';
import { GroupHome } from '@components/GroupHome';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home(){
  const [groups, setGroups] = useState(['Costas','Bíceps','Tríceps', 'ombro']);
  const [groupSelected, setGroupSelected] = useState('ombro');
  const [exercicios, setExercicios] = useState(['1','2','3','4','5','Puxada frontal','Remada unilateral','Remada curvada', 'Levantamento terras']);

  

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupHome name={item} isActive={groupSelected.toUpperCase() === item.toUpperCase()} onPress={() => setGroupSelected(item)}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />       

      <VStack px={8}>
        <HStack mb={5}>
          <Heading color="gray.200" fontSize="md" flex={1} >
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercicios.length}
          </Text>
        </HStack>


        <FlatList 
          data={exercicios}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 80}}
          
        />

      </VStack>
      
    </VStack>

  );
}