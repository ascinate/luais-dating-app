import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

// components
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Colors } from '@/constants/theme'
import { TableOfContents } from 'lucide-react-native'
import { router } from 'expo-router'

const Verification = () => {

    const [selected, setSelected] = useState('Passport')

    const options = [
        'Passport',
        'National ID',
        "Driver's License"
    ]

    return (
        <BackgroundUI>
            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{ paddingBottom: 40 }}
                    showsVerticalScrollIndicator={false}
                >

                    {/* Header */}
                    <View style={styles.header}>
                        <CircleButton
                            Icon={TableOfContents}
                            onPress={() => router.back()}
                        />
                        <HeadingH2 style={styles.headerTitle}>
                            Verification
                        </HeadingH2>
                        <View style={{ width: 40 }} />
                    </View>

                    {/* Main Content */}
                    <View style={styles.container}>

                        <Paragraph style={styles.mainTitle}>
                            CHOOSE YOUR{"\n"}VERIFICATION DOCUMENT
                        </Paragraph>

                        <Paragraph style={styles.subtitle}>
                            Select your preferred verification document
                        </Paragraph>

                        {/* Options */}
                        {options.map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.optionBox,
                                    selected === item && styles.selectedBox
                                ]}
                                onPress={() => setSelected(item)}
                            >
                                <View style={[
                                    styles.radioOuter,
                                    selected === item && styles.radioOuterSelected
                                ]}>
                                    {selected === item && <View style={styles.radioInner} />}
                                </View>

                                <Paragraph style={styles.optionText}>
                                    {item.toUpperCase()}
                                </Paragraph>
                            </TouchableOpacity>
                        ))}

                        {/* Instructions */}
                        <View style={styles.instructions}>
                            <Paragraph style={styles.instructionText}>
                                • Make sure the image is clear and readable.
                            </Paragraph>
                            <Paragraph style={styles.instructionText}>
                                • No glare or blur.
                            </Paragraph>
                            <Paragraph style={styles.instructionText}>
                                • All four corners must be visible.
                            </Paragraph>
                        </View>

                    </View>

                </ScrollView>

                {/* Bottom Button */}
                <View style={styles.bottomButton}>
                    <ThemeButton
                        text="SCAN THE DOCUMENT"
                        onPress={() => router.push('/verificationCamera')}
                    />
                </View>

            </View>
        </BackgroundUI>
    )
}

export default Verification

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    headerTitle: {
        color: '#fff',
    },

    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    mainTitle: {
        fontSize: 20,
        color: '#fff',
        lineHeight: 28,
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 25,
    },

    optionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#444',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 15,
        marginBottom: 15,
    },

    selectedBox: {
        borderColor: Colors.softWarm,
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
    },

    radioOuter: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#777',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    radioOuterSelected: {
        borderColor: '#D4AF37',
    },

    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D4AF37',
    },

    optionText: {
        color: '#fff',
        fontSize: 14,
        letterSpacing: 1,
    },

    instructions: {
        marginTop: 10,
    },

    instructionText: {
        color: '#aaa',
        fontSize: 13,
        marginBottom: 6,
    },

    bottomButton: {
        paddingHorizontal: 20,
        paddingBottom: 15,
    },

})