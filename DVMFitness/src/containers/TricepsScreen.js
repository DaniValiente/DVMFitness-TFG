import * as React from 'react';
import { ScrollView, Text,Image,FlatList} from "react-native";
import body from "../styles/body";
const DATA = [
{titulo:'Extension de Triceps en Polea Alta',imagen:require('../assets/ExtensionTricepsPolea.jpg'),explicacion:'Realizamos una extensión de los codos, llevando el mango de la polea hacia abajo, sin despegar los codos de los lados del cuerpo y únicamente movilizando el antebrazo. Espiramos al final del movimiento y regresamos lentamente a la posición inicial.'},
{titulo:'Extensión de Triceps con Mancuerna',imagen:require('../assets/ExtensionTricepsMancuerna.jpg'),explicacion:'Para hacer una extensión del músculo tríceps, acuéstate con una pesa en la mano. Apunta la parte superior del brazo hacia arriba, con el codo flexionado en un ángulo de 90 grados. Endereza el codo lentamente, moviendo la pesa hacia arriba. Luego, baja lentamente la pesa a la posición inicial.'},
{titulo:'Extensión de Triceps en banco',imagen:require('../assets/ExtensionTricepsBanco.jpg'),explicacion:'Siempre debes mantener levemente flexionados los codos de manera de mantener constante la presión sobre los triceps. Lentamente debes flexionar los codos para bajar la parte superior del cuerpo hacia el suelo, hasta alcanzar un ángulo de 90 grados formado con los brazos. La espalda debe permanecer cerca del banco.'}
]
function TricepsScreen({ route }) {
    console.log(route)
    return (
        <View style={body.contenedor}>
        <Text style={body.introduccion}>Quizás no lo sepas, pero el músculo más grande de tus brazos no es el bíceps, sino el tríceps, con sus tres cabezas. Así que nunca tendrás unas extremidades grandes y fuertes si no atacas correctamente y a conciencia sus tres partes. </Text>
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
      </View>
    );
  }
  export default TricepsScreen;