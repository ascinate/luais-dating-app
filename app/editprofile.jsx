import { View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { Settings2, Sparkles, TableOfContents, Upload, Video } from 'lucide-react-native'


// component
import BackgroundUI from '@/components/ui/BackgroundUI'
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import CustomText from '@/components/ui/CustomText'
import Paragraph from '@/components/ui/Paragraph'
import ThemeButton from '@/components/ui/ThemeButton'
import BottomTabs from '@/components/ui/BottomTabs'
import { router } from 'expo-router';


import { Colors } from '@/constants/theme'
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

                    {/* Top*/}
                    <View style={styles.videoTop}>
                        <View style={styles.iconCircle}>
                            <Video size={28} color="#9C4DCC" />

                        </View>

                        <Paragraph style={styles.videoTitle}>ADD YOUR VIDEO PROFILE</Paragraph>
                        <Paragraph style={styles.videoSubtitle}>
                            RECORD OR UPLOAD A 10-SECOND VIDEO.
                        </Paragraph>
                    </View>

                    {/* Bottom */}
                    <View style={styles.videoBottom}>

                        <ThemeButton
                            text="RECORD VIDEO"
                            icon={<Video size={18} color="#fff" />}
                            iconPosition="left"
                      onPress={() => router.push('/editprofilevideoupload')}
                        />



                        <View style={styles.uploadButton}>
                            <Upload size={18} color="#999" />
                            <Paragraph style={styles.uploadText}>  UPLOAD FROM GALLERY</Paragraph>
                        </View>

                        <Paragraph style={styles.tipText}>
                            BEST IN GOOD LIGHTING · PORTRAIT · 10 SECONDS
                        </Paragraph>

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



                </View>


<View style={{alignItems: 'center',marginTop:20}}>
    <BottomTabs/>
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

    videoCard: {
        marginTop: 20,
        borderRadius: 25,
        overflow: 'hidden',
        backgroundColor: '#E5E5E5'
    },

    videoTop: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#B14FFF' // purple (you can change)
    },

    iconCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    videoTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    videoSubtitle: {
        color: '#E6D9F5',
        marginTop: 8,
        textAlign: 'center'
    },

    videoBottom: {
        padding: 20,
        alignItems: 'center'
    },

    recordButton: {
        backgroundColor: '#F65D8F',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 18,
        alignItems: 'center',
        marginBottom: 15
    },

    recordText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    uploadButton: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    uploadText: {
        color: '#999',
        fontWeight: '500'
    },

    tipText: {
        color: '#BDBDBD',
        fontSize: 12,
        textAlign: 'center'
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