import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowLeft, MoreVertical, MapPin, Grid, CreditCard, User, TableOfContents, ChevronLeft } from 'lucide-react-native'
import { Video } from 'expo-av'
import { Background } from '@react-navigation/elements'

import { router } from 'expo-router'
import CircleButton from '@/components/ui/CircleButton'

import BackgroundUI from '@/components/ui/BackgroundUI'
export default function Profile() {
    return (
        <BackgroundUI>  <View style={styles.container}>

            {/* MEDIA */}
            <View style={styles.mediaWrapper}>
                <Video
                    source={require('../assets/video/landing.mp4')}
                    style={styles.video}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    isMuted
                />

                {/* DARK GRADIENT */}
                <LinearGradient
                    colors={['rgba(0,0,0,0.6)', 'transparent']}
                    style={styles.topGradient}
                />

                {/* HEADER */}
                <View style={styles.header}>
                    <CircleButton Icon={ChevronLeft} onPress={() => router.back()} />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.name}>
                            SUSAN, <Text style={{ color: '#ff5fa2' }}>23</Text> 💙
                        </Text>
                        <View style={styles.locationRow}>
                            <MapPin size={12} color="#fff" />
                            <Text style={styles.location}>USA, NEW YORK</Text>
                        </View>
                    </View>

                    <CircleButton Icon={TableOfContents} onPress={() => router.push('/userprofile')} />
                </View>

                {/* STATS */}
                <View style={styles.statsRow}>
                    <View style={styles.stat}><Text style={styles.statText}>📍 2.5 KM</Text></View>
                    <View style={styles.stat}><Text style={styles.statText}>⚖️ 55 KG</Text></View>
                    <View style={styles.stat}><Text style={styles.statText}>📏 178 CM</Text></View>
                </View>
            </View>

            {/* MINI TABS */}
            <View style={styles.miniTabs}>
                <Grid color="#ff5fa2" />
                <CreditCard color="#777" />
                <User color="#777" />
            </View>

            {/* MESSAGE BUTTON */}
            <LinearGradient
                colors={['#ff5fa2', '#7b4dff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.messageBtn}
            >
                <Text style={styles.messageText}>MESSAGE</Text>
            </LinearGradient>

        </View>
        </BackgroundUI>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    mediaWrapper: {
        height: 520,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
    },

    video: {
        width: '100%',
        height: '100%',
    },

    topGradient: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 160,
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

    circle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },

    locationRow: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
        marginTop: 2,
    },

    location: {
        color: '#fff',
        fontSize: 12,
    },

    statsRow: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 10,
    },

    stat: {
        borderWidth: 1,
        borderColor: '#ff5fa2',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
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