import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ThemeButton = ({ text, icon, onPress, style, textStyle, iconPosition = 'left' }) => {
    return (
        <LinearGradient
            colors={['#F65D8F', '#633DE2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.6, y: 0 }}
            style={[styles.continueBtn, style]}
        >
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={styles.touchable}
            >
                <View style={styles.content}>
                    {/* Optional icon on the left */}
                    {icon && iconPosition === 'left' && <View style={styles.icon}>{icon}</View>}

                    {/* Button text */}
                    <Text style={[styles.continueTxt, textStyle]}>
                        {text}
                    </Text>

                    {/* Optional icon on the right */}
                    {icon && iconPosition === 'right' && <View style={styles.icon}>{icon}</View>}
                </View>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    continueBtn: {
        borderRadius: 12,
        width: '100%',
        marginVertical: 21,
        overflow: 'hidden',
    },
    touchable: {
        paddingVertical: 21,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8, // space between icon and text
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueTxt: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
});

export default ThemeButton;
