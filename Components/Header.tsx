import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchBar from './SearchBar';
const Header = () => {
    return (
        <SafeAreaView style={styles.safeAre}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.locationView}>
                    <Entypo name="location" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>Delivery . Now</Text>
                    <View style={styles.locationContainer}>
                        <Text style={styles.subtitle}>Noida , UP</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileButton}>
                    <Ionicons name="person-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
            <SearchBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAre: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        paddingHorizontal: 20
    },
    locationView: {
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 50
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: Colors.medium
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    profileButton: {
        backgroundColor: Colors.lightGray,
        padding: 10,
        borderRadius: 50
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default Header