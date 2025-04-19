import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from "react-native";
import GoalItem from '@/components/GoalItem';
import GoalInput from '@/components/GoalInput';
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible]=useState(false);
  const[courseGoals, setCourseGoals] = useState([]);


  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals =>[
      ...courseGoals, 
      {text: enteredGoalText, id:Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    })
  }
  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.appContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('@/assets/images/ActualLogo.png')}/>
        </View>
        <Button title='Add New Goal' color='#2a54e4' onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoalText = {addGoalHandler} close = {endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data = {courseGoals}
            renderItem={itemData => {
              return (
              <GoalItem 
              text={itemData.item.text} 
              index = {itemData.index} 
              onDelteItem={deleteGoalHandler}
              id = {itemData.item.id}/>
            );
          }}
          keyExtractor={(item, index)=> {
            return item.id;
          }}
          alwaysBounceVertical = {true}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#000000'
  },
  goalsContainer:{
    flex: 7,
  },
  image:{
    width:100,
    height:100,
    margin:10,
  },
  imageContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
