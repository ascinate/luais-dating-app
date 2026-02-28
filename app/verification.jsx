

import { View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


// components
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Colors } from '@/constants/theme'
import { TableOfContents } from 'lucide-react-native'
import { router } from 'expo-router'


const verification = () => {
    return (
        <BackgroundUI>
            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{ paddingBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                >


                    {/* header */}
                    <View style={styles.header}>
                        <CircleButton
                            Icon={TableOfContents}
                            onPress={() => router.back()}
                        />

                        <HeadingH2 style={styles.title}>
                            Verification
                        </HeadingH2>

                        <View style={{ width: 40 }} />
                    </View>




                    <View style={styles.container}>
                        <Paragraph style={styles.heading}>
                            Identity Verification
                        </Paragraph>

                        <Paragraph style={styles.subParagraph}>
                            To keep our community safe, we need to verify your identity.
                        </Paragraph>
                    </View>






                </ScrollView>
                {/* BOTTOM BUTTONS */}
                <View style={styles.bottomButtons}>
                    <ThemeButton text="Start Verification" onPress={() => router.push('/verificationTwo')} />


                </View>
            </View>
        </BackgroundUI>
    )
}

export default verification


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },













    container: {
        paddingHorizontal: 20,
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
    },


})