import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const AnserFailed = ({route, navigation}) => {
    const {last, next} = route.params
    return (
        <ImageBackground source={require("../../images/bg.png")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                <Text style={styles.txt}>Boom!</Text>
                <Text style={styles.txt2}>That's not quiet right!</Text>
                {
                    last == 0 ? <Text style={styles.hint}>Hint: However, Mike is allergic to peanuts since he was a child and refused the girl's food.</Text> : <View/>
                }

                {
                    last == 1 ? <Text style={styles.hint}>Hint: So, she tried his luck and said that she sent peanuts every day to him.</Text> : <View/>
                }
            
                <Text style={styles.txt2}>Do you want to try again?</Text>

                <View style={styles.btn}>
                    <Button onPress={() => {
                        if(route.params.update) route.params.update()
                        navigation.goBack()
                    }}  title="Yes" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
                </View>

                <View style={styles.btn}>
                    <Button onPress={() => {
                        if(next == 'end') navigation.push('st3_end') 
                        else navigation.push('st3_story', {type: next})
                    }}  title="No" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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
        justifyContent: 'center',
        paddingTop: 50
    },
    txt: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "900",
        fontSize: 50,
        textAlign: 'center'
    },
    txt2: {
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "500",
        fontSize: 30,
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

export default AnserFailed