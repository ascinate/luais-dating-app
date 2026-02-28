import { View, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Eye } from 'lucide-react-native'

// components
import Logo from '@/components/ui/Logo'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import ThemeButton from '@/components/ui/ThemeButton'
import { router } from 'expo-router'

const ConfirmYourIdentity = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [checked, setChecked] = useState(false)


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
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => router.push('/discoveryPreferences')}
                    >
                        <Paragraph style={styles.deleteText}>
                            DELETE ACCOUNT
                        </Paragraph>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> router.push('/home')}>
                        <Paragraph style={styles.cancelText}>
                            CANCEL
                        </Paragraph>
                    </TouchableOpacity>
                </View>

            </View>



            <Modal
                transparent
                animationType="fade"
                visible={modalVisible}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>

                        <Paragraph style={styles.modalTitle}>
                            CONFIRM DELETION
                        </Paragraph>

                        <Paragraph style={styles.modalText}>
                            Are you sure you want to permanently delete your account?
                            This cannot be undone.
                        </Paragraph>

                        {/* Checkbox */}
                        <TouchableOpacity
                            style={styles.checkboxRow}
                            onPress={() => setChecked(!checked)}
                        >
                            <View style={[
                                styles.checkbox,
                                checked && { backgroundColor: '#fff' }
                            ]} />
                            <Paragraph style={styles.checkboxText}>
                                I understand this action is permanent.
                            </Paragraph>
                        </TouchableOpacity>

                        {/* Confirm Button */}
                        <TouchableOpacity
                            style={[
                                styles.confirmDeleteButton,
                                { opacity: checked ? 1 : 0.5 }
                            ]}
                            disabled={!checked}
                        >
                            <Paragraph style={styles.confirmDeleteText}>
                                YES, DELETE MY ACCOUNT
                            </Paragraph>
                        </TouchableOpacity>

                        {/* Cancel */}
                        <TouchableOpacity
                            style={styles.cancelModalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Paragraph style={styles.cancelModalText}>
                                CANCEL
                            </Paragraph>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>






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




    // modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '90%',
        backgroundColor: '#0f0f0f',
        borderRadius: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: '#333',
    },

    modalTitle: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 15,
    },

    modalText: {
        color: '#aaa',
        fontSize: 14,
        marginBottom: 20,
    },

    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },

    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#777',
        marginRight: 10,
    },

    checkboxText: {
        color: '#ccc',
        flex: 1,
    },

    confirmDeleteButton: {
        backgroundColor: '#FF1E1E',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
    },

    confirmDeleteText: {
        color: '#fff',
        fontSize: 14,
    },

    cancelModalButton: {
        borderWidth: 1,
        borderColor: '#F3DEB1',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },

    cancelModalText: {
        color: '#F3DEB1',
    },
})