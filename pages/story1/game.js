import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableNativeFeedback, Alert} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const Question = (props) => {
    const {navigation} = props
    return (
        <View>
            <View style={styles.barner_view}>
                <Text style={styles.barner}>Is Rose right?</Text>
            </View>

            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st1_anser_right', {next: 1, last: 0})} title="A. Right" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st1_anser_failed', {next: 1, last: 0})} title="B. Wrong" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st1_tips', {last: 0})} title="C. I don’t know" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
            <View style={styles.btn}>
                <Button onPress={() => navigation.push('st1_abandon', {last: 0, next: 1})} title="D. Give up" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
            </View>
        </View>
    )
}

const Select = (props) => {
    const { navigation } = props

    const _imgs = [
        {
            img: require('../../images/goodmoring.png'),
            tidx: 3,
            idx: -1,
        },
        {
            img: require('../../images/havebreakfast.jpg'),
            tidx: 4,
            idx: -1,
        },
        {
            img: require('../../images/getup.jpg'),
            tidx: 1,
            idx: -1,
        },
        {
            img: require('../../images/brushTeeth.png'),
            tidx: 2,
            idx: -1,
        }
    ]


    const [idx, setidx] = useState(1)

    const random = (arr) => {
        const n = arr.length 
        for(let i=0;i<n;i++) {
            const x = Math.random() * n >> 0
            const t = arr[x]
            arr[x] = arr[i]
            arr[i] = t
        }
        return arr
    }

    const [imgs, setimgs] = useState(random(_imgs));

    const select = (obj) => {
        const f = imgs.slice()

        for(let i of f) {
            if(i == obj) {
                if(i.idx == -1) {
                    i.idx = idx
                    setidx(idx + 1)
                }
                else if(obj.idx == idx - 1){
                    i.idx = -1
                    setidx(idx - 1)
                }
                break
            }
        }
        setimgs(f)
    }

    const imgdom = imgs.map((i) => {
        return (
            <View key={i.tidx}>
                <TouchableNativeFeedback onPress={() => select(i)}>
                    <ImageBackground source={i.img} resizeMode='contain' style={styles.img}>
                    {
                        i.idx == -1 ? <View/> : <TouchableNativeFeedback onPress={() => select(i)}><Text style={styles.selectText}>{i.idx}</Text></TouchableNativeFeedback> 
                    } 
                    </ImageBackground>
                </TouchableNativeFeedback>
            </View>
        )
    })
    

    const update = () => {
        const f = imgs.slice()
        for(let i=0;i<f.length;i++) f[i].idx = -1
        setimgs(f)
        setidx(1)
    }

    // btn
    const submit = () => {
        for(const item of imgs) {
            if(item.idx == -1) {
                return Alert.alert('Tips', 'Please select all steps')
            }
        }

        for(const item of imgs) {
            if(item.idx != item.tidx) {
                return navigation.push('st1_anser_failed', {next: 'end', last: 1, update: update})
            }
        }

        return navigation.push('st1_anser_right', {next: 'end', last: 1})
    }
    return (
        <View>
            <Text style={styles.title}>The order after Rose gets up tomorrow is: (please click on the pictures in order)</Text>

            <View style={styles.select}>{imgdom}</View>

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
                    type == 'question' ? <Question navigation={navigation}/> : <Select navigation={navigation}/>
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