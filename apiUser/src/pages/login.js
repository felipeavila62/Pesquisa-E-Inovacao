import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';


export default function Login({navigation}) {
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user =>{
            if(user){
               navigation.navigate('Main', {user}) 
            }
        })
    }, []);

    async function handleLogin(){
        const response = await api.post('/profs', {username: user});
        
        const {name} = response.data;
        
        await AsyncStorage.setItem('user', name)

        navigation.navigate('Main', {user: name});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Linx PLay</Text>

            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Digite o seu usuário"
                placeholderTextColor="#6E4B87"
                style={styles.input}
                value={user}
                onChangeText={setUser}>
            </TextInput>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#280A3C',
        justifyContent: "center",
        alignItems: 'center',
        padding: 30,
    },
    title: {
        color: '#fff',
        fontSize: 30,
    },
    input:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#6E4B87',
        color: '#eee',
        borderRadius: 15,
        marginTop: 35,
        paddingHorizontal: 15,
    },
    button:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#6E4B87',
    },
    buttonText:{
        color: '#6E4B87',
        fontWeight: 'bold',
        fontSize: 16
    },
});