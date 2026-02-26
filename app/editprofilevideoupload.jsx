import { View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Settings2, Sparkles, TableOfContents, Upload, Video } from 'lucide-react-native'


// component
import BackgroundUI from '@/components/ui/BackgroundUI'
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import CustomText from '@/components/ui/CustomText'
import Paragraph from '@/components/ui/Paragraph'
import ThemeButton from '@/components/ui/ThemeButton'

import { Colors } from '@/constants/theme'

import { router } from 'expo-router';

import { LinearGradient } from 'expo-linear-gradient'
import Badge from '../components/ui/Badge'

const editprofile = () => {
    return (
        <BackgroundUI>
            <ScrollView style={{ paddingHorizontal: 12, paddingBottom: 100, }}>

                {/* heder */}
                <View style={styles.header}>
                    <CircleButton Icon={TableOfContents} onPress={() => router.push('/userprofile')} />
                    <HeadingH2>Edit Profile</HeadingH2>
                </View>

                <View>
                    <CustomText style={{ fontSize: 18, color: '#fff', marginTop: 30, marginButton: 8 }}>Video Profile</CustomText>
                    <Paragraph style={{ color: '#C4C1C1' }}>Add a short video so people can feel your vibe.</Paragraph>
                </View>



                <View style={styles.videoCard}>

                    {/* Video Preview Area */}
                    <View style={styles.videoPreview}>

                        {/* Bottom Gradient Overlay */}
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                            style={styles.bottomOverlay}
                        >
                            <TouchableNativeFeedback onPress={() => router.push('/matches')}>
                                <View style={styles.actionRow}>
                                    {/* Replace Button */}
                                    <View
                                        style={styles.replaceBtn}
                                    >
                                        <Paragraph style={styles.replaceText}>
                                            REPLACE
                                        </Paragraph>
                                    </View>

                                    {/* Remove Button */}
                                    <View style={styles.removeBtn}>
                                        <Paragraph style={styles.removeText}>
                                            REMOVE
                                        </Paragraph>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>


                            <Paragraph style={styles.videoInfo}>
                                THIS VIDEO WILL APPEAR ON YOUR PROFILE AND SWIPE CARDS.
                            </Paragraph>

                        </LinearGradient>

                    </View>
                </View>






                <View>
                    <Paragraph style={{ marginTop: 40 }}>PROFILE INFO</Paragraph>

                    <View style={{ marginTop: 30 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>your name</Paragraph>
                        <TextInput style={styles.input} placeholder='e.g. noah@gmail.com' placeholderTextColor={'#ABABAB'} />
                    </View>


                    <View style={{ marginTop: 30 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>date of birth</Paragraph>
                        <TextInput style={styles.input} placeholder='07/05/2026' placeholderTextColor={'#ABABAB'} />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>location</Paragraph>
                        <TextInput style={styles.input} placeholder='Search location' placeholderTextColor={'#ABABAB'} />
                    </View>


                    <View style={{ marginTop: 30 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>ABOUT ME</Paragraph>
                        <TextInput
                            style={styles.textArea}
                            placeholder="I'm a social, easygoing person who loves exploring new places, meeting interesting people, and enjoying moments that turn into memories. I love food, travel, and conversation..."
                            placeholderTextColor="#ABABAB"
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                        />
                        <TouchableOpacity activeOpacity={0.8}>
                            <LinearGradient
                                colors={['#37D5D6', '#7B5CFF', '#F6B56B']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.aiGradientBorder}
                            >
                                <View style={styles.aiInner}>
                                    <Sparkles size={18} color="#FFFFFF" />
                                    <Paragraph style={styles.aiText}>
                                        Write with AI
                                    </Paragraph>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>



                    <View style={{ marginTop: 8 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>Who I’m Looking For</Paragraph>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Someone kind, curious, emotionally ope..."
                            placeholderTextColor="#ABABAB"
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                        />
                        <TouchableOpacity activeOpacity={0.8}>
                            <LinearGradient
                                colors={['#37D5D6', '#7B5CFF', '#F6B56B']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.aiGradientBorder}
                            >
                                <View style={styles.aiInner}>
                                    <Sparkles size={18} color="#FFFFFF" />
                                    <Paragraph style={styles.aiText}>
                                        Write with AI
                                    </Paragraph>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 8 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>Interests</Paragraph>
                        <TextInput style={styles.input} placeholder='Select Interests' placeholderTextColor={'#ABABAB'} />
                    </View>



                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                        <Badge text="📸 Photography" />
                        <Badge text="✈️ Travel & Exploring" />
                        <Badge text="🧘‍♀️ Wellness & Mindfulness" />
                        <Badge text="🎨 Art & Creativity" />
                        <Badge text="🧘‍♀️ Wellness & Mindfulness" />
                    </View>



                    <View style={{ marginTop: 20 }}>
                        <Paragraph style={{ textTransform: 'uppercase' }}>Personality Tag</Paragraph>
                        <TextInput style={styles.input} placeholder='bold romantic' placeholderTextColor={'#ABABAB'} />
                        <TouchableOpacity style={styles.retakeWrapper} activeOpacity={0.8}>
                            <LinearGradient
                                colors={['#F65D8F', '#633DE2']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.retakeButton}
                            >
                                <Paragraph style={styles.retakeText}>
                                    Re-take personality questions
                                </Paragraph>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>


                    <ThemeButton
                        text="SAVE"
                        onPress={() => { }}
                    />
                </View>



            </ScrollView>
        </BackgroundUI>
    )
}

export default editprofile

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        gap: 16,
        borderRadius: 25,

    },
    // video Card
    videoCard: {
        marginTop: 20,
        borderRadius: 25,
        overflow: 'hidden',
    },

    videoPreview: {
        height: 450,
        backgroundColor: '#CFCFCF', // temporary preview background
        justifyContent: 'flex-end',
    },

    bottomOverlay: {
        padding: 20,
    },

    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    replaceBtn: {
        backgroundColor: Colors.pink,
        flex: 1,
        marginRight: 10,
        paddingVertical: 14,
        borderRadius: 15,
        alignItems: 'center',
    },

    replaceText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },

    removeBtn: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 14,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
    },

    removeText: {
        color: '#333',
        fontWeight: '600',
        fontSize: 14,
    },

    videoInfo: {
        textAlign: 'center',
        fontSize: 12,
        color: '#E0E0E0',
    },


    // form

    input: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ABABAB',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 10,
        color: Colors.lightGray,
    },

    label: {
        textTransform: 'uppercase',
        marginBottom: 10,
        color: '#C4C1C1',
        letterSpacing: 1,
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

    // ai button

    aiGradientBorder: {
        borderRadius: 30,
        padding: 2,
        alignSelf: 'flex-end',
        marginTop: 20,
    },

    aiInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#111',
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 30,
    },

    aiText: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontWeight: '600',
        letterSpacing: 1,
    },
    badge: {
        backgroundColor: '#373737',
        width: 78,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    retakeWrapper: {
        position: 'absolute',
        right: 15,
        bottom: 15,
    },

    retakeButton: {
        paddingVertical: 2,
        paddingHorizontal: 12,
        borderRadius: 50,
    },

    retakeText: {
        color: '#fff',
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: 0.5,
    },

})