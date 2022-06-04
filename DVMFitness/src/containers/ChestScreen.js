import * as React from 'react';
import { ScrollView, Text,Image,FlatList} from "react-native";
import body from "../styles/body";
const DATA = [
{titulo:'Press Banca inclinado',imagen:require('../assets/PressBancaInclinado.jpg'),explicacion:'Túmbate en el banco boca arriba y apoya los pies en el suelo. Asegúrate de que los omóplatos (escápulas) estén bien apoyados en el banco. Coge la barra con las manos separadas el ancho de los hombros y sácala de los soportes con cuidado hasta que quede por encima de tu pecho, con los brazos completamente extendidos'},
{titulo:'Flexiones',imagen:require('../assets/Flexiones.jpg'),explicacion:'Coloca las manos debajo de los hombros con los dedos índices apuntando hacia delante. Para mayor estabilidad en los brazos y en los hombros, mantén las manos firmes en el suelo e intenta rotar los codos hacia fuera. Dedos índice apuntando hacia delante. Coloca las manos justo debajo de los hombros.'},
{titulo:'Cruce con Poleas',imagen:require('../assets/CrucePoleas.jpg'),explicacion:'Debemos colocarnos en medio de una polea alta y tomar en ambas manos las asas de las mismas. Inclinamos u poco el torso hacia adelante, flexionamos ligeramente los codos y las rodillas y separamos un poco los pies. Con los puños cerrados y sin modificar la flexión de los codos, movilizamos los brazos desde arriba hacia adelante del torso mientras realizamos un cruce de polea, pasando una mano por encima de otra. Inspiramos al final del movimientos y comenzamos el regreso de manera controlada a la posición inicial.'}
]
function ChestScreen({ route }) {
    console.log(route)
    return (
        <View style={body.contenedor}>
        <Text style={body.introduccion}>Las rutinas de pecho son las preferidas por el usuario medio del gimnasio. Un pectoral desarrollado es la seña de identidad de un hombre grande y fuerte.  </Text>
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
  export default ChestScreen;