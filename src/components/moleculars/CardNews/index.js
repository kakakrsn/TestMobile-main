import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";
import { ExampleNewsImg } from "../../../assets";
import { Gap } from "../../atoms";

const CardNews = ({img, title, desc, onDetail}) => {
    return(
        <View style={styles.card}>
            <Image source={!img ? ExampleNewsImg : {uri: img}} style={styles.img} resizeMode="stretch" />
            <View style={{margin: 10}}>
                <Text numberOfLines={2} style={styles.title}>{!title ? 'Title' : title}</Text>
                <Gap height={4} />
                <Text numberOfLines={2} style={styles.desckripsi}>{!desc ? 'Lorem ipsum dolot amet lorem ipsum dolot amet' : desc}</Text>
                <Gap height={16} />
                    {/* <WebView source={{ html: '<h1>Hello world</h1>' }} style={{ flex: 1 }} /> */}
                <TouchableOpacity onPress={onDetail}>
                    <Text style={styles.text}>Learn More ...</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.boxColor,
        borderRadius: 8,
        width: 182,
        height: 232,
        marginRight: 10
    },
    img : {
        height: 111,
        width: 182,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    title: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: colors.Grey3,
        textTransform: "capitalize"
    },
    desckripsi: {
        fontSize: 10,
        fontFamily: 'Nunito-Regular',
        color: colors.GreyThick
    },
    text: {
        fontSize: 10,
        fontFamily: 'Nunito-Bold',
        color: colors.Purple3
    }
})

export default CardNews