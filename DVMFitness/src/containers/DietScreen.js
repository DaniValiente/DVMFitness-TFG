import * as React from 'react';
import { ScrollView, Text,Image, FlatList} from "react-native";
import body from "../styles/body";
const DATA =[
{titulo:'Tortitas de plátano',imagen: require('../assets/image.jpg'),ingredientes:'Ingredientes: - 2 huevos - 1 plátano y medio',receta:'Cortamos la fruta en trozos pequeños y lo ponemos en un vaso para posteriormente batirlo junto a los huevos.-Procedamos a batirlo durante varios segundos hasta que quede una mezcla homogénea y sin grumos. -Cuando tenemos nuestra mezcla le vertimos en una sarten caliente y esperamos que las tortitas tengan burbujas para darles la vuelta. -Una vez dada la vuelta espeamos que estén a nuestro gusto y listo. Ya tendríamos un delicioso y saludable desayuno o merienda.'},
{titulo:'',imagen: require('../assets/image.jpg'),ingredientes:'',receta:''},
{titulo:'',imagen: require('../assets/image.jpg'),ingredientes:'',receta:''}
]
function DietScreen({ navigation }) {
    return (
      <ScrollView style={body.contenedor}>
      <Text style={body.text}>Para conseguir los objetivos propuestos por cada ususario debemos mejorar nuestra alimentación ya que es una de las mayores claves no solo para mejorar la estética de nuestro cuerpo sino tambien para mejorar nuestra salud y bienestar.
      Para ello os voy a recomendar 3 recetas fáciles, rápidas y saludables</Text>
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
                            <Text style={body.text}>{item.ingredientes}</Text>
                            <Text style={body.text}>{item.receta}</Text>

                        </>
                    )
                }}
            />
    </ScrollView>
    );
  }
  export default DietScreen;