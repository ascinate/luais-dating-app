import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


import CircleButton from '@/components/ui/CircleButton'
import BackgroundUI from '@/components/ui/BackgroundUI'
import { MapPin, MessageCircleMore, Settings2, TableOfContents } from 'lucide-react-native';
import ToggleButton from '@/components/ui/ToggleButton'
import Paragraph from '@/components/ui/Paragraph'
import CustomText from '@/components/ui/CustomText';
import BottomTabs from '@/components/ui/BottomTabs';
import { router } from 'expo-router'


const nearby = () => {
    return (
        <BackgroundUI>
            <View style={{ margin: 12 }}>
                <View style={styles.header}>
                    <CircleButton Icon={TableOfContents} onPress={() => router.push('/userprofile')} />
                    <ToggleButton />
                    <CircleButton Icon={Settings2} onPress={() => router.push('/match')} />
                </View>



                <Image
                    source={require('../assets/images/map.png')}
                />

                <View style={{ borderWidth: 1, borderColor: '#585858', backgroundColor: '#252525', padding: 20, borderRadius: 25 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View>
                            <Image
                                source={require('../assets/images/profile.jpg')}
                                style={{ width: 60, height: 60, borderRadius: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomText style={styles.profileName}>Aria Bennett,</CustomText>
                                <CustomText style={[styles.profileName, { color: '#FF5F8A' }]}>23</CustomText>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <MapPin color="#fff" size={16} />
                                <Paragraph style={{ marginLeft: 10 }}>USA NEW YORK</Paragraph>
                            </View>

                        </View>
                        <TouchableOpacity>
                            <MessageCircleMore color='#fff' />
                        </TouchableOpacity>


                    </View>
                    <View style={{ flexDirection: 'row', gap: 6, marginTop: 10 }}>
                        <View style={styles.badge}>
                            <Paragraph>2.5km</Paragraph>
                        </View>
                        <View style={styles.badge}>
                            <Paragraph>2.5km</Paragraph>
                        </View>
                        <View style={styles.badge}>
                            <Paragraph>2.5km</Paragraph>
                        </View>
                    </View>


                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <BottomTabs />
                </View>

            </View>

        </BackgroundUI>
    )
}
export default nearby;


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 25
    },
    profileName: {
        fontSize: 20,
        color: '#fff'
    },
    badge: {
        backgroundColor: '#373737',
        width: 78,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
})