import React, { useEffect, useCallback } from "react";
import { ScrollView, Text,Image} from "react-native";
import body from "../styles/body";
const DATA = [{titulo:'Curl en Polea',imagen:require('../assets/CurlPolea.png'),explicacion:'La empuñadura de metal del cable debe extenderse para que puedas agarrarlo cómodamente con las manos con los brazos extendidos y las palmas hacia arriba. Dobla la barra hacia tu pecho con una flexión de codos y luego bájala lentamente hacia abajo.'},
{titulo:'Curl Scott',imagen:require('../assets/CurlScott.jpg'),explicacion:'De pie, sujetando una barra con el agarre a la anchura de los hombros y los brazos extendidos hacia abajo. Mantener las rodillas ligeramente flexionadas. Manteniendo el tronco erguido (no inclinarse hacia atrás al levantar el peso), contraer los bíceps para elevar la barra.'},
{titulo:'Curl con mancuernas',imagen:require('../assets/CurlMancuernas.jpg'),explicacion:'Sujeta las pesas con un agarre supino (las palmas de las manos mirando hacia arriba) y asegúrate de que tu antebrazo y el suelo están colocados de forma paralela. Aprieta el bíceps para realizar el curl y baja la mancuerna. Después, vuelve a la posición inicial manteniendo el control. Repite con el otro brazo.'}
]
function BicepsScreen({ navigation }) {
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
  export default BicepsScreen;