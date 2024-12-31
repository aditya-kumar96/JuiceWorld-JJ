import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={styles.safeAre}>
            <View style={styles.container}>
                <Text>Header</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAre: {
        flex: 1
    },
    container: {
        height: 60,
        backgroundColor: 'red',

    }
})
export default Header