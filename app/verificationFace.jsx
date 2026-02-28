import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { router } from 'expo-router'
import ThemeButton from '@/components/ui/ThemeButton'
const VerificationCamera = () => {

    const [permission, requestPermission] = useCameraPermissions()
    const [facing, setFacing] = useState('back')

    if (!permission) {
        return <View />
    }

    if (!permission.granted) {
        return (
            <View style={styles.center}>
                <Text style={{ color: '#fff', marginBottom: 10 }}>
                    We need camera permission
                </Text>
                <TouchableOpacity onPress={requestPermission}>
                    <Text style={{ color: '#D4AF37' }}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, }}>
            <CameraView style={{ flex: 1 }} facing={facing} />

            <View style={styles.bottomContainer}>
       <ThemeButton text="Done" onPress={()=> router.push('/reportUser')} />
            </View>
        </View>
    )
}

export default VerificationCamera

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        alignItems: 'center',
        padding: 16 
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
    },
})