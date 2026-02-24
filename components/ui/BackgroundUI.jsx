import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const BackgroundUI = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>

            {children}

        </SafeAreaView>
    )
}

export default BackgroundUI

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        flex: 1,
    },

})