import Paragraph from '@/components/ui/Paragraph';
import ThemeButton from '@/components/ui/ThemeButton';
import { LinearGradient } from "expo-linear-gradient";
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Plans = () => {

    const [selectedPlan, setSelectedPlan] = useState("monthly");

    return (
        <SafeAreaView style={styles.fullsignup} edges={['top', 'bottom']}>

            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 30, paddingTop: 20, paddingHorizontal: 20, width: "100%", zIndex: 2, alignItems: "center" }}>
                <Image
                    source={require('../assets/images/roundarows.png')}
                    style={{ width: 40, height: 40, position: "absolute", left: 12 }}
                />
                <Paragraph style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                    Choose Your Plan
                </Paragraph>
            </View>

            {/* Background */}
            <Image
                source={require('../assets/images/bgcpl.png')}
                style={styles.bg}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                <View style={styles.topsdiv}>
                    <Image
                        source={require('../assets/images/prime-logo.png')}
                        style={styles.pricme}
                    />
                    <Paragraph style={styles.subtitleText}>
                        Want to shine? Go Premium & get noticed faster!
                    </Paragraph>
                </View>

                <View style={styles.container}>

                    {/* MONTHLY (ACTIVE) */}
                    <PlanCard
                        selected={selectedPlan === "monthly"}
                        onPress={() => setSelectedPlan("monthly")}
                        title="MONTHLY"
                        subtitle="ESSENTIAL"
                        price="$9.99"
                        duration="PER Month"
                        active
                    />

                    {/* QUARTERLY */}
                    <PlanCard
                        selected={selectedPlan === "quarterly"}
                        onPress={() => setSelectedPlan("quarterly")}
                        title="QUARTERLY"
                        subtitle="ADVANCED"
                        price="$24.99"
                        duration="3 Months"
                        save="SAVE 17%"
                    />

                    {/* YEARLY */}
                    <PlanCard
                        selected={selectedPlan === "yearly"}
                        onPress={() => setSelectedPlan("yearly")}
                        title="YEARLY"
                        subtitle="ULTIMATE"
                        price="$79.99"
                        duration="ANNUALLY"
                        save="SAVE 33%"
                        best
                    />

                </View>

                <View style={styles.bottomactions}>
                    <ThemeButton
                        text="Choose Your Plan"
                        onPress={() => router.push('/phoneVerfiy')}
                    />
                </View>

                <View style={styles.registerRow}>
                    <TouchableOpacity>
                        <Text style={styles.registerText}>
                            Restore Purchases
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

function PlanCard({
    title,
    subtitle,
    price,
    duration,
    save,
    best,
    selected,
    onPress,
    active
}) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            style={styles.wrapper}
        >

            {selected ? (
                <LinearGradient
                    colors={["#f5c26b", "#ff8c42"]}
                    style={styles.gradientBorder}
                >
                    <View style={styles.cardInner}>
                        <PlanContent {...{ title, subtitle, price, duration, save, best, active }} />
                    </View>
                </LinearGradient>
            ) : (
                <View style={styles.card}>
                    <PlanContent {...{ title, subtitle, price, duration, save, best, active }} />
                </View>
            )}

        </TouchableOpacity>
    );
}

function PlanContent({
    title,
    subtitle,
    price,
    duration,
    save,
    best,
    active
}) {
    return (
        <>
            <View>

                <View style={styles.row}>
                    <Text style={styles.title}>{title}</Text>


                    {active && (
                        <View style={styles.activeBadge}>
                            <Text style={styles.activeText}>● ACTIVE</Text>
                        </View>
                    )}

                    {save && (
                        <LinearGradient
                            colors={["#ff4da6", "#7b5cff"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.saveBadge}
                        >
                            <Text style={styles.saveText}>{save}</Text>
                        </LinearGradient>
                    )}
                </View>

                <Text style={styles.planSubtitle}>{subtitle}</Text>
            </View>

            <View style={styles.right}>

                {best && (
                    <View style={styles.bestBadge}>
                        <Text style={styles.bestText}>BEST VALUE</Text>
                    </View>
                )}

                <Text style={styles.price}>{price}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </View>
        </>
    );
}

export default Plans;

const styles = StyleSheet.create({

    fullsignup: {
        flex: 1,
        backgroundColor: '#000',
    },

    bg: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "cover",
        opacity: 0.9,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },

    topsdiv: {
        marginTop: 20,
        alignItems: "center",
    },

    pricme: {
        width: 218,
        height: 40,
        resizeMode: 'contain',
    },

    subtitleText: {
        marginTop: 10,
        width: "70%",
        textAlign: "center",
        alignSelf: "center",
    },

    container: {
        marginTop: 30,
    },

    wrapper: {
        marginBottom: 20,
    },

    card: {
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 20,
        padding: 20,
        backgroundColor: "#111",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    gradientBorder: {
        padding: 1.5,
        borderRadius: 22,
    },

    cardInner: {
        backgroundColor: "#111",
        borderRadius: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },

    title: {
        color: "#fff",
        fontSize: 16,
        marginRight: 8,
    },

    planSubtitle: {
        color: "#ff4da6",
        marginTop: 5,
        fontSize: 14,
    },

    price: {
        color: "#fff",
        fontSize: 20,

    },

    duration: {
        color: "#aaa",
        marginTop: 5,
    },

    activeBadge: {
        borderWidth: 1,
        borderColor: "#f5c26b",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        marginRight: 8,
    },

    activeText: {
        color: "#f5c26b",
        fontSize: 12,
    },

    saveBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 15,
        marginBottom: 5,
    },

    saveText: {
        color: "#fff",
        fontSize: 12,
    },

    bestBadge: {
        backgroundColor: "#f5c26b",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,
        alignSelf: "flex-end",
        marginBottom: 5,
        marginTop: -25,
    },

    bestText: {
        fontSize: 11,

    },

    right: {
        alignItems: "flex-end",
        justifyContent: "center",
    },

    bottomactions: {
        marginTop: 10,
    },

    registerRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
    },

    registerText: {
        color: "#F3DEB1",
        textTransform: "uppercase",
        fontSize: 14,
    },

});