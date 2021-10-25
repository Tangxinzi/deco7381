import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const content1 = `It was a wonderful morning, Rose got up early. She first made her bed, and then she went to the bathroom to brush her teeth and wash her face. After finishing these things, Rose walked out of the room and saw his mother and father making the bed, brushing their teeth and washing their faces in their room. Rose thought it was interesting that mom and dad took the same steps after getting up. Rose then said to her mom and dad, "Good morning!" Rose's mom and dad also smiled and said, "Good morning! " Next, they came to the dining room for breakfast. Rose said happily: "I found that all the steps we took when we got up are: make the bed, brush our teeth, wash our faces, say good morning, and have breakfast." "Mom and Dad boasted that Rose was a good boy who was good at finding out and had good habits. 
As they were about to start breakfast, Rose noticed that her grandparents were walking from their room to the dining room, ready to have breakfast, Rose excitedly said to her grandparents: "I guess your next step now is to say good morning and then have breakfast with us!”。
`
const content2 = `Rose’s grandparents smiled and replied, "Yes, we got up and made the bed, brushed our teeth and washed our faces, now we should say good morning and finally have breakfast."  Rose said, "It turns out everyone in our family does the same thing every morning! “The family laughed happily, and the whole family's good day began with this beautiful morning. `

const content = [content1, content2]
const typeList = ['question', 'select']

const Story = ({route, navigation}) => {
    const { type } = route.params

    return (
        <ImageBackground source={require("../../images/bg.png")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <View style={styles.main}>
                <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight: '85%'}}>
                    <View style={styles.barner_view}>
                        <Text style={styles.barner}>{content[type]}</Text>
                    </View>
                </ScrollView> 
                
                <View style={styles.btn}>
                    <Button onPress={() =>  navigation.push('st1_game', {type: typeList[type]})} title="Next" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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
        paddingTop: 50
    },
    barner_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingTop: 10,
        // paddingBottom: 10
    },
    barner: {
        width: 350,
        fontSize: 17
    },
    btn: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
    }
})

export default Story