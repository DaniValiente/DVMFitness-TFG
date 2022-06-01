import React, { useEffect, useCallback } from "react";
import { ScrollView, Text,Image} from "react-native";
import body from "../styles/body";
const DATA = [{titulo:'Press Militar',imagen:require('../assets/PressMilitar.jpg'),explicacion:''},
{titulo:'Elevaciones Frontales con Disco',imagen:require('../assets/ElevacionesFrontales.jpg'),explicacion:''},
{titulo:'Elevaciones Laterales Sentado',imagen:require('../assets/ElevacionLateral.png'),explicacion:''}
]
function ShuldersScreen({ navigation }) {
    return (
        <ScrollView style={body.contenedor}>
        <Text style={body.text}>La espalda es una zona muscular muy completa y compleja. Tenemos muchos músculos con distintas funciones y para poder entrenar cada uno de ello debemos realiar diversos ejercicios. Para ello 
            tenemos nos ejemplos que son muy completos con los que podemos entrenar para mejorar nuestra espalda </Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return ( 
                        <>
                        <Text style={body.title}>{item.titulo}</Text>
                            <Image
                                style={body.image}
                                resizeMode='contain'
                                source={item.imagen}
                            />
                            <Text style={body.text}>{item.explicacion}</Text>

                        </>
                    )
                }}
            />
      </ScrollView>
    );
  }
  export default ShuldersScreen;