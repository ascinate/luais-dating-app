import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const CircleButton = ({ Icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.roundedButton}>
                {Icon && <Icon color="#fff" size={22} />}
            </View>
        </TouchableOpacity>
    )
}

export default CircleButton

const styles = StyleSheet.create({
    roundedButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#585858',
        backgroundColor: '#373737',
        justifyContent: 'center',
        alignItems: 'center',
    },
})