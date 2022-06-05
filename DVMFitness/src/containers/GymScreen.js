import * as React from 'react';
import { View,Text, TouchableOpacity } from "react-native";
import body from "../styles/body";
function GymScreen({ navigation }) {
    return (
      
      <View style={body.contenedor}>
        <Text style={body.gym}>Biceps</Text>
       
        <TouchableOpacity style={body.button}
          title="Biceps"
          onPress={() => navigation.navigate('Biceps')}
        />
        <Text style={body.gym}>Espalda</Text>
        <TouchableOpacity style={body.button}
          title="Espalda"
          onPress={() => navigation.navigate('Back')}
          />
          <Text style={body.gym}>Triceps</Text>
        <TouchableOpacity style={body.button}
          title="Triceps"
          onPress={() => navigation.navigate('Triceps')}
          />
          <Text style={body.gym}>Pecho</Text>
        <TouchableOpacity style={body.button}
          title="Pecho"
          onPress={() => navigation.navigate('Chest')}
          />
          <Text style={body.gym}>Piernas</Text>
        <TouchableOpacity style={body.button}
          title="Piernas"
          onPress={() => navigation.navigate('Legs')}
          />
          <Text style={body.gym}>Hombros</Text>
        <TouchableOpacity 
          style={body.button}
          title="Hombros"
          onPress={() => navigation.navigate('Shoulders')}
          />
      </View>
      
    );
  }
  export default GymScreen;