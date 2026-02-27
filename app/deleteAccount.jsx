import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'


// components
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Colors } from '@/constants/theme'
import { TableOfContents } from 'lucide-react-native'


const deleteAccount = () => {
    return (
        <BackgroundUI>
            {/* header */}
            <View style={styles.header}>
                <CircleButton
                    Icon={TableOfContents}
                    onPress={() => router.back()}
                />

                <HeadingH2 style={styles.title}>
                    Delete Account
                </HeadingH2>

                <View style={{ width: 40 }} />
            </View>




            <View style={styles.container}>
                <Paragraph style={styles.heading}>
                    ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?
                </Paragraph>

                <Paragraph style={styles.subParagraph}>
                    This action is permanent and can’t be undone.
                </Paragraph>

                <View style={styles.listContainer}>
                    <View style={styles.row}>
                        <Paragraph style={styles.bullet}>•</Paragraph>
                        <Paragraph style={styles.itemParagraph}>Your profile will be removed</Paragraph>
                    </View>

                    <View style={styles.row}>
                        <Paragraph style={styles.bullet}>•</Paragraph>
                        <Paragraph style={styles.itemParagraph}>Matches and messages will be deleted</Paragraph>
                    </View>

                    <View style={styles.row}>
                        <Paragraph style={styles.bullet}>•</Paragraph>
                        <Paragraph style={styles.itemParagraph}>You’ll need to create a new account to return</Paragraph>
                    </View>
                </View>
            </View>



<ThemeButton text='dsd'/>


        </BackgroundUI>
    )
}

export default deleteAccount


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
})