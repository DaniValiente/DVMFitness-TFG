import React, { useEffect, useCallback } from "react";
import { ScrollView, Text,Image} from "react-native";
import body from "../styles/Body";
function AboutMeScreen({ navigation }) {
    return (
        <ScrollView style={body.contenedor}>
        <Text>Mi nombre es Daniel Valiente, he sido el desarrollador de esta app enfocada en el mundo fitness, tengo 20 años y soy sevillano.
         Mi objetivo con esta aplicación era juntar y mezclar mis dos pasioness, la informatica y el mundo fitness </Text>
         <Image style={body.image} source={require('../assets/image.png')}></Image>
      </ScrollView>
    );
  }
  export default AboutMeScreen;