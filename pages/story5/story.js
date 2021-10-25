import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';

const content1 = `On Feb. 11, President Peter Salovey announced that he and the Yale Corporation had voted to change the name of Calhoun College, one of the university’s undergraduate residential colleges, to honor alumna Grace Murray Hopper. Grace Brewster Murray Hopper was a computer pioneer and naval officer.

The daughter of Walter Fletcher Murray (Yale B.A. 1894, Phi Beta Kappa) and Mary Campbell Van Horne, Grace Brewster Murray was born in 1906 in New York City. In 1928 Grace graduated Phi Beta Kappa from Vassar College with degrees in mathematics and physics. In 1930 Hopper received her master’s degree in mathematics from Yale. In 1931 she began teaching mathematics at Vassar while pursuing her doctorate at Yale under computer pioneer Howard Engstrom. In 1934 she completed her Ph.D. in mathematics and mathematical physics from Yale. During a one-year sabbatical from Vassar, Hopper studied with the famous mathematician Richard Courant at New York University.

After the bombing of Pearl Harbor and the United States’ entry into World War II, Hopper decided to join the war effort. She was initially rejected because of her age and diminutive size, but she persisted. Taking a leave of absence from Vassar, where she was an associate professor, Hopper joined the U.S. Naval Reserve (Women’s Reserve) in December 1943 and was assigned to the Bureau of Ships Computation Project at Harvard University. There she worked for Howard Aiken, another computer pioneer, who had developed the IBM Automatic Sequence Controlled Calculator, better known as the Mark I, one of the earliest electromechanical computers. One of the first three computer “programmers,” Hopper was responsible for programming the Mark I and punching machine instructions onto tape. She also wrote the 561-page user manual for the Mark I.

`;
const content2 = `The close relationship between the American military and the early computer industry, nurtured first by World War II and then the Cold War, shaped Hopper’s career path. Hopper and her fellow officers in the Harvard lab worked on top-secret calculations essential to the war effort — computing rocket trajectories, creating range tables for new anti-aircraft guns, and calibrating minesweepers. In addition to their work for the Navy, Hopper and her colleagues also completed calculations for the army and “ran numbers” used by John von Neumann in developing the plutonium bomb dropped on Nagasaki, Japan.

After the war Hopper turned down a full professorship at Vassar to remain at Harvard, becoming a research fellow in engineering sciences and applied physics. During this time, she helped develop the Mark II and Mark III computers as Harvard continued to receive funding contracts from the Navy. One evening in 1945 while working on the Mark II, Hopper and her colleagues encountered a problem. They took the machine apart and found a large moth. Although the term “bug” had been used by engineers since the 19th century to describe a mechanical malfunction, Hopper was the first to refer to a computer problem as a “bug” and to speak of “debugging” a computer.

As the number of computer languages proliferated, the need for a standardized language for business purposes grew. In 1959 COBOL (short for “common business-oriented language”) was introduced as the first standardized general business computer language. Although many people contributed to the “invention” of COBOL, Hopper promoted the language and its adoption by both military and private-sector users. Throughout the 1960s she led efforts to develop compilers for COBOL. Her biographer Kurt Beyer calls her “the person most responsible for the success of COBOL during the 1960s.” Her influence was significant; by the 1970s COBOL was the “most extensively used computer language” in the world.
`;

const content = [content1, content2];
const typeList = ['question', 'question2'];

const Story = ({route, navigation}) => {
  const {type} = route.params;

  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <View style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{maxHeight: '85%'}}>
          <View style={styles.barner_view}>
            <Text style={styles.barner}>{content[type]}</Text>
          </View>
        </ScrollView>

        <View style={styles.btn}>
          <Button
            onPress={() => navigation.push('st5_game', {type: typeList[type]})}
            title="Next"
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: '#424dac',
            }}></Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
    width: '100%',
    height: '100%',
    paddingTop: 50,
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
    fontSize: 17,
  },
  btn: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default Story;
