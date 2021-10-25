import React, {createRef, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableNativeFeedback, Alert} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

const Question = (props) => {
    const {navigation} = props
    return (
        <View>
            <View style={styles.barner_view}>
                <Text style={styles.barner}>Mom told Little Red Riding Hood to take the side road.(True or False?)</Text>
            </View>

            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st2_anser_failed', {next: 1, last: 0})} title="A. True" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st2_anser_right', {next: 1, last: 0})} title="B. False" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st2_tips', {last: 0})} title="C. I don’t know" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st2_abandon', {last: 0, next: 1})} title="D. Give up" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
        </View>
    )
}

const Blank = (props) => {
    const { navigation } = props
    const [text, settext] = useState('')
    const input = createRef()
    const update = () => {
        settext('')
    }
    const submit = () => {
        if(text != 'big') return navigation.push('st2_anser_failed', {next: 'end', last: 1, update: update})
        return navigation.push('st2_anser_right', {next: 'end', last: 1})
    }
    return (
        <View>
            <Text style={{textAlign:'center', justifyContent: 'center', fontSize: 20}}>
                The right way to see grandma is to choose _____ road.
            </Text>
            <View>
                <Input ref={input}  style={{textAlign:'center', fontSize: 20}} value={text}  onChangeText={value => settext(value)}/>          
            </View>
            <View style={styles.btn}>
                <Button onPress={() => submit()} title="Ok" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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
                    type == 'question' ? <Question navigation={navigation}/> : <Blank navigation={navigation}/>
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