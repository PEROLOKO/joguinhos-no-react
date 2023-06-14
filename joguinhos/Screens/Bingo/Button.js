import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const style = StyleSheet.create({
    labelOff: {
        color:"#000",
        fontSize:30,
    },
    labelOn: {
        color:"#FFF",
        fontSize:30,
    },
    button: {
        width:70,
        height:70,
        margin:5,
        justifyContent:"center",
        alignItems:"center",
    },
    on: { backgroundColor: "#444"},
    off: { backgroundColor: "#FFF"},
});

const Button = ({number}) => {

    const [on, setOn] = useState(false);
    const [btnStyle, setBtnStyle] = useState([style.off,style.button]);
    const [lblStyle, setLblStyle] = useState(style.labelOff);

    const handlePress = () => {
        if (on) {
            setOn(false);
            setBtnStyle([style.off,style.button]);
            setLblStyle(style.labelOff);
        } else {
            setOn(true);
            setBtnStyle([style.on,style.button]);
            setLblStyle(style.labelOn);
        }
    }

    return (
        <TouchableOpacity style={btnStyle} onPress={handlePress}>
            <Text style={lblStyle}>{number}</Text>
        </TouchableOpacity>
    )
}

export default Button;