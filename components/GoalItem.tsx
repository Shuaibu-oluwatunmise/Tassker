import { StyleSheet, Text, View, Pressable } from "react-native";


function GoalItem(props: any) {
    return(
        <Pressable 
            android_ripple = {{color: '#210644'}}
            onPress = {props.onDelteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem} 
        >
            <View style={styles.goalItems}>
                <Text style={styles.goalText}>{(props.index + 1 + '. ')}</Text>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#2a54e4',
        flexDirection: 'row'
      },
      pressedItem:{
        opacity: 0.5
      },
      goalText:{
        color: 'white',
        padding: 8,
      }
});