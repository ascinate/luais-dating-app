import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import ThemeButton from '@/components/ui/ThemeButton'

const ThemeModal = ({
    visible,
    onClose,
    title,
    subtitle,
    buttonText = "OK",
    IconComponent,
    iconColor = "#000",
    iconBackground = "#ffffff",
    titleColor = "#fff",
    onButtonPress   
}) => {

    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    {/* Dynamic Icon */}
                    {IconComponent && (
                        <View style={[styles.iconBox, { backgroundColor: iconBackground }]}>
                            <IconComponent color={iconColor} size={32} />
                        </View>
                    )}

                    {/* Dynamic Title */}
                    <Text style={[styles.title, { color: titleColor }]}>
                        {title}
                    </Text>

                    {/* Dynamic Subtitle */}
                    {subtitle && (
                        <Text style={styles.subtitle}>
                            {subtitle}
                        </Text>
                    )}

                    {/* Dynamic Button */}
                    <View style={{ marginTop: 25, width: '100%' }}>
         <ThemeButton
    text={buttonText}
    onPress={() => {
        if (onButtonPress) {
            onButtonPress()
        }
        onClose()
    }}
/>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default ThemeModal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    modalContainer: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#222',
    },

    iconBox: {
        width: 70,
        height: 70,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'center',
    },

    subtitle: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
})