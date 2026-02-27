import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Eye } from 'lucide-react-native'

// components
import Logo from '@/components/ui/Logo'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import ThemeButton from '@/components/ui/ThemeButton'

const ConfirmYourIdentity = () => {
    return (
        <BackgroundUI>
            <View style={{ flex: 1 }}>

                <View style={{ alignItems: 'center' }}>

                    <Logo />
                </View>
                <View style={styles.content}>



                    <Paragraph style={styles.heading}>
                        CONFIRM YOUR IDENTITY
                    </Paragraph>

                    <Paragraph style={styles.subText}>
                        For security, please confirm your password.
                    </Paragraph>

                    <Paragraph style={styles.label}>
                        Current Password
                    </Paragraph>


                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="••••••••"
                            placeholderTextColor="#777"
                            secureTextEntry
                            style={styles.input}
                        />

                        <Eye color="#aaa" size={20} />
                    </View>

                </View>


                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Paragraph style={styles.deleteText}>
                            DELETE ACCOUNT
                        </Paragraph>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Paragraph style={styles.cancelText}>
                            CANCEL
                        </Paragraph>
                    </TouchableOpacity>
                </View>

            </View>













        </BackgroundUI>
    )
}

export default ConfirmYourIdentity



const styles = StyleSheet.create({

    content: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 160
    },

    heading: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
    },

    subText: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 30,
    },

    label: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 8,
    },

    inputWrapper: {
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    input: {
        flex: 1,
        color: '#fff',
    },

    bottomSection: {
        paddingHorizontal: 25,
        paddingBottom: 30,
    },

    deleteButton: {
        backgroundColor: '#FF1E1E',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 18,
    },

    deleteText: {
        color: '#fff',
        fontSize: 16,
    },

    cancelText: {
        textAlign: 'center',
        color: '#F3DEB1',
    },

})