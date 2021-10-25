import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const content1 = `Once there was a prosperous country called Java. The King has son, Mike. Mike will be the next king and the fact has recognized by the whole country. Although he is young, he is smart, hardworking, and compassionate, so he is also loved by the people. The King’s other son, Locke, is jealous about Mike. He colluded with Reagan, the Minister of Java, allored Mike into a wasteland to attend a hunting activity, which was full of traps. During the hunting, Mike's horse tripped over by a rope hanging in the air, then Mike fell off the horse and rolled down the cliff. After seeing this scene, Locke was so happy that he could finally take the position of the king's candidate. So, Locke and Reagan brought the news back to the king. The whole country was full of moan for Mike's death.

However, Mike was fortunate and didn’t die. He was saved by a kind girl. Mike fell off the cliff and fainted. When he woke up, he saw a little girl wearing tattered clothes and looking at him worriedly. The little girl said, "I only have some peanuts here and you have been in a coma for almost two days. However, Mike is allergic to peanuts since he was a child and refused the girl's food. The girl nodded when she knew the fact and ran away. After a while, Mike saw the little girl holding something. The little girl said, "Roasted sweet potatoes, it's delicious." Mike said, "It's so sweet, I've never eaten anything such delicious." From then on, the little girl came to visit Mike and brought him sweet potatoes every day. And Mike's body is getting better every day. Until one day, Mike said to the little girl, "I'm going back to finish what I should do, and I promise I will come back to see you. Finally, Mike returned to the Java country.

`
const content2 = `In Java, Mike fought against Locke bravely, and finally revealed Locke's true face, and Locke was also punished by what he deserved. Later, Mike succeeded in inheriting the throne and rectified the party related to Locke, thus becoming a good king praised by the whole country.
One day, a lady wandering in the street in a flamboyant dress, seeing a poster posted on the wall, which looks for a sweet potato girl. It tells the story of a girl who rescued the prince in trouble with roasted sweet potatoes. The lady was shocked and tore off the notice. Back to home, she told her daughter Jesse, “I didn’t expect that the story written by the girl in the diary of Rose is true. Now you go to steal the diary of Rose and memorize it, and then go to the palace and say that you are the girl back then, so we can be furious.” Then Jesse remembers all things happened in the diary. After she saw Mike, she told the story in the diary. When she talked about what delicious food she gave to Mike every day, she forgot whether it was sweet potatoes or peanuts. So, she tried his luck and said that she sent peanuts every day to him. When Mike heard what she said, he knew she is a liar and locked put Jesse into jail. Then he found out that the little girl is a servant of Jesse, so he decided to bring her to the palace. Since then, the two have lived a happy life.
`

const content = [content1, content2]
const typeList = ['question', 'question2']

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
                    <Button onPress={() =>  navigation.push('st3_game', {type: typeList[type]})} title="Next" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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