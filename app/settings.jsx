import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { BadgeQuestionMark, BookHeart, ChessQueen, ChevronRight, CirclePause, CircleUserRound, Compass, GlobeLock, Heart, Lock, MapPin, Maximize2, MessageCircleWarning, MessageSquareMore, Navigation, Pause, ReceiptText, TableOfContents, Trash2, UserLock } from 'lucide-react-native'

// components
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import BackgroundUI from '@/components/ui/BackgroundUI'
import Paragraph from '@/components/ui/Paragraph'
import { Colors } from '@/constants/theme'
import { Switch } from 'react-native'

const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <BackgroundUI>


            {/* header */}
            <View style={styles.header}>
                <CircleButton
                    Icon={TableOfContents}
                    onPress={() => router.back()}
                />

                <HeadingH2 style={styles.title}>
                    Settings
                </HeadingH2>

                <View style={{ width: 40 }} />
            </View>



            <ScrollView style={{ paddingHorizontal: 12, paddingBottom: 50 }}>


                {/* category */}
                <View>
                    <Paragraph style={{ color: Colors.lightGray, paddingBottom: 18 }}>Account Controls</Paragraph>
                    {/* row */}
                    <View style={styles.manuRow}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <CirclePause color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Pause Account</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <ChessQueen color="#F3DEB1" style={{ marginRight: 12 }} />

                            <Switch
                                style={{ margin: 0, padding: 0 }}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Trash2 color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Delete Account</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>


                </View>


                {/* category */}
                <View>
                    <Paragraph style={{ color: Colors.lightGray, paddingBottom: 18 }}>Privacy & Discovery</Paragraph>

                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Compass color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Discovery Preferences</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>









                    {/* row */}
                    <View style={styles.manuRow}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>

                            <Navigation color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Show Me On Nearby</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <ChessQueen color="#F3DEB1" style={{ marginRight: 12 }} />

                            <Switch
                                style={{ margin: 0, padding: 0 }}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>



                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <CircleUserRound color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Profile Visibility</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>


                </View>



                {/* category */}
                <View>
                    <Paragraph style={{ color: Colors.lightGray, paddingBottom: 18 }}>Location</Paragraph>
                    {/* row */}
                    <View style={styles.manuRowSwtich}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MapPin color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Location Access</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>


                            <Switch
                                style={{ margin: 0, padding: 0 }}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    {/* row */}

                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>

                            <Maximize2 color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Distance Unit</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Paragraph>Kilometers</Paragraph>
                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>


                </View>







                {/* category */}
                <View>
                    <Paragraph style={{ color: Colors.lightGray, paddingBottom: 18 }}>Notifications</Paragraph>
                    {/* row */}
                    <View style={styles.manuRowSwtich}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <BookHeart color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>New Matches</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>


                            <Switch
                                style={{ margin: 0, padding: 0 }}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    {/* row */}
                    <View style={styles.manuRowSwtich}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MessageSquareMore color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Messages</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>


                            <Switch
                                style={{ margin: 0, padding: 0 }}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    {/* row */}
                    <View style={styles.manuRowSwtich}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Heart color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Likes</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>


                            <Switch
                                style={{ margin: 0, padding: 0 }}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>



                </View>




                {/* category */}
                <View>
                    <Paragraph style={{ color: Colors.lightGray, paddingBottom: 18 }}>Security</Paragraph>


                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Lock color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Change Password</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>

                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <UserLock color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Two-Step Verification</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Paragraph>turned OFF</Paragraph>
                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>

                </View>





                {/* category */}
                <View>
                    <Paragraph style={{ color: Colors.lightGray, paddingBottom: 18 }}>Support</Paragraph>


                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <BadgeQuestionMark color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Help & Support</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>


                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MessageCircleWarning color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Report a Problem</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>

                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <GlobeLock color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Privacy Policy</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>

                    {/* row */}
                    <View style={styles.manuRowTwo}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <ReceiptText color="#ffffff" />
                            <Paragraph style={{ color: '#fff', fontSize: 16 }}>Terms of Service</Paragraph>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <ChevronRight color="#ffffff" />

                        </View>
                    </View>

                </View>






            </ScrollView>
        </BackgroundUI>
    )
}

export default Settings

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    title: {
        textAlign: 'center',
    },


    manuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#F3DEB1",
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 12,

    },
    manuRowTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#585858",
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 12,
    },
    manuRowSwtich: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#585858",
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 12,
    },
})