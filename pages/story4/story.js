import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';

const content1 = `Ada Lovelace (1815-1852) was born Augusta Ada Byron, the only legitimate child of Annabella Milbanke and the poet Lord Byron. Her mother, Lady Byron, had mathematical training (Byron called her his 'Princess of Parallelograms') and insisted that Ada, who was tutored privately, study mathematics too - an unusual education for a woman.

Ada met Babbage at a party in 1833 when she was seventeen and was entranced when Babbage demonstrated the small working section of the Engine to her. She intermitted her mathematical studies for marriage and motherhood but resumed when domestic duties allowed. In 1843 she published a translation from the French of an article on the Analytical Engine by an Italian engineer, Luigi Menabrea, to which Ada added extensive notes of her own. The Notes included the first published description of a stepwise sequence of operations for solving certain mathematical problems and Ada is often referred to as 'the first programmer'. The collaboration with Babbage was close and biographers debate the extent and originality of Ada's contribution.

`
const content2 = `Perhaps more importantly, the article contained statements by Ada that from a modern perspective are visionary. She speculated that the Engine 'might act upon other things besides number... the Engine might compose elaborate and scientific pieces of music of any degree of complexity or extent'. The idea of a machine that could manipulate symbols in accordance with rules and that number could represent entities other than quantity mark the fundamental transition from calculation to computation. Ada was the first to explicitly articulate this notion and in this she appears to have seen further than Babbage. She has been referred to as 'prophet of the computer age'. Certainly, she was the first to express the potential for computers outside mathematics. In this the tribute is well-founded.`

const content = [content1, content2]
const typeList = ['blank', 'question']

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
                    <Button onPress={() =>  navigation.push('st4_game', {type: typeList[type]})} title="Next" buttonStyle={{borderRadius: 10, backgroundColor: '#424dac'}}></Button>
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