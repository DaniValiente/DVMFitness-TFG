import * as React from 'react';
import { ScrollView, Text,Image,FlatList} from "react-native";
import body from "../styles/body";
const DATA = [
{titulo:'Prensa',imagen:require('../assets/Prensa.jpg'),explicacion:'Coloca los pies a la altura de las caderas en la plataforma para pies. Las rodillas deben estar a la misma altura que los dedos de los pies a lo sumo. Desliza el asiento cerca de tus pies hasta que tus caderas giren ligeramente hacia adelante. Tu espalda e inferior deben estar completamente sobre el respaldo.'},
{titulo:'Extensión de piernas',imagen:require('../assets/ExtensionPiernas.jpg'),explicacion:'Siéntate en la máquina con las dos piernas bajo la almohadilla. A la vez que exhalas, extiende tus piernas usando solo los cuádriceps hasta que estén completamente extendidas. Una vez que los cuádriceps están totalmente extendidos, aguanta un segundo y aprieta el músculo que estás trabajando.'},
{titulo:'Sentadillas con barra',imagen:require('../assets/Sentadillas.jpg'),explicacion:'Realizar la sentadilla frontal. Levanta la barra del estante o jaula. Con la barra sobre los hombros y el agarre seguro, flexiona las piernas y empuja hacia arriba. Estira ligeramente la columna y da un par de pasos hacia atrás.'}
]
function LegsScreen({ route }) {
    console.log(route)
    return (
        <View style={body.contenedor}>
        <Text style={body.introduccion}>El entrenamiento de pierna es clave para transformar el cuerpo, ya sea para perder grasa o para ganar volumen. Un entrenamiento enfocado en el tren inferior significa que más de la mitad de tu cuerpo va a estar trabajando durante ese entrenamiento.</Text>
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
  export default LegsScreen;