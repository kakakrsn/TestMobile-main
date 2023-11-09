import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils";
import { IconCredit, IconDrawer, IconFoodBank, IconVoucher, IconWallet, NoTransaction, User } from "../../assets";
import { CardBank, CardNews, Gap } from "../../components";
import Api from "../../Api";

const Home = ({navigation}) => {

    // const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false);

    // const q = 'tesla';
    // const from = '2023-09-30';
    // const sortBy = 'publishedAt'
    // const apiKey = `ae9d63e642a2462f9304889476937b12`

    // const GetData = async () => {
    //     try {
    //         setIsLoading(true)
    //         const response = await Api.getNews(q, from, sortBy, apiKey)
    //         setData(response.data.articles)
    //         setIsLoading(false)
    //     } catch (error) {
    //         setIsLoading(false)
    //     }
    // }

    // const onDetail = (value) => {
    //     const params = {
    //         url: value.url
    //     }
    //     navigation.navigate('NewsDetail', params)
    // }

    // useEffect(() => {
    //     GetData()
    // }, [])

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.White}
                barStyle="dark-content"
                translucent={false}
            />
            <Gap height={15} />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{paddingHorizontal: 20}}
            >
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={User} style={styles.img} />
                        <Gap width={8} />
                        <View>
                            <Text style={styles.greating}>Good moring, </Text>
                            <Text style={styles.text}>Amanda Rahma</Text>
                        </View>
                    </View>
                    <IconDrawer />
                </View>
                <Gap height={24} />
                <CardBank />
                <Gap height={24} />
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <View style={{width: 65}}>
                        <View style={styles.boxMenu}>
                            <IconCredit />
                        </View>
                        <Gap height={8} />
                        <Text style={styles.textBox}>
                            Credit Application
                        </Text>
                    </View>
                    <Gap width={Platform.OS == "ios" ? 36 : 28} />
                    <View style={{width: 65}}>
                        <View style={styles.boxMenu}>
                            <IconVoucher />
                        </View>
                        <Gap height={8} />
                        <Text style={styles.textBox}>
                            Vouchers
                        </Text>
                    </View>
                    <Gap width={Platform.OS == "ios" ? 36 : 28} />
                    <View style={{width: 65}}>
                        <View style={styles.boxMenu}>
                            <IconWallet />
                        </View>
                        <Gap height={8} />
                        <Text style={styles.textBox}>
                            SPSW & Balance
                        </Text>
                    </View>
                    <Gap width={Platform.OS == "ios" ? 36 : 28} />
                    <View style={{width: 65}}>
                        <View style={styles.boxMenu}>
                            <IconFoodBank />
                        </View>
                        <Gap height={8} />
                        <Text style={styles.textBox}>
                            POS Cafe 
                        </Text>
                    </View>
                </View>
                <Gap height={24} />
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={styles.text2}>Todays Transactions</Text>
                    <TouchableOpacity>
                        <Text style={styles.text3}>See all</Text>
                    </TouchableOpacity>
                </View>
                <Gap height={16} />
                <View style={styles.card}>
                    <Image source={NoTransaction} style={styles.img2} />
                    <Text style={styles.text2}>No Transaction</Text>
                </View>
                <Gap height={24} />
                {/* <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={styles.text2}>Latest News</Text>
                    <TouchableOpacity>
                        <Text style={styles.text3}>See all</Text>
                    </TouchableOpacity>
                </View>
                <Gap height={16} /> */}
                {/* <View style={{alignSelf: "center"}}>
                        {
                            isLoading && 
                            <ActivityIndicator />
                        }
                </View> */}
                
                {/* <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                > */}
                    
                    {
                        // data.map((value, index) => {
                        //     if(index < 5) {
                        //         const params = {
                        //             url: value.url
                        //         }
                        //         return(
                        //             <CardNews 
                        //                 title={value.title}
                        //                 desc={value.description}
                        //                 img={value.urlToImage}
                        //                 onDetail={() => onDetail(params)}
                        //             />
                        //         )
                        //     }
                        // })
                    }

                    {/* <CardNews /> */}
                {/* </ScrollView> */}
                <Gap height={30} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    img: {
        height: 52,
        width: 52,
        borderRadius: 108
    },
    img2: {
        height: 98,
        width: 123,
    },
    greating : {
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        color: colors.greyText
    },
    text: {
        fontSize: 14,
        fontFamily: 'Nunito-Bold',
        color: colors.Purple
    },
    text2: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        color: colors.Black
    },
    text3: {
        fontSize: 10,
        fontFamily: 'Nunito-Regular',
        color: colors.Purple2
    },
    boxMenu: {
        height: 65,
        width: 65,
        borderRadius: 8,
        backgroundColor: colors.boxColor,
        alignItems: "center",
        justifyContent: "center"
    },
    textBox: {
        fontSize: 10,
        fontFamily: 'Nunito-SemiBold',
        color: colors.Grey2,
        textAlign: "center"
    },
    card: {
        borderWidth: 0.5,
        borderColor: colors.Purple3,
        height: 157,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Home