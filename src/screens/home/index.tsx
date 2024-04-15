import React from "react";
import { View, Text, ImageBackground } from "react-native";
import 'react-hook-form'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { VStack, Center, Heading, Icon, Box } from 'native-base'
import backgroundImg from '../home/headerbackground.png'


export const Home = () => {
    
    return (
            <KeyboardAwareScrollView>
                <VStack flex={1} px={5} pb={100} p={10}>
                    <Center>
                        <Heading my={10}>
                          <ImageBackground
                          source={backgroundImg}
                          />
                        <Text>Home</Text>
                        </Heading>
                    </Center> 
                </VStack>
            </KeyboardAwareScrollView>
    );
}
