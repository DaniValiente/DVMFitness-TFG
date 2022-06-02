import * as React from 'react';
import { ScrollView, Text,Image,FlatList} from "react-native";
import body from "../styles/body";
const DATA = [{titulo:'Dominadas',imagen:require('../assets/Domindas.png'),explicacion:'Colócate debajo de la barra de dominadas. Agárrala por encima colocando las manos un poco más abiertas que el ancho de los hombros. -Coloca los omóplatos hacia abajo y hacia atrás al tiempo que activas la espalda, el torso y los glúteos.-Baja el cuerpo lentamente para volver a comenzar.'},
{titulo:'Jalón al Pecho',imagen:require('../assets/JalonPecho.jpg'),explicacion:'Tira de la barra hacia la parte superior del pecho mientras aprietas los omóplatos. Los codos deben moverse hacia abajo y no hacia atrás. De forma lenta y controlada, lleva la barra a la posición inicial estirando completamente los brazos y estirando los dorsales. Repite el proceso las veces indicadas.'},
{titulo:'Remo con mancuernas',imagen:require('../assets/EspaldaMancuernas.png'),explicacion:'La espalda tiene que estar inmovilizada y el brazo que coge la mancuerna tiene que estar extendido hacia el lateral del cuerpo. En esta posición, inspira y eleva la mancuerna hacia la espalda mientras el brazo queda paralelo al cuerpo. Trata de llevar el codo hacia atrás, como si imitaras movimiento del remo.'}
]
function BackScreen({ route }) {
    console.log(route)
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
  export default BackScreen;