import { ScrollView, TouchableOpacity } from "react-native"
import { ScreenHeader } from "@components/ScreenHeader"
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed"
import { UserPhoto } from "@components/userPhoto"
import { Input } from "@components/input"
import { Button } from "@components/Button"

export function Profile (){
    return (
        <VStack flex={1}>
           <ScreenHeader title="Perfil" />

        <ScrollView contentContainerStyle={{paddingBottom: 36}}>
            <Center mr="$6" px="$10">
                <UserPhoto source={{uri: "https://github.com/omarcelobenites.png"}}  alt="Foto do Usuario" size="xl"/>

                <TouchableOpacity>
                    <Text color="$green500" fontFamily="$heading" fontSize="$md" mt="$2" mb="$8"> Alterar Foto </Text>
                    </TouchableOpacity>
                    <Center w="$full" gap="$4">
                    <Input placeholder="Nome" bg="$gray600" />
                    <Input value="marcelofelixbenites@gmail.com" bg="$gray600" isReadOnly/>
                </Center>
                <Heading alignSelf="flex-start" fontFamily="$heading" color="$gray200" fontSize="$md" mt="$12" mb="$2">
                    Alterar senha
                </Heading>
                <Center w="$full" gap="$4">
                    <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry  /> 
                    <Input placeholder="Nova Senha" bg="$gray600" secureTextEntry  /> 
                    <Input placeholder="Confirme a nova senha" bg="$gray600" secureTextEntry  /> 
                    <Button title="Atualizar"/>
                </Center>
            </Center>
        </ScrollView>
        </VStack>
    )
}