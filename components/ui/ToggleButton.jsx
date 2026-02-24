import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Flame, MapPin } from 'lucide-react-native'

const ToggleButton = () => {
    const [active, setActive] = useState('forYou')

    return (
        <View style={styles.container}>

            {/* FOR YOU */}
            <TouchableOpacity
                style={[
                    styles.item,
                    active === 'forYou' && styles.activeItem,
                ]}
                onPress={() => setActive('forYou')}
            >
                <Flame size={16} color={active === 'forYou' ? '#ff4d8d' : '#888'} />
                <Text
                    style={[
                        styles.text,
                        active === 'forYou' && styles.activeText,
                    ]}
                >
                    FOR YOU
                </Text>
            </TouchableOpacity>

            {/* NEARBY */}
            <TouchableOpacity
                style={[
                    styles.item,
                    active === 'nearby' && styles.activeItem,
                ]}
                onPress={() => setActive('nearby')}
            >
                <MapPin size={16} color={active === 'nearby' ? '#fff' : '#888'} />
                <Text
                    style={[
                        styles.text,
                        active === 'nearby' && styles.activeText,
                    ]}
                >
                    NEARBY
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default ToggleButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#252525',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#585858',
        padding: 4,
        width: 220,
        height: 48,
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },

    activeItem: {
        backgroundColor: '#373737',
    },

    text: {
        color: '#888',
        fontSize: 12,
        fontWeight: '600',
    },

    activeText: {
        color: '#fff',
    },
})