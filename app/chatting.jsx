import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'


//chating
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import BackgroundUI from '@/components/ui/BackgroundUI'

import { ArrowLeft, EllipsisVertical, Search, Phone, SendHorizontal } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/theme'
import { router } from 'expo-router'



const chatting = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a', paddingHorizontal: 12 }}>

            {/* HEADER */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <TouchableOpacity    onPress={() => router.back()}>
                        <ArrowLeft color={'#fff'} />
                    </TouchableOpacity>
                    <View style={styles.avatarContainer}>
                        <Image source={require('../assets/images/profile.jpg')} style={styles.avatar} />
                    </View>
                    <Text style={{ color: '#fff', fontSize: 20 }}>user name</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <CircleButton Icon={Phone} onPress={() => router.push('/nearby')} />
                    <CircleButton Icon={EllipsisVertical} onPress={() => router.push('/nearby')} />

                </View>
            </View>



            <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a', padding: 12 }}>

                {/* message box */}
                <View>

                    {/* left */}
                    <View style={styles.leftMessage}>
                        <Paragraph style={styles.leftMessageText}>
                            Hey! How are you?
                        </Paragraph>

                        <View style={styles.leftTimeContainer}>
                            <Paragraph style={styles.leftMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>


                    {/* right */}
                    <View style={styles.rightMessage}>
                        <Paragraph style={styles.rightMessageText}>
                            Hi 😊 I'm doing pretty good today. How about you?
                        </Paragraph>

                        <View style={styles.rightTimeContainer}>
                            <Paragraph style={styles.righMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>


                    {/* left */}
                    <View style={styles.leftMessage}>
                        <Paragraph style={styles.leftMessageText}>
                            I'm fine too. Just a little tired from work, but I can't complain. It was a busy day.
                        </Paragraph>

                        <View style={styles.leftTimeContainer}>
                            <Paragraph style={styles.leftMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>
                    {/* right */}
                    <View style={styles.rightMessage}>
                        <Paragraph style={styles.rightMessageText}>
                            Oh no, long day? What happened?
                        </Paragraph>

                        <View style={styles.rightTimeContainer}>
                            <Paragraph style={styles.righMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>





                    {/* left */}
                    <View style={styles.leftMessage}>
                        <Paragraph style={styles.leftMessageText}>
                            Yeah, we had back-to-back meetings all afternoon. My brain feels completely fried right now 😅
                        </Paragraph>

                        <View style={styles.leftTimeContainer}>
                            <Paragraph style={styles.leftMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>
                    {/* right */}
                    <View style={styles.rightMessage}>
                        <Paragraph style={styles.rightMessageText}>
                            I know that feeling! Those kinds of days can be exhausting. Did at least something good happen?
                        </Paragraph>

                        <View style={styles.rightTimeContainer}>
                            <Paragraph style={styles.righMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>






                    {/* left */}
                    <View style={styles.leftMessage}>
                        <Paragraph style={styles.leftMessageText}>
                            Actually, yes. My manager appreciated the project I’ve been working on, so that made it worth it.
                        </Paragraph>

                        <View style={styles.leftTimeContainer}>
                            <Paragraph style={styles.leftMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>
                    {/* right */}
                    <View style={styles.rightMessage}>
                        <Paragraph style={styles.rightMessageText}>
                            That’s amazing! See? Hard work pays off. I’m proud of you 👏
                        </Paragraph>

                        <View style={styles.rightTimeContainer}>
                            <Paragraph style={styles.righMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>







                    {/* left */}
                    <View style={styles.leftMessage}>
                        <Paragraph style={styles.leftMessageText}>
                            I'm fine too. Just a little tired from work, but I can’t complain. It was a busy day.
                        </Paragraph>

                        <View style={styles.leftTimeContainer}>
                            <Paragraph style={styles.leftMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>
                    {/* right */}
                    <View style={styles.rightMessage}>
                        <Paragraph style={styles.rightMessageText}>
                            Oh no, long day? What happened?
                        </Paragraph>

                        <View style={styles.rightTimeContainer}>
                            <Paragraph style={styles.righMessageTime}>
                                10:00 PM
                            </Paragraph>
                        </View>
                    </View>

                </View>


            </ScrollView>



            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Type a message..."
                    placeholderTextColor="#aaa"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.sendButton} >
                    <View >
                        <SendHorizontal color="#fff" size={18} />
                    </View>
                </TouchableOpacity >
            </View>

        </SafeAreaView>

    )
}

export default chatting

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },



    avatarContainer: {
        width: 56,
        height: 56,
        borderRadius: 50,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },

    // left
    leftMessage: {
        borderWidth: 1,
        borderColor: Colors.pink,
        maxWidth: 280,
        alignSelf: 'flex-start',
        padding: 14,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 0,
        backgroundColor: '#505050',
        marginBottom: 20,

    },

    leftMessageText: {
        color: '#fff',
    },

    leftTimeContainer: {
        alignSelf: 'flex-end',
        marginTop: 6,
    },

    leftMessageTime: {
        fontSize: 11,
        color: '#ccc',
    },

    // right
    rightMessage: {
        borderWidth: 1,
        borderColor: Colors.pink,
        maxWidth: 280,
        alignSelf: 'flex-end',
        padding: 14,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 25,
        backgroundColor: '#505050',
        marginBottom: 20,
    },

    rightMessageText: {
        color: '#fff',
    },

    rightTimeContainer: {
        alignSelf: 'flex-end',
        marginTop: 6,
    },

    righMessageTime: {
        fontSize: 11,
        color: '#ccc',
    },


    inputContainer: {
        position: 'relative',
        justifyContent: 'center',
        paddingVertical: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: Colors.pink,
        backgroundColor: '#1f1f1f',
        borderRadius: 30,
        paddingVertical: 21,
        paddingLeft: 20,
        paddingRight: 60, // 👈 space for send button
        color: '#fff',
    },

    sendButton: {
        position: 'absolute',
        right: 8,
        height: 50,
        width: 65,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.pink,
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25
    },

})