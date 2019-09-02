import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import api from '../services/api.js'
import AsyncStorage from '@react-native-community/async-storage';


export default function Main({ navigation }) {
    const id = navigation.getParam('user');
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     async function loadUsers() {
    //         const response = await api.get('/profs', {
    //             headers: {
    //                 user: id,
    //             }
    //         })
    //         setUsers(response.data);
    //     }
    //     loadUsers();
    // }, [id]);

    async function handleLogout() {
        await AsyncStorage.clear();

        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.title}>Linx Play</Text>
            </TouchableOpacity>


            <View style={styles.cardsContainer}>
                
                <View key={id} style={styles.card}>
                    <View style={styles.footer}>
                        <Text style={styles.user}>{id}</Text>
                        <Text style={styles.name}>{}</Text>
                    </View>
                </View>


            </View>

            <View />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#280A3C',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: "center",
        maxHeight: 500,

    },
    title: {
        color: '#fff',
        fontSize: 30,
    },
    card: {
        borderWidth: 1,
        borderColor: '#6E4B87',
        borderRadius: 15,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    user: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    name: {
        fontSize: 12,
        color: '#000'
    }
})