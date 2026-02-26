import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import ThemeButton from '@/components/ui/ThemeButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import Badge from '@/components/ui/Badge'
import { Video } from 'expo-av'
import { Music, Sparkles } from 'lucide-react-native'
import { router } from 'expo-router'
import { Image } from 'react-native'
import { Colors } from '@/constants/theme'
const match = () => {
    return (
        <BackgroundUI>
            <View style={{ padding: 12 }}>
                <View style={{padding: 12}}>
                    <View style={[styles.videoContainer]}>
                        <Paragraph style={{ textTransform: 'uppercase', marginBottom: 12 }}>
                            Based on your answers
                        </Paragraph>

                        <View style={{ width: 100, height: 100 }}>
                            <Image source={require('../assets/images/profile.jpg')} style={styles.avatar} />
                        </View>
                        <Paragraph style={{ textTransform: 'uppercase', color: Colors.pink, marginVertical: 10 }}>You are</Paragraph>
                        <Paragraph style={{ textTransform: 'uppercase', color: '#fff', fontSize: 30 }}>Bold Romatic</Paragraph>

                        <View style={{ flexDirection: 'row', gap: 8, marginVertical: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Badge text="🧘‍♀️ Emotionally deep" />
                            <Badge text="🎵 Music-driven" />
                            <Badge text="🎨 Values real connection" />
                        </View>

                        <Paragraph style={{ textAlign: 'center', marginTop: 20 }}>You fall for energy, not just looks.</Paragraph>
                        <Paragraph style={{ textAlign: 'center', marginTop: 10 }}> You're drawn to people who feel real, expressive, and emotionally alive.</Paragraph>



                    </View>
                </View>
                <ThemeButton text="Send a Message" onPress={() => router.push('/notification')} />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.touchable}
                    onPress={() => router.push('/chat')}

                >
                    <View style={styles.continueBtn}>
                        <Text style={[styles.continueTxt]}>
                            Keep Swiping
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 20 }}>


                </View>
            </View>
        </BackgroundUI>
    )
}

export default match



const styles = StyleSheet.create({

    videoContainer: {
        width: '100%',
        height: 500,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },


    continueBtn: {
        borderRadius: 12,
        width: '100%',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#FF5F8A',
        padding: 17,
        alignItems: 'center'
    },

    continueTxt: {
        color: '#fff',
        fontSize: 14,
    },

    bottomText: {
        borderRadius: 12,
        width: '100%',
        marginVertical: 21,
        overflow: 'hidden',
        padding: 17,
        alignItems: 'center'
    },
    avatar: {
        width: '100%',
        height: '100%'
        ,
        borderRadius: 50
    }

})