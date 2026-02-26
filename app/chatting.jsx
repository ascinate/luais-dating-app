import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native'
import React from 'react'


//chating
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import BackgroundUI from '@/components/ui/BackgroundUI'
import { StyleSheet } from 'react-native'
import { ArrowLeft, EllipsisVertical, Search, Phone } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'




const chatting = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#1a1a1a',padding: 12 }}>


                {/* HEADER */}
                <View style={styles.header}>



                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <TouchableOpacity>
                            <ArrowLeft color={'#fff'} />
                        </TouchableOpacity>
                        <View style={styles.avatarContainer}>
                            <Image source={require('../assets/images/profile.jpg')} style={styles.avatar} />
                        </View>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Name</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <CircleButton Icon={Phone} onPress={() => router.push('/nearby')} />
                        <CircleButton Icon={EllipsisVertical} onPress={() => router.push('/nearby')} />

                    </View>
                </View>
            </ScrollView>
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
    }
})