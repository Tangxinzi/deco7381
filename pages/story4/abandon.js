import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const AnserRight = ({route, navigation}) => {
    const {last, next} = route.params
    return (
        <ImageBackground source={require("../../images/bg.png")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                {
                    last == 0 ? <Text style={styles.hint}>Hint: In 1843 she published a translation from the French of an article on the Analytical Engine by an Italian engineer, Luigi Menabrea, to which Ada added extensive notes of her own.</Text> : <View/>
                }

                {
                    last == 1 ? <Text style={styles.hint}>Hint: The idea of a machine that could manipulate symbols in accordance with rules and that number could represent entities other than quantity mark the fundamental transition from calculation to computation.</Text> : <View/>
                }

                <View style={styles.btn}>
                    <Button onPress={() => navigation.goBack()} title="previous" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
                </View>

                <View style={styles.btn}>
                    <Button  onPress={() => navigation.push('st4_story', {type: next})} title="next" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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
        justifyContent: 'center'
    },
    txt: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "900",
        fontSize: 50,
        textAlign: 'center'
    },
    hint: {
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "500",
        fontSize: 25,
        textAlign: 'center',
        color: 'red'
    },
    barner_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    barner: {
        width: 350,
        textAlign: 'center',
    },
    btn: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30
    }
})

export default AnserRight