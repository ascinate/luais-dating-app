

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


                    <View style={{ marginBottom: 30 }}>
                        <Paragraph style={{ color: Colors.lightGray, marginBottom: 12 }}>Who You Want to See</Paragraph>
                        <View style={styles.optionsWrapper}>

                            <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                                <Paragraph style={styles.selectedText}>
                               Fake profile
                                </Paragraph>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optionButton}>
                                <Paragraph style={styles.optionText}>
                                 Inappropriate content
                                </Paragraph>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.optionButton}>
                                <Paragraph style={styles.optionText}>
                               Spam or scam
                                </Paragraph>
                            </TouchableOpacity>
                                       <TouchableOpacity style={styles.optionButton}>
                                <Paragraph style={styles.optionText}>
                      Hate or discrimination
                                </Paragraph>
                            </TouchableOpacity>
                                       <TouchableOpacity style={styles.optionButton}>
                                <Paragraph style={styles.optionText}>
                     Under 18
                                </Paragraph>
                            </TouchableOpacity>
                                                        <TouchableOpacity style={styles.optionButton}>
                                <Paragraph style={styles.optionText}>
              Other
                                </Paragraph>
                            </TouchableOpacity>

                        </View>
                    </View>



                </ScrollView>
                {/* BOTTOM BUTTONS */}
                <View style={styles.bottomButtons}>
                    <ThemeButton text="Continue" onPress={() => router.push('/reportUserTwo')} />
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
    },

    optionButton: {
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 12,
    },

    selectedText: {
        color: '#F3DEB1',
        fontSize: 12,
    },

    selectedOption: {
        borderColor: '#F3DEB1',
        backgroundColor: '#f3deb113',

    },

    optionText: {
        color: '#ccc',
        fontSize: 12,
    },

    optionsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },

})