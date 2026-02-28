import React from 'react'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import Paragraph from '@/components/ui/Paragraph'

const ActionConfirmModal = ({
    visible,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "CONFIRM",
    cancelText = "CANCEL",
    confirmColor = "#FF1E1E"
}) => {

    return (
        <Modal
            transparent
            animationType="fade"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    <Paragraph style={styles.title}>
                        {title}
                    </Paragraph>

   
                    <Paragraph style={styles.message}>
                        {message}
                    </Paragraph>

                    <View style={styles.buttonRow}>

                
                        <TouchableOpacity
                            style={[styles.confirmButton, { backgroundColor: confirmColor }]}
                            onPress={() => {
                                onConfirm && onConfirm()
                                onClose && onClose()
                            }}
                        >
                            <Paragraph style={styles.confirmText}>
                                {confirmText}
                            </Paragraph>
                        </TouchableOpacity>

        
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={onClose}
                        >
                            <Paragraph style={styles.cancelText}>
                                {cancelText}
                            </Paragraph>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default ActionConfirmModal

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    modalContainer: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 24,
        padding: 25,
        borderWidth: 1,
        borderColor: '#222',
    },

    title: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 12,
    },

    message: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 25,
        lineHeight: 20,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    confirmButton: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: 'center',
        marginRight: 10,
    },

    confirmText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },

    cancelButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F3DEB1',
        borderRadius: 14,
        paddingVertical: 16,
        alignItems: 'center',
        marginLeft: 10,
    },

    cancelText: {
        color: '#F3DEB1',
        fontSize: 14,
        fontWeight: '500',
    },

})