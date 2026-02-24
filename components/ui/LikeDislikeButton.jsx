import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Heart, X } from 'lucide-react-native'
import { LinearGradient } from 'expo-linear-gradient'

const ActionToggle = () => {
    return (
        <View style={styles.container}>


            <TouchableOpacity>
                <View style={styles.reject}>
                    <X color="#fff" size={28} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <LinearGradient
                    colors={['#ff5fa2', '#7b4dff']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.like}
                >
                    <Heart color="#fff" size={28} fill="#fff" />
                </LinearGradient>
            </TouchableOpacity>

        </View>
    )
}

export default ActionToggle

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#252525',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#585858',
        padding: 8,
        width: 160,
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    reject: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3a3a3a',
        justifyContent: 'center',
        alignItems: 'center',
    },

    like: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})