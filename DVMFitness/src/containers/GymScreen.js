import * as React from 'react';
import { View, Text, Button } from "react-native";
import body from "../styles/body";
function GymScreen({ navigation }) {
    return (
      <View style={body.contenedor}>
        <Text>Home screen</Text>
        <Button
          title="Biceps"
          onPress={() => navigation.navigate('Biceps')}
        />
        <Button
          title="Espalda"
          onPress={() => navigation.navigate('Back')}
        />
        <Button
          title="Triceps"
          onPress={() => navigation.navigate('Triceps')}
        />
        <Button
          title="Pecho"
          onPress={() => navigation.navigate('Chest')}
        />
        <Button
          title="Piernas"
          onPress={() => navigation.navigate('Legs')}
        />
        <Button
          title="Hombros"
          onPress={() => navigation.navigate('Shoulders')}
        />
      </View>
    );
  }
  export default GymScreen;