import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Compass, Heart, MessageSquare, Home } from 'lucide-react-native'

const tabs = [
    { id: 'Home ', icon: Home },
    { id: 'Compass', icon: Compass },
    { id: 'Heart', icon: Heart },
    { id: 'Message ', icon: MessageSquare },
]

const ToggleButton = ({ style }) => {
    const [active, setActive] = useState('Home')

    return (
        <View style={[styles.container, style]}>
            {tabs.map(({ id, icon: Icon }) => {
                const isActive = active === id

                return (
                    <TouchableOpacity
                        key={id}
                        style={[styles.item, isActive && styles.activeItem]}
                        onPress={() => setActive(id)}
                    >
                        <Icon
                            size={20}
                            color={isActive ? '#ff4d8d' : '#888'}
                            fill={isActive ? '#ff4d8d' : 'transparent'}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default ToggleButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#252525',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FF5F8A',
        padding: 4,
        width: 250,
        height: 66,
    },

    item: {
        flex: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    activeItem: {
        backgroundColor: '#fff',
    },
})