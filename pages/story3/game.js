import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableNativeFeedback, Alert} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const Question = (props) => {
    const {navigation} = props
    return (
        <View>
            <View style={styles.barner_view}>
                <Text style={styles.barner}>Mike is not allergic to peanuts.(True or False ?)</Text>
            </View>

            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_anser_failed', {next: 1, last: 0})} title="A. True" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_anser_right', {next: 1, last: 0})} title="B. False" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_tips', {last: 0})} title="C. I don’t know" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_abandon', {last: 0, next: 1})} title="D. Give up" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
        </View>
    )
}

const Question2 = (props) => {
    const {navigation} = props
    return (
        <View>
            <View style={styles.barner_view}>
                <Text style={styles.barner}>Why is Mike angry with Jesse? </Text>
            </View>

            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_anser_failed', {last: 1, next: 'end'})} title="A: Because Jesse's mother tore off the notice." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_anser_failed', {last: 1, next: 'end'})} title="B: Because Jesse is wearing flamboyant clothes." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_anser_failed', {last: 1, next: 'end'})} title="C: Because Jessie yearns for a good life." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st3_anser_right', {last: 1, next: 'end'})} title="D: Because Jesse said she gave Mike the peanuts to eat." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
        </View>
    )
}


const Game = ({route, navigation}) => {
    const { type } = route.params

    return (
        <ImageBackground source={require("../../images/bg.png")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                {
                    type == 'question' ? <Question navigation={navigation}/> : <Question2 navigation={navigation}/>
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    barner_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    barner: {
        width: 350,
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'center',
    },
    btn: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        margin: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600'
    },
    select: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    img: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        margin: 10
    },
    selectText: {
        color: "white",
        fontSize: 42,
        lineHeight: 150,
        height: '100%',
        width: '100%',
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
})

export default Game