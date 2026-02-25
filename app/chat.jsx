import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import BackgroundUI from '@/components/ui/BackgroundUI'
import { Search, CheckCheck } from 'lucide-react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const chat = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>


                {/* HEADER */}
                <View style={styles.header}>
                    <HeadingH2>Chat</HeadingH2>
                    <CircleButton Icon={Search} onPress={() => router.push('/nearby')} />
                </View>

                {/* STORIES */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 12 }}>

                    <View style={styles.storyItem}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.storyAvatar} />
                        <View style={styles.onlineDot} />
                        <Text style={styles.storyName}>WILL</Text>
                    </View>

                    <View style={styles.storyItem}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.storyAvatar} />
                        <View style={styles.onlineDot} />
                        <Text style={styles.storyName}>KAREN</Text>
                    </View>

                    <View style={styles.storyItem}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.storyAvatar} />
                        <View style={styles.onlineDot} />
                        <Text style={styles.storyName}>SUZIE</Text>
                    </View>

                    <View style={styles.storyItem}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.storyAvatar} />
                        <View style={styles.onlineDot} />
                        <Text style={styles.storyName}>NANCY</Text>
                    </View>

                </ScrollView>

                <Paragraph style={styles.recent}>RECENT</Paragraph>

                <View>

                    {/* ROW 1 */}
                    <View style={styles.chatRow}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.chatAvatar} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.chatName}>JANE HOPPER</Text>
                            <Text style={[styles.chatMsg, { color: '#FF5F8A' }]}>TYPING...</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.time}>5 MIN AGO</Text>
                            <View style={styles.badge}><Text style={{ color: '#fff' }}>2</Text></View>
                        </View>
                    </View>

                    {/* ROW 2 */}
                    <View style={styles.chatRow}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.chatAvatar} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.chatName}>MAX MAYFIELD</Text>
                            <Text style={styles.chatMsg}>LOVED THE EVENT LAST NIGHT</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.time}>5 MIN AGO</Text>
                            <View style={styles.badge}><Text style={{ color: '#fff' }}>2</Text></View>
                        </View>
                    </View>

                    {/* ROW 3 */}
                    <View style={styles.chatRow}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.chatAvatar} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.chatName}>ERICA SINCLAIR</Text>
                            <Text style={styles.chatMsg}>LOVED THE EVENT LAST NIGHT</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.time}>5 MIN AGO</Text>
                            <CheckCheck size={16} color="#fff" />
                        </View>
                    </View>

                    <View style={styles.chatRow}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.chatAvatar} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.chatName}>ERICA SINCLAIR</Text>
                            <Text style={styles.chatMsg}>LOVED THE EVENT LAST NIGHT</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.time}>5 MIN AGO</Text>
                            <CheckCheck size={16} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.chatRow}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.chatAvatar} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.chatName}>ERICA SINCLAIR</Text>
                            <Text style={styles.chatMsg}>LOVED THE EVENT LAST NIGHT</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.time}>5 MIN AGO</Text>
                            <CheckCheck size={16} color="#fff" />
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default chat

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    storyItem: {
        alignItems: 'center',
        marginRight: 16,
    },

    storyAvatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },

    onlineDot: {
        position: 'absolute',
        right: 8,
        top: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#3cff00',
    },

    storyName: {
        color: '#aaa',
        fontSize: 11,
        marginTop: 6,
    },

    recent: {
        marginLeft: 12,
        marginVertical: 12,
        color: '#777',
    },

    chatRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderBottomWidth: 0.5,
        borderBottomColor: '#222',
    },

    chatAvatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
        marginRight: 12,
    },

    chatName: {
        color: '#fff',
        fontSize: 14,
    },

    chatMsg: {
        color: '#777',
        fontSize: 12,
        marginTop: 2,
    },

    time: {
        color: '#777',
        fontSize: 10,
        marginBottom: 4,
    },

    badge: {
        backgroundColor: '#a855f7',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

})