import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { CardBg, CardLogo } from "../../../assets";
import { Gap } from "../../atoms";
import { colors } from "../../../utils";


const CardBank = () => {

    const {width, height} = Dimensions.get('window');

    return(
        <ImageBackground source={CardBg} style={{ width: width/1-42, height: 170, borderRadius: 12, position: 'relative', overflow: 'hidden', padding: 20 }}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Text style={styles.text}>balance</Text>
                <Text style={styles.text2}>10/12</Text>
            </View>
            <Gap height={15} />
            <Text style={styles.text3}>Rp. 8.000.000</Text>
            {/* <Gap height={50} /> */}
            <View style={{flex: 1}} />
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Text style={styles.text4}>**** **** 1234</Text>
                <Image source={CardLogo} style={styles.logo} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: 'Nunito-Bold',
        color: colors.White,
        textTransform: "capitalize"
    },
    text2: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: colors.White,
        textTransform: "capitalize"
    },
    text3: {
        fontSize: 28,
        fontFamily: 'Nunito-Bold',
        color: colors.White,
    },
    text4: {
        fontSize: 14,
        fontFamily: 'Nunito-SemiBold',
        color: colors.White,
    },
    logo: {
        height: 19,
        width: 47
    }
})

export default CardBank