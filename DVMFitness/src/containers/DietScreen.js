import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import body from "../styles/Body";
function DietScreen({ navigation }) {
    return (
        <View style={body.contenedor}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  export default DietScreen;