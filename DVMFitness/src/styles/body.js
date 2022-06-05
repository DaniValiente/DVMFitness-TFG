import { StyleSheet } from "react-native";
const body = StyleSheet.create({
    contenedor: {
        backgroundColor:'#000000',
        height: '100%'
    },
    button: {
        backgroundColor: '#FF2D00',
        borderRadius: 5,
        margin: 20,
        width: '50%',
        paddingVertical: 5,
        alignSelf: 'center',
        color:"#f194ff" 
    },
    title:{
        color:'#FF0000',
        alignSelf: 'center',
        fontSize:22
    },
    gym:{
        color:'#FFFFFF',
        fontWeight:'bold',
        alignSelf: 'center',
        fontSize:22
    },
    text:{
        color:'#FFFFFF',
        fontSize:11
    },
    image:{
        width:120,
        alignSelf: 'center',
        height:120
    },
    mifoto:{
        width:240,
        alignSelf: 'center',
        height:240
    },
    introduccion:{
        color:'#FFFFFF',
        fontSize:14
    }
});
    export default body;