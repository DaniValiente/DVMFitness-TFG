import React, { useEffect, useCallback } from "react";
import { ScrollView, Text,Image} from "react-native";
import body from "../styles/body";
const DATA = [
{titulo:'Press Militar',imagen:require('../assets/PressMilitar.jpg'),explicacion:'Cogemos la barra con las manos en pronación (con las palmas mirando hacia adelante). Las manos deben situarse a una anchura algo superior a la de los hombros.  Sacamos la barra de su soporte y la colocamos sobre la parte alta de nuestro pecho, a la altura de nuestras clavículas.'},
{titulo:'Elevaciones Frontales con Disco',imagen:require('../assets/ElevacionesFrontales.jpg'),explicacion:'Coge un disco con ambas manos, agarrándolo firmemente de sus lados. Eleva el disco al frente, con los codos desbloqueados, hasta que el disco llegue a la altura de los hombros. Vuelve a bajar el peso de forma controlada sin que el disco llegue a rebotar o descansar en las piernas.'},
{titulo:'Elevaciones Laterales Sentado',imagen:require('../assets/ElevacionLateral.png'),explicacion:'Las manos deben colgar a los lados del cuerpo mientras los codos siempre se conservan levemente flexionados y desde allí, inspiramos para elevar los brazos hasta la horizontal de manera que queden paralelos al suelo, tal como si fuéramos un pájaro que despliega sus alas'}
]
function ShuldersScreen({ navigation }) {
    return (
        <ScrollView style={body.contenedor}>
        <Text style={body.text}>Los hombros son, quizás, uno de los grupos más infravalorados cuando hablamos de entrenamientos en gimnasio y sin embargo son al mismo tiempo quizás la parte de nuestro cuerpo que más deberíamos cuidar y entrenar junto con nuestro core. Por su estructura, los hombros intervienen en infinidad de movimientos y acciones de nuestro día a día del tren superior y suelen estar no atrofiados pero sí atrasados muscularmente hablando.</Text>
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