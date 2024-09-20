import { useState } from "react"
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed"
import { FlatList } from "react-native"
import {ExerciseCard } from "@components/ExerciseCard"

import { HomeHeader } from "@components/HomeHeader"
import { Group } from "@components/Group"


export function Home(){
    //lista de exercicio
    const [exercises, setExercises] = useState([
        "Puxada frontal",
        "Remada curvada",
        "Remada unilateral",
        "Levantamento terra",
        "Puxada frontal1",
        "Remada curvada1",
        "Remada unilateral1",
        "Levantamento terra1"
    ])
    const [groups, setGroups] = useState(["Costas", "Biceps", "Triceps","Ombro"])
    const [groupSelected, setGroupSelected] = useState("Costas")
    return (
        <VStack flex={1}>
           <HomeHeader />

           <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

        
          <VStack px="$8" flex={1}>
              <HStack justifyContent="space-between" mt="$5" alignItems="center">
                <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
                    Exercicios
                </Heading>
                <Text color="$gray200" fontSize="$sm" fontFamily="$body">{exercises.length}</Text>
              </HStack>
              <FlatList 

              data={exercises} 
              keyExtractor={(item) => item} 
              renderItem={()=>  <ExerciseCard />} 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle = {{ paddingBottom: 20 }}
              style={{ flexShrink: 1 }}
               />
          </VStack>
        </VStack>
    )
}