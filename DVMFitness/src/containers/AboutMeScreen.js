import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Text, FlatList, Image, RefreshControl } from "react-native";
import body from "../styles/Body";
function AboutMeScreen({ navigation }) {
    return (
        <ScrollView style={body.contenedor}>
        <Text>Mi nombre es Daniel Valiente, he sido el desarrollador de esta app enfocada en el mundo fitness, tengo 20 y soy sevillano.
         Mi objetivo con esta aplicación era juntar y mezclar mis dos pasioness, la informatica y el mundo fitness </Text>
         
      </ScrollView>
    );
  }
  export default AboutMeScreen;