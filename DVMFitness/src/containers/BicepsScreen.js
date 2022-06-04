import * as React from 'react';
import { ScrollView, Text,Image,FlatList} from "react-native";
import body from "../styles/body";
const DATA = [{titulo:'Curl en Polea',imagen:require('../assets/CurlPolea.png'),explicacion:'La empuñadura de metal del cable debe extenderse para que puedas agarrarlo cómodamente con las manos con los brazos extendidos y las palmas hacia arriba. Dobla la barra hacia tu pecho con una flexión de codos y luego bájala lentamente hacia abajo.'},
{titulo:'Curl Scott',imagen:require('../assets/CurlScott.jpg'),explicacion:'De pie, sujetando una barra con el agarre a la anchura de los hombros y los brazos extendidos hacia abajo. Mantener las rodillas ligeramente flexionadas. Manteniendo el tronco erguido (no inclinarse hacia atrás al levantar el peso), contraer los bíceps para elevar la barra.'},
{titulo:'Curl con mancuernas',imagen:require('../assets/CurlMancuernas.jpg'),explicacion:'Sujeta las pesas con un agarre supino (las palmas de las manos mirando hacia arriba) y asegúrate de que tu antebrazo y el suelo están colocados de forma paralela. Aprieta el bíceps para realizar el curl y baja la mancuerna. Después, vuelve a la posición inicial manteniendo el control. Repite con el otro brazo.'}
]
function BicepsScreen({ route }) {
    console.log(route)
    return (
        <ScrollView style={body.contenedor}>
        <Text style={body.text}>El bíceps es un músculo que podemos entrenar de infinidad de formas distintas y casi siempre recurrimos a os mismos ejercicios.Te dej los trss mejores ejerccicios en mi opinión para agrander a un mas tus brazos </Text>
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