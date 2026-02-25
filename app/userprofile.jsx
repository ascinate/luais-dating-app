import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MapPin, Grid, CreditCard, User, TableOfContents, ChevronLeft } from 'lucide-react-native'
import { Video } from 'expo-av'
import { router } from 'expo-router'

import CircleButton from '@/components/ui/CircleButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import ThemeButton from '@/components/ui/ThemeButton'
export default function Profile() {
    return (
        <BackgroundUI>

            <View style={styles.container}>

                {/* MEDIA */}
                <View style={styles.mediaWrapper}>
                    <View style={styles.displayVideo}>
                        <Video
                            source={require('../assets/video/videos-main.mp4')}
                            style={styles.video}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            isMuted
                        />
                    </View>



                    <View style={styles.header}>
                        <CircleButton Icon={ChevronLeft} onPress={() => router.back()} />

                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Paragraph style={styles.name}>SUSAN,</Paragraph>
                                <Paragraph style={{ color: '#ff5fa2', marginLeft: 4 }}>23</Paragraph>
                            </View>

                            <View style={styles.locationRow}>
                                <MapPin size={12} color="#fff" />
                                <Paragraph style={styles.location}>USA, NEW YORK</Paragraph>
                            </View>
                        </View>

                        <CircleButton Icon={TableOfContents} onPress={() => { }} />
                    </View>

                    {/* STATS */}
                    <View style={styles.statsRow}>
                        <View style={styles.stat}>
                            <Paragraph style={styles.statText}>2.5 KM</Paragraph>
                        </View>
                        <View style={styles.stat}>
                            <Paragraph style={styles.statText}>55 KG</Paragraph>
                        </View>
                        <View style={styles.stat}>
                            <Paragraph style={styles.statText}> 178 CM</Paragraph>
                        </View>
                    </View>

                </View>

                {/* MINI TABS */}
                <View style={styles.miniTabs}>
                    <Grid color="#ff5fa2" />
                    <CreditCard color="#777" />
                    <User color="#777" />
                </View>

                <ThemeButton text="Message" onPress={() => router.push('/explore')} />

            </View>

        </BackgroundUI>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },

    mediaWrapper: {
        height: 520,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
    },
    displayVideo: {
        width: '400',
        height: '700',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
    },
    video: {
        width: '100%',
        height: '100%',
    },



    header: {
        position: 'absolute',
        top: 40,
        left: 15,
        right: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },

    location: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 4,
    },

    statsRow: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },

    stat: {
        borderWidth: 1,
        borderColor: '#ff5fa2',
        borderRadius: 25,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginHorizontal: 5,
    },

    statText: {
        color: '#fff',
        fontSize: 11,
    },

    miniTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },

    messageBtn: {
        marginHorizontal: 20,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    messageText: {
        color: '#fff',
        fontWeight: '700',
        letterSpacing: 1,
    },
})