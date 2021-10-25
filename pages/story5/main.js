import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import {Button} from 'react-native-elements'
import random from '../../utils/randomSt';

const Main = ({navigation}) => {
    return (
        <ImageBackground source={require("../../images/bg.png")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                <View style={styles.barner_view}>
                    <Image source={require('../../images/5.jpg')} style={styles.barner}></Image>
                </View>
            
                <View style={styles.content}>
                    <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>brief</Text>
                    <Text style={{textAlign: 'center'}}>Description：Rose's family had a wonderful and harmonious morning.</Text>
                </View>

                <View style={styles.btn}>
                    <Button onPress={() => navigation.replace(random('st5_main'))} buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}} title="Pick another"></Button>
                </View>
                <View style={styles.btn}>
                    <Button onPress={() => navigation.push('st5_story', {type: 0})} buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}} title="Read"></Button>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        width: '100%',
        height: '100%',
        paddingTop: 90
    },
    barner_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    barner: {
        width: 300,
        height: 300,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    content: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 10,
    },
    btn: {
        paddingTop: 50,
        paddingLeft: 60,
        paddingRight: 60
    }
})

export default Main;