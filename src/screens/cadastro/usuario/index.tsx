import React, { useState } from "react";
import { VStack, Center, Heading, Icon, Box } from 'native-base'
import { Control, Controller, useForm } from 'react-hook-form'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-tiny-toast";
import CepController from "../../../Controller/CepController"; // Import your CepController class
import { Input } from "../../../components/input/input";
import { Button } from "../../../components/buttons/Button";


type FormDataProps = {
    id: any;
    PrimeiroNome: string;
    SegundoNome: string;
    email: string;
    CEP: string;
    Rua: string;
    Bairro: string;
    Cidade: string;
    UF: string;
    Numero: string;
}

const schemaRegister = yup.object({
    PrimeiroNome: yup.string().required('Nome obrigatório'),
    SegundoNome: yup.string().required('Nome obrigatório'),
    email: yup.string().required('email obrigatório').email('Informe um email válido'),
    CEP: yup.string().required('CEP obrigatório').min(8, 'No mínimo 8 caracteres'),
    Numero: yup.string().required('Número obrigatório')
});


export const Usuario = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(schemaRegister) as any
    });


    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState({
        Rua: "",
        Bairro: "",
        Cidade: "",
        UF: "",
    });

    const handleFetchAddressInfo = async (cep: string) => {
        setLoading(true);
        try {
            await CepController.fetchCep(cep) // Call the fetchCep method from your CepController class
            const addressInfo = CepController.getCeps().pop(); // Get the latest address info from the array
            if (addressInfo) {
                setAddress({
                    Rua: addressInfo.logradouro,
                    Bairro: addressInfo.bairro,
                    Cidade: addressInfo.localidade,
                    UF: addressInfo.uf,
                });

                setValue('Rua', addressInfo.logradouro);
                setValue('Bairro', addressInfo.bairro);
                setValue('Cidade', addressInfo.localidade);
                setValue('UF', addressInfo.uf);
            }
        } catch (error) {
            console.error("Error fetching address information:", error);
            Toast.show('Error fetching address information');
        } finally {
            setLoading(false);
        }
    };

    
    const handlerRegister = async (data: FormDataProps) => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(data));
            console.log('Data stored successfully:', data);
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };


    return (
        <KeyboardAwareScrollView>
            <VStack bgColor="gray.100" flex={1} px={5} pb={100} p={10}>
                <Center>
                    <Heading my={10}>
                        Cadastro de usuário
                    </Heading>
                    <Controller
                        control={control}
                        name="PrimeiroNome"
                        render={({ field: { onChange } }) => (
                            <Input placeholder="Informe o primeiro nome"
                                onChangeText={onChange}
                                errorMessage={errors.PrimeiroNome?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="SegundoNome"
                        render={({ field: { onChange } }) => (
                            <Input placeholder="Informe o sobrenome"
                                onChangeText={onChange}
                                errorMessage={errors.SegundoNome?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange } }) => (
                            <Input placeholder="Informe o email"
                                onChangeText={onChange}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="CEP"
                        render={({ field: { onChange, value } }) => (
                            <Box flexDirection="row" alignItems="center" p={5}>
                                <Input placeholder="Informe o CEP"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.CEP?.message}
                                />
                                <Icon
                                    name="chevron-right"
                                    size={34}
                                    color="#666"
                                    onPress={() => handleFetchAddressInfo(value)}
                                    ml={2}
                                />
                            </Box>
                        )}
                    />
                    <Input placeholder="Rua" value={address.Rua} onChangeText={(text) => setAddress({ ...address, Rua: text })} />
                    <Input placeholder="Bairro" value={address.Bairro} onChangeText={(text) => setAddress({ ...address, Bairro: text })} />
                    <Input placeholder="Cidade" value={address.Cidade} onChangeText={(text) => setAddress({ ...address, Cidade: text })} />
                    <Input placeholder="UF" value={address.UF} onChangeText={(text) => setAddress({ ...address, UF: text })} />
                    <Input placeholder="Número" />

                    <Button title='Cadastrar' onLongPress={handleSubmit(handlerRegister)}/>


            </Center>
            </VStack>
        </KeyboardAwareScrollView>
    );
}
function async(ceps: import("../../../Model/CepModel").default[]) {
    throw new Error("Function not implemented.");
}

function setLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}

function setValue(arg0: string, logradouro: string) {
    throw new Error("Function not implemented.");
}

function watch() {
    throw new Error("Function not implemented.");
}

