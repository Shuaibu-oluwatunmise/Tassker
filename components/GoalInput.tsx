import { StyleSheet, View, Button, TextInput, Modal, Image} from "react-native";
import { useState } from 'react';

function GoalInput(props: any){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText: any) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoalText(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.InputContainer}>
                <Image 
                    style={styles.image} 
                    source={require('@/assets/images/ActualLogo.png')}
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your Course Goal!" 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='cancel' color='#2a54e4' onPress={props.close}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color='#2a54e4'/>
                    </View>
                </View>
            </View>
        </Modal>
    );

}

export default GoalInput;

const styles=StyleSheet.create({
    InputContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 16,
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#d3515d',
        borderRadius: 6,
        color: '#2a54e4',
        width:'100%',
        padding: 16,
      },
      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16,
      },
      button:{
        width: 100,
        marginHorizontal: 8
      },
      image:{
        width:100,
        height:100,
        margin:20,
      }
});