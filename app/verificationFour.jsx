import { View, StyleSheet } from 'react-native'
import React from 'react'
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { router } from 'expo-router'
import { ShieldUser, TableOfContents } from 'lucide-react-native'

const VerificationFour = () => {
    return (
        <BackgroundUI>
            <View style={{ flex: 1 }}>

    
                <View style={styles.header}>
                    <CircleButton
                        Icon={TableOfContents}
                        onPress={() => router.back()}
                    />
                    <HeadingH2 style={styles.headerTitle}>
                        Verification
                    </HeadingH2>
                    <View style={{ width: 40 }} />
                </View>

      
                <View style={styles.centerContainer}>

         
                    <View style={styles.iconBox} >
                        <ShieldUser size={45}/>
                    </View>

                    <Paragraph style={styles.title}>
                        WE'RE VERIFYING{"\n"}YOUR IDENTITY
                    </Paragraph>

               
                    <Paragraph style={styles.subtitle}>
                        It should take about 24–48 hours. We’ll let
                        {"\n"}
                        you know once it’s complete.
                    </Paragraph>

                </View>

            </View>
        </BackgroundUI>
    )
}

export default VerificationFour

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 10,
    },

    headerTitle: {
        color: '#fff',
    },

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    iconBox: {
        width: 100,
        height: 100,
        backgroundColor: '#cfcfcf',
        marginBottom: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 28,
    },

    subtitle: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },

})