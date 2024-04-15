import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Home } from "../screens/home";
import { Usuario } from "../screens/cadastro/usuario";

export type RootTabParamList = {
    Home: undefined;
    Usuario: { id: string };
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const Mytheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        background: 'white'
    },
}

export const Routes = () => {
    return (
        <NavigationContainer theme={Mytheme}>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={
                        {
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />

                            ),
                            title: "Lista de Usuários"
                        }
                    } />
                     <Tab.Screen
                    name='Usuario'
                    component={Usuario}
                    options={
                        {
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />

                            ),
                            title: "Cadastro de usuários"
                        }
                    } />
            </Tab.Navigator>

        </NavigationContainer>
    )
}