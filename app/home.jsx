import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import { Bookmark, BookmarkCheck, Navigation, Settings2, TableOfContents } from 'lucide-react-native'
import { router } from 'expo-router'
// Components
import BackgroundUI from '@/components/ui/BackgroundUI'
import CircleButton from '@/components/ui/CircleButton'
import ToggleButton from '@/components/ui/ToggleButton'
import LikeDislikeButton from '@/components/ui/LikeDislikeButton'
import BottomTabs from '@/components/ui/BottomTabs'

const Home = () => {
    return (
        <BackgroundUI>

            <View style={styles.header}>
                <CircleButton Icon={TableOfContents} onPress={() => router.push('/userprofile')} />
                <ToggleButton />
                <CircleButton Icon={Settings2} />
            </View>

            <View
                style={{
                    position: 'absolute',
                    top: 135,
                    width: '70%',
                    height: 50,
                    backgroundColor: '#2D2D2D',
                    borderRadius: 25,
                    paddingVertical: 20,

                    alignSelf: 'center',
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 155,
                    width: '85%',
                    height: 50,
                    backgroundColor: '#2D2D2D',
                    borderRadius: 25,
                    paddingVertical: 20,

                    alignSelf: 'center',
                }}
            />
            <View style={styles.stack}>

                <View style={styles.profileContainer}>

                    <Video
                        source={require('../assets/video/landing.mp4')}
                        style={styles.video}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        isMuted
                    />

                    <View style={styles.chips}>

                        <View style={styles.chip}>
                            <View style={styles.dot} />
                            <Text style={styles.chipText}>ONLINE</Text>
                        </View>

                        <View style={styles.chip}>
                            <Text style={styles.chipText}>🎵 82% MUSIC COMPATIBILITY</Text>
                        </View>

                    </View>


                    <View style={styles.info}>
                        <Text style={styles.name}>
                            SUSAN, <Text style={{ color: '#ff5fa2' }}>23</Text>
                        </Text>

                        <Text style={styles.location}>USA, NEW YORK</Text>
                    </View>


                    <TouchableOpacity >
                        <View style={{ position: 'absolute', bottom: 25, right: 20, borderWidth: 1, borderColor: '#ffff', borderRadius: 30, padding: 8, backgroundColor: '#33333367' }}>
                            <Bookmark color='#fff' />
                        </View>
                    </TouchableOpacity>

                </View>

                <LikeDislikeButton />

            </View>


            <View alignItems="center" style={{ marginTop: 80 }}>
                <BottomTabs />
            </View>


        </BackgroundUI>
    )
}

export default Home

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },

    stack: {
        marginTop: 40,
        alignItems: 'center',
        height: 600,
        backgroundColor: '#2D2D2D',
        marginHorizontal: 10,
        borderRadius: 25,
        paddingVertical: 20,
    },

    profileContainer: {
        marginBottom: 10,
        width: '90%',
        height: 480,
        borderRadius: 25,
        overflow: 'hidden',
        // backgroundColor: '#b13b3b',
    },

    video: {
        width: '100%',
        height: '100%',
    },

    chips: {
        position: 'absolute',
        top: 15,
        left: 15,
        right: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    chip: {
        flexDirection: 'row',
        backgroundColor: '#333',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignItems: 'center',
        gap: 6,
    },

    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#ffd28a',
    },

    chipText: {
        color: '#fff',
        fontSize: 11,
    },

    info: {
        position: 'absolute',
        bottom: 25,
        left: 20,
    },

    name: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    },

    location: {
        color: '#ccc',
        marginTop: 4,

    },
})