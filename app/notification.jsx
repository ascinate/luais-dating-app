import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'





// component
import BackgroundUI from '@/components/ui/BackgroundUI'
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import CustomText from '@/components/ui/CustomText'
import Paragraph from '@/components/ui/Paragraph'
import ThemeButton from '@/components/ui/ThemeButton'
import { Eye, Flame, Heart, MessageSquareMore, TableOfContents } from 'lucide-react-native'
import { Colors } from '@/constants/theme'
import BottomTabs from '../components/ui/BottomTabs'



const notification = () => {
    return (
        <BackgroundUI>
            <ScrollView style={{ padding: 12 }}>
                {/* heder */}
                <View style={styles.header}>
                    <CircleButton Icon={TableOfContents} onPress={() => router.push('/userprofile')} />
                    <HeadingH2>Notification</HeadingH2>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderWidth: 1, borderColor: '#3E3E3E', padding: 20, borderRadius: 12, backgroundColor: '#000' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
                        <View style={styles.iconContainer}>
                            <Flame color={'#F3DEB1'} />
                        </View>
                        <View>
                            <Paragraph style={{ fontSize: 16 }}>New Match!</Paragraph>
                            <Paragraph style={{ color: Colors.lightGray, marginVertical: 6 }}>You and Alex liked each other</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: '#F3DEB1' }}>View Details</Paragraph>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Paragraph>2m ago</Paragraph>
                </View>




                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderWidth: 1, borderColor: '#3E3E3E', padding: 20, borderRadius: 12, backgroundColor: '#000' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
                        <View style={styles.iconContainer}>
                            <Heart color={'#F3DEB1'} />
                        </View>
                        <View>
                            <Paragraph style={{ fontSize: 16 }}>New Match!</Paragraph>
                            <Paragraph style={{ color: Colors.lightGray, marginVertical: 6 }}>You and Alex liked each other</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: '#F3DEB1' }}>View Details</Paragraph>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Paragraph>2m ago</Paragraph>
                </View>




                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderWidth: 1, borderColor: '#3E3E3E', padding: 20, borderRadius: 12, backgroundColor: '#000' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
                        <View style={styles.iconContainer}>
                            <Eye color={'#F3DEB1'} />
                        </View>
                        <View>
                            <Paragraph style={{ fontSize: 16 }}>New Match!</Paragraph>
                            <Paragraph style={{ color: Colors.lightGray, marginVertical: 6 }}>You and Alex liked each other</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: '#F3DEB1' }}>View Details</Paragraph>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Paragraph>2m ago</Paragraph>
                </View>




                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderWidth: 1, borderColor: '#3E3E3E', padding: 20, borderRadius: 12, backgroundColor: '#000' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12 }}>
                        <View style={styles.iconContainer}>

                            <MessageSquareMore color={'#F3DEB1'} />
                        </View>
                        <View>
                            <Paragraph style={{ fontSize: 16 }}>New Match!</Paragraph>
                            <Paragraph style={{ color: Colors.lightGray, marginVertical: 6 }}>You and Alex liked each other</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: '#F3DEB1' }}>View Details</Paragraph>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Paragraph>2m ago</Paragraph>
                </View>


                <View style={{alignItems: 'center',marginTop: 100}}>
                    <BottomTabs />
                </View>
            </ScrollView>
        </BackgroundUI>
    )
}

export default notification


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        gap: 16,
        borderRadius: 25,

    },
    iconContainer: {
        backgroundColor: '#f3deb11f',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    }
})