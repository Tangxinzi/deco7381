import React from 'react';
import {View, Text, StyleSheet, Image, BackHandler, Alert, ImageBackground} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
const End = (navigation) => {
    const alert = () => {
        Alert.alert('Quit', 'Do you want to quit this app?',  [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
                text: "Confirm",
                onPress: () => BackHandler.exitApp(),
                style: "default",
            },
        ])
    }

    return (
        <ImageBackground source={require("../../images/bg.png")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                <View style={styles.barner_view}>
                    <Image source={require('../../images/goodNight.jpg')} style={styles.barner}></Image>
                </View>

                <View style={styles.btn}>
                    <Button title="返回主页" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
                </View>
                <View style={styles.btn}>
                    <Button onPress={alert} title="Quit" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        paddingTop: 50,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    barner_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    barner: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderColor: 'black'
    },
    content: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 10,
    },
    btn: {
        paddingTop: 10,
        paddingLeft: 60,
        paddingRight: 60
    }
})

export default End;