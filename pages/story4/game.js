import React, {useState, createRef} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableNativeFeedback, Alert} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';



const Question = (props) => {
    const {navigation} = props
    return (
        <View>
            <View style={styles.barner_view}>
                <Text style={styles.barner}>What her thoughts made her recognized as 'prophet of the computer age'? </Text>
            </View>

            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st4_anser_failed', {next: 'end', last: 1})} title="A: she discovered important theorem in mathematics." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st4_anser_failed', {next: 'end', last: 1})} title="B: she thought that the Engine might compose elaborate and scientific pieces of music of any degree of complexity or extent." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st4_anser_right', {next: 'end', last: 1})} title="C: she thought machine can be manipulate by number symbols." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st4_anser_failed', {next: 'end', last: 1})} title="D: she thought she seen further than Babbage." buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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
        if(text != 'extensive notes of her own') return navigation.push('st4_anser_failed', {next: 1, last: 0, update: update})
        return navigation.push('st4_anser_right', {next: 1, last: 0})
    }
    return (
        <View>
            <View>
                <Text style={{fontSize: 20, width: '100%', textAlign: 'center', lineHeight: 40}}>
                In 1843 she published a translation from the French of an article on the Analytical Engine by an Ita;lian engineer, Luigi Menabrea, to which Ada added ______.
                </Text>

                <View>
                    <Input ref={input} style={{fontSize: 20, textAlign: 'center'}} value={text}  onChangeText={value => settext(value)}/>
                </View>
                
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