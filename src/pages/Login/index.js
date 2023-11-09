import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils";
import CheckBox from "@react-native-community/checkbox";
import { Button, Gap, Input } from "../../components";
import { showMessage } from "react-native-flash-message";

const Login = ({navigation}) => {
    const [isChecked, setIschecked] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        let error = [];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email == '') {
        error.push('Email required');
        }
        if (!emailPattern.test(email)) {
            error.push('Email format is incorrect');
        }
        if (password == '') {
            error.push('Password required');
            }
        if (password.length < 8) {
        error.push('Password less than 8 characters');
        }
        if (error.length > 0) {
            showMessage({
            icon: 'warning',
            message: error[0],
            type: 'default',
            backgroundColor: "#CD5050",
            color: colors.White,
        });
        }else{
            const params = {
                email : email,

            }
            navigation.replace('Home')
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.White}
                barStyle="dark-content"
                translucent={false}
            />
            <Gap height={130} /> 
            <ScrollView style={{paddingHorizontal: 20}}>
                <Text style={styles.text}>
                    Login
                </Text>
                <Gap height={8} />
                <Text style={styles.text2}>Please use the account you have to login at elKopra apps</Text>
                <Gap height={40} />
                <Input maxLength={40} title={'Email'} value={email} onChangeText={(value) => setEmail(value)} />
                <Gap height={18} />
                <Input maxLength={16} title={'Password'} value={password} onChangeText={(value) => setPassword(value)} />
                <Gap height={40} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <CheckBox
                            disabled={false}
                            value={isChecked}
                            onValueChange={(newValue) => setIschecked(newValue)}
                        />
                        <Gap width={10} />
                        <Text style={styles.teks2}>Let me in</Text>
                    </View>
                    <TouchableOpacity >
                        <Text style={styles.text3}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <Gap height={28} />
                <Button teks={'Login'} backColor={colors.Purple} textColor={colors.White} onPress={onLogin} />
                <Gap height={15} />
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.text2}>Register new account ?</Text>
                    <Gap width={10} />
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.text3}>Click Here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: colors.White
    },
    text: {
        fontSize: 20,
        color: colors.NeutralBlack,
        fontFamily: "Nunito-Bold"
    },
    text2: {
        fontSize: 14,
        color: colors.NeutralBlack,
        fontFamily: "Nunito-Regular"
    },
    text3: {
        fontSize: 14,
        color: colors.Purple,
        fontFamily: "Nunito-SemiBold"
    },
})

export default Login