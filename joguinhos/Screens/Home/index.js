import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {

    const style = StyleSheet.create({
        texto: {
            color:"#000"
        }
    });

    return (
        <View>
            <Text style={style.texto}>HOME</Text>
        </View>
    );
}

export default Home;