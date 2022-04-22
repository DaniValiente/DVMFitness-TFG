import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import body from "../styles/Body";
function AboutMeScreen({ navigation }) {
    return (
        <View style={body.contenedor}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  export default AboutMeScreen;