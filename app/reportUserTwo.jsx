

import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'


// components
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Colors } from '@/constants/theme'
import { TableOfContents, Check } from 'lucide-react-native'
import { router } from 'expo-router'
import ReportSubmittedModal from '../components/ui/ThemeModal'
import ThemeModal from '../components/ui/ThemeModal'
import ConfirmActionModal from '../components/ui/ConfirmActionModal'


const verification = () => {
    const [showModal, setShowModal] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)
    return (
        <BackgroundUI>
            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{ padding: 12 }}
                    showsVerticalScrollIndicator={false}
                >

                    {/* header */}
                    <View style={styles.header}>
                        <CircleButton
                            Icon={TableOfContents}
                            onPress={() => router.back()}
                        />

                        <HeadingH2 style={styles.title}>
                            Report Users
                        </HeadingH2>

                        <View style={{ width: 40 }} />
                    </View>




                    <View style={styles.container}>
                        <Paragraph style={styles.heading}>
                            Why are you reporting
                            this profile?
                        </Paragraph>

                        <Paragraph style={styles.subParagraph}>
                            Your report helps keep the community safe.
                        </Paragraph>
                    </View>

                    <TextInput
                        style={styles.textArea}
                        placeholder="Add any details you think are important…"
                        placeholderTextColor="#ABABAB"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />



                </ScrollView>
                {/* BOTTOM BUTTONS */}
                <View style={styles.bottomButtons}>
                    <ThemeButton text="Continue" onPress={() => setShowModal(true)} />
                    <TouchableOpacity >
                        <View>
                            <Paragraph style={{ color: Colors.softWarm }}>cancel</Paragraph>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ThemeModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                title="REPORT SUBMITTED"
                subtitle="Thanks for helping keep our community safe. Our team will review this shortly."
                buttonText="DONE"
                IconComponent={Check}
                iconColor="#000"
                iconBackground="#fff"
                onButtonPress={() => setConfirmModal(true)}
            />

            <ConfirmActionModal
                visible={confirmModal}
                onClose={() => setConfirmModal(false)}
                onConfirm={() => router.push('/verificationFour')}
                title="Block This User?"
                message="You won't see their profile or messages
anymore. They won't be notified."
                confirmText="BLOCK USER"
                confirmColor="red"
                requireConfirmation={false}
             
            />
        </BackgroundUI>
    )
}

export default verification


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },













    container: {
        paddingTop: 30,
    },

    heading: {
        fontSize: 24,
        color: '#fff',
        ParagraphTransform: 'uppercase',
        lineHeight: 34,
        marginBottom: 16,
    },

    subParagraph: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 20,
    },

    listContainer: {
        marginTop: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },

    bullet: {
        color: '#fff',
        fontSize: 18,
        marginRight: 10,
        lineHeight: 20,
    },

    itemParagraph: {
        flex: 1,
        color: '#ddd',
        fontSize: 14,
        lineHeight: 20,
    },

    bottomButtons: {
        paddingHorizontal: 20,
        paddingBottom: 5,
        alignItems: 'center'
    },


    textArea: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ABABAB',
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderRadius: 10,
        color: Colors.lightGray,



    },

})