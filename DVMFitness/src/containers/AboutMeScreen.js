import * as React from 'react';
import { ScrollView, Text,Image} from "react-native";
import body from "../styles/body";
function AboutMeScreen() {
    return (
        <ScrollView style={body.contenedor}>
        <Text style={body.introduccion}>Mi nombre es Daniel Valiente, he sido el desarrollador de esta app enfocada en el mundo fitness, tengo 20 años y soy sevillano.
         Mi objetivo con esta aplicación era juntar y mezclar mis dos pasioness, la informatica y el mundo fitness </Text>
         <Image style={body.image} source={require('../assets/image.jpg')}></Image>
      </ScrollView>
    );
  }
  export default AboutMeScreen;