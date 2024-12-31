import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/constants/Colors'

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name="search-outline" size={20} color={Colors.medium} />
                <TextInput
                    placeholder='Find your Favourite juice here'
                    style={styles.input}
                />
            </View>
            <Link href={'/'} asChild >
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
)

const styles = StyleSheet.create({
    searchContainer: {
        height: 60,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGray,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionButton: {
        padding: 10,
        borderRadius: 50
    },
    input: {
        padding: 10,
        color: Colors.mediumDark
    },
    searchIcon: {
        paddingLeft: 10
    }
})

export default SearchBar