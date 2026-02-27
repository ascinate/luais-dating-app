import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <View style={{ width: 114, height: 40 }}>
            <Image source={require('../../assets/images/logo-louis.png')} style={styles.logoImage} />
        </View>
    )
}
export default Logo

const styles = StyleSheet.create({
logoImage:{
    width: '100%',
    height: '100%'
}
})