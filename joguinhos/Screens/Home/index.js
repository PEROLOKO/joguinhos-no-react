import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = ({navigation}) => {

    const style = StyleSheet.create({
        texto: {
            color:"#000"
        }
    });

    return (
        <View>
            <Text style={style.texto}>HOME</Text>
            <TouchableOpacity onPress={() => navigation.push("bingo")}>
                <Text style={style.texto} >BINGO</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;