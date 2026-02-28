import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CircleButton from '@/components/ui/CircleButton'
import HeadingH2 from '@/components/ui/HeadingH2'
import Paragraph from '@/components/ui/Paragraph'
import BackgroundUI from '@/components/ui/BackgroundUI'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Colors } from '@/constants/theme'
import { router } from 'expo-router'
import { Scroll, TableOfContents } from 'lucide-react-native'
import { Switch } from 'react-native'

const { width } = Dimensions.get('window');

const discoveryPreferences = () => {

    const [values, setValues] = useState([5, 50]);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <BackgroundUI>
            <ScrollView style={{ padding: 12 }}>
                {/* Header */}
                <View style={styles.header}>
                    <CircleButton
                        Icon={TableOfContents}
                        onPress={() => router.push('/verification')}
                    />
                    <HeadingH2 style={{ marginLeft: 14, width: "70%" }}>
                        Discovery Preferences
                    </HeadingH2>
                    <View style={{ width: 40 }} />
                </View>

                {/* Slider Section */}
                <View style={{ marginTop: 50 }}>

                    <View style={styles.sliderRow}>
                        <Paragraph style={styles.label}>
                            DISTANCE
                        </Paragraph>

                        <Paragraph style={styles.value}>
                            {values[0]} KM - {values[1]} KM
                        </Paragraph>
                    </View>

                    <MultiSlider
                        values={values}
                        min={0}
                        max={100}
                        step={1}
                        onValuesChange={(val) => setValues(val)}
                        sliderLength={width - 32}
                        selectedStyle={{ backgroundColor: '#D4AF37' }}
                        unselectedStyle={{ backgroundColor: '#6E6E6E' }}
                        trackStyle={styles.track}
                        markerStyle={styles.marker}
                    />

                </View>


                <View >

                    <View style={styles.sliderRow}>
                        <Paragraph style={styles.label}>
                            Age Range
                        </Paragraph>

                        <Paragraph style={styles.value}>
                            {values[0]} KM - {values[1]} KM
                        </Paragraph>
                    </View>

                    <MultiSlider
                        values={values}
                        min={0}
                        max={100}
                        step={1}
                        onValuesChange={(val) => setValues(val)}
                        sliderLength={width - 32}
                        selectedStyle={{ backgroundColor: '#D4AF37' }}
                        unselectedStyle={{ backgroundColor: '#6E6E6E' }}
                        trackStyle={styles.track}
                        markerStyle={styles.marker}
                    />

                </View>



                <View style={{ height: 1, backgroundColor: Colors.lightGray, marginVertical: 30 }} />

                <View style={{ marginBottom: 30 }}>
                    <Paragraph style={{ color: Colors.lightGray, marginBottom: 12 }}>Who You Want to See</Paragraph>
                    <View style={styles.optionsWrapper}>

                        <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                            <Paragraph style={styles.selectedText}>
                                MAN
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                WOMAN
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                EVERYONE
                            </Paragraph>
                        </TouchableOpacity>


                    </View>
                </View>

                <View style={{ marginBottom: 30 }}>
                    <Paragraph style={{ color: Colors.lightGray, marginBottom: 12 }}>Who You Want to See</Paragraph>
                    <View style={styles.optionsWrapper}>

                        <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                            <Paragraph style={styles.selectedText}>
                                Verified Profiles
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Profile Video
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Complete Profile
                            </Paragraph>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Recently Active
                            </Paragraph>
                        </TouchableOpacity>





                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Paragraph style={{ color: Colors.lightGray }}>Hide Incomplete Profiles</Paragraph>
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

                <View style={{ height: 1, backgroundColor: Colors.lightGray, marginBottom: 30 }} />

                {/* Slider Section */}
                <View >

                    <View style={styles.sliderRow}>
                        <Paragraph style={styles.label}>
                            Height Preference
                        </Paragraph>

                        <Paragraph style={styles.value}>
                            {values[0]} KM - {values[1]} KM
                        </Paragraph>
                    </View>

                    <MultiSlider
                        values={values}
                        min={0}
                        max={100}
                        step={1}
                        onValuesChange={(val) => setValues(val)}
                        sliderLength={width - 32}
                        selectedStyle={{ backgroundColor: '#D4AF37' }}
                        unselectedStyle={{ backgroundColor: '#6E6E6E' }}
                        trackStyle={styles.track}
                        markerStyle={styles.marker}
                    />

                </View>
                <View style={{ marginBottom: 30 }}>
                    <Paragraph style={{ color: Colors.lightGray, marginBottom: 12 }}>Relationship Intent</Paragraph>
                    <View style={styles.optionsWrapper}>

                        <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                            <Paragraph style={styles.selectedText}>
                                Long-term
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Short-term
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Dating
                            </Paragraph>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Casual
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Friends First
                            </Paragraph>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Marriage-minded
                            </Paragraph>
                        </TouchableOpacity>


                    </View>

                </View>


                <View style={{ marginBottom: 30 }}>
                    <Paragraph style={{ color: Colors.lightGray, marginBottom: 12 }}>Religion/Faith</Paragraph>
                    <View style={styles.optionsWrapper}>

                        <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                            <Paragraph style={styles.selectedText}>
                                Everyone
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Christian
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Muslim
                            </Paragraph>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Paragraph style={styles.optionText}>
                                Hindu
                            </Paragraph>
                        </TouchableOpacity>




                    </View>

                </View>
            </ScrollView>
        </BackgroundUI>
    )
}

export default discoveryPreferences

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',


        paddingTop: 10,
    },



    sliderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    label: {
        color: Colors.lightGray,
        letterSpacing: 1,
    },

    value: {
        color: Colors.lightGray,
    },

    track: {
        height: 4,
        borderRadius: 4,
    },

    marker: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 3,
        borderColor: '#D4AF37',
        backgroundColor: '#111',
    },

    optionsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    optionButton: {
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 12,
    },

    selectedText: {
        color: '#F3DEB1',
        fontSize: 12,
    },

    selectedOption: {
        borderColor: '#F3DEB1',
        backgroundColor: '#f3deb113',

    },

    optionText: {
        color: '#ccc',
        fontSize: 12,
    },
})