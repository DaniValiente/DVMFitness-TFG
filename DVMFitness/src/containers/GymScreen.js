import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Button } from "react-native";
import body from "../styles/Body";
function GymScreen({ navigation }) {
    return (
      <View style={body.contenedor}>
        <Text>Home screen</Text>
        <Button
          title="Biceps"
          onPress={() => navigation.navigate('BicepsScreen')}
        />
        <Button
          title="Espalda"
          onPress={() => navigation.navigate('BackScreen')}
        />
        <Button
          title="Triceps"
          onPress={() => navigation.navigate('TricepsScreen')}
        />
        <Button
          title="Pecho"
          onPress={() => navigation.navigate('ChestScreen')}
        />
        <Button
          title="Piernas"
          onPress={() => navigation.navigate('LegsScrreen')}
        />
        <Button
          title="Hombros"
          onPress={() => navigation.navigate('ShouldersScreen')}
        />
      </View>
    );
  }
  export default GymScreen;