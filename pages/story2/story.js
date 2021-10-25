import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const content1 = `Once upon a time, there was a cute little girl. Everyone likes her, especially her grandmother, who gives her whatever she wants. Once, grandma gave the little girl a little red hat made of velvet, which she wore every day. From then on, everyone called her "Little Red Riding Hood."

One day, mom said to the little girl: "hey dear, there is a piece of cake and a bottle of wine, please bring them to grandma, since grandma is sick and very weak. If she eats these, she will feel better. Now time to leave and remember two things: don’t take the side road, it’s safer to take the big road; don’t talk to a stranger on the road and go away quickly. When you get to grandma’s house, don’t forget to say, "good morning". I'll be careful." Little Red Riding Hood said to his mother, and then she left home.

`
const content2 = `Grandma lives in the forest outside the village, a long way from the Little Red Riding Hood's home. The little girl left the village and saw some beautiful flowers on the side road. She thought that flowers could bring her grandma a good mood, so she went along the path to pick flowers.

She ran into a wolf as soon as she walked into the side road. Little Red Riding Hood doesn't know that a wolf is a bad guy, so she is not afraid of it at all.
"Good morning, Little Red Riding Hood," said the wolf.
"Good morning, Mr. Wolf."
"Where are you going so early?"
"I want to go to grandma's house."
"What's under your apron?"
"Cake and wine. Yesterday our family baked some cakes and my poor grandma fell ill and needed some good food to get better."
"Where does your grandma live, little girl?"
"There is still long way, and it’s inside the woods. Her house is under three big oak trees, with a walnut tree fence in the lower part. You must know. I have to leave soon, and I can't let grandma wait too long, see you next time Mr. Wolf" said Little Red Riding Hood.

So Little Red Riding Hood returned to the original road and arrived at grandma's house. When she opened the door, there was a big bad wolf inside. At this moment, a white light flashed, and Little Red Riding Hood returned to where she saw the path. Little Red Riding Hood looked puzzled about what happened. Could it be that the big bad wolf did something to grandma? She wanted to interrogate the big bad wolf, so she went down the path again. She angrily found Mr. Wolf. Before she could speak, Mr. Wolf rushed towards her and was going to ear her. At this moment, another white light flashed, and Little Red Riding Hood returned to the front of the path.

This time Little Red Riding Hood calmed down, the big bad wolf is not a good people, this time I will try to avoid contact with him. So Little Red Riding Hood cautiously entered the path again to pick flowers. Unexpectedly, this time she was still found by the big bad wolf, and she returned to the small road again with another flash.

Finally, she remembered her mother's words, don't take the side road. So, this time Little Red Riding Hood rushed to the grandmother's house on the big road. She opened the door and finally saw the grandmother, crying and hugging her tightly.
`

const content = [content1, content2]
const typeList = ['question', 'blank']

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
                    <Button onPress={() =>  navigation.push('st2_game', {type: typeList[type]})} title="Next" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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