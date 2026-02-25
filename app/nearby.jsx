import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


import CircleButton from '@/components/ui/CircleButton'
import { Settings2, TableOfContents } from 'lucide-react-native';


const nearby = () => {
    return (
        <SafeAreaView>

            <View style={styles.header}>
                <CircleButton Icon={TableOfContents} onPress={() => router.push('/userprofile')} />
           
                <CircleButton Icon={Settings2} />
            </View>


            <View>
                <Text>nearby</Text>
            </View>
        </SafeAreaView>
    )
}

export default nearby;


const styles = StyleSheet.create({

})