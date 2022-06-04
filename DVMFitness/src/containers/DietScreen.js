import * as React from 'react';
import { ScrollView, Text,Image, FlatList} from "react-native";
import body from "../styles/body";
const DATA =[
{titulo:'Tortitas de plátano sin gluten',imagen: require('../assets/tortitas.jpg'),ingredientes:'Ingredientes: - 2 huevos - 1 plátano y medio',receta:'Cortamos la fruta en trozos pequeños y lo ponemos en un vaso para posteriormente batirlo junto a los huevos.-Procedamos a batirlo durante varios segundos hasta que quede una mezcla homogénea y sin grumos. -Cuando tenemos nuestra mezcla le vertimos en una sarten caliente y esperamos que las tortitas tengan burbujas para darles la vuelta. -Una vez dada la vuelta espeamos que estén a nuestro gusto y listo. Ya tendríamos un delicioso y saludable desayuno o merienda.'},
{titulo:'Porridge de avena',imagen: require('../assets/porridge.jpg'),ingredientes:'Ingredientes: 200-250 ml de leche o agua -4 cucharadas de copos de avena',receta:'Ponemos a calentar la leche o agua en un cazo (si queréis podéis poner cáscara de naranja, o una vaina de vainilla). -Cuando comience a hervir, añadimos los copos de avena (retiramos primero la cáscara de naranja o vaina de vainilla si la pusimos) y cocinamos a fuego muy lento durante 2 minutos, removiendo siempre. -Cuando tengamos una papilla algo grumosa, apagamos el fuego y dejamos reposar 1 minuto. -Añadimos canela, frutos secos, un chorrito de miel, fruta fresca a gusto, y servimos.'},
{titulo:'Yogur con semillas de chía y fruta',imagen: require('../assets/yogur.png'),ingredientes:'Ingredientes: -1 yogur natural desnatado -1 ó 2 cucharaditas de semillas de chía lavadas y escurridas -frutas fresca de temporada',receta:'Cortar la fruta en trocitos o licuarla, según como prefiráis tomarla. Mezclar el yogur con las semillas de chía y colocar la fruta en trozos por encima. Si preferís usar la fruta licuada para endulzar el yogur, mezclar todos los ingredientes juntos. Si no os gustan las semillas enteras podéis molerlas en seco con la licuadora.'}
]
function DietScreen({ navigation }) {
    return (
      <View style={body.contenedor}>
      <Text style={body.introduccion}>Para conseguir los objetivos propuestos por cada ususario debemos mejorar nuestra alimentación ya que es una de las mayores claves no solo para mejorar la estética de nuestro cuerpo sino tambien para mejorar nuestra salud y bienestar.
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
    </View>
    );
  }
  export default DietScreen;