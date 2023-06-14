import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";

const Board = () => {

    const style = StyleSheet.create({
        window: {
            alignItems:"center",
            backgroundColor:"#F44",
            height:"100%",
        },
        texto: {
            color:"#FFF",
            fontSize:30,
            margin:15
        },
        board: {
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            height:500,
        },
        button: {
            width:70,
            height:70,
            margin:5,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#000",
        },
        generate: {
            backgroundColor: "#2E2",
            borderRadius:15,
            margin:20,
        },
    });

    const [seed, setseed] = useState();
    const [B, setB] = useState([]);
    const [I, setI] = useState([]);
    const [N, setN] = useState([]);
    const [G, setG] = useState([]);
    const [O, setO] = useState([]);

    const generateBoard = () => {
        let b = [];
        let i = [];
        let n = [];
        let g = [];
        let o = [];
        for (let index = 0; index < 5; index++) {
            // B
            let nb = Math.floor((Math.random() * 15)+1);
            while (b.includes(nb)) { nb = Math.floor((Math.random() * 15)+1); }
            b.push(nb );
            // I
            let ni = Math.floor((Math.random() * 15)+16);
            while (i.includes(ni)) { ni = Math.floor((Math.random() * 15)+16); }
            i.push(ni );
            // N
            let nn = Math.floor((Math.random() * 15)+31);
            while (n.includes(nn)) { nn = Math.floor((Math.random() * 15)+31); }
            n.push(nn );
            // G
            let ng = Math.floor((Math.random() * 15)+46);
            while (g.includes(ng)) { ng = Math.floor((Math.random() * 15)+46); }
            g.push(ng );
            // O
            let no = Math.floor((Math.random() * 15)+61);
            while (o.includes(no)) { no = Math.floor((Math.random() * 15)+61); }
            o.push(no );
        }
        setB(b);
        setI(i);
        setN(n);
        setG(g);
        setO(o);
    }

    return (
        <View style={style.window}>
            <View style={style.board}>
                <View>
                    <View style={style.button}>
                        <Text style={style.texto}>B</Text>
                    </View>
                    { B.map( (n) => { return (
                        <Button number = {n} />
                    )})}
                </View>
                <View>
                    <View style={style.button}>
                        <Text style={style.texto}>I</Text>
                    </View>
                    { I.map( (n) => { return (
                        <Button number = {n} />
                    )})}
                </View>
                <View>
                    <View style={style.button}>
                        <Text style={style.texto}>N</Text>
                    </View>
                    { N.map( (n) => { return (
                        <Button number = {n} />
                    )})}
                </View>
                <View>
                    <View style={style.button}>
                        <Text style={style.texto}>G</Text>
                    </View>
                    { G.map( (n) => { return (
                        <Button number = {n} />
                    )})}
                </View>
                <View>
                    <View style={style.button}>
                        <Text style={style.texto}>O</Text>
                    </View>
                    { O.map( (n) => { return (
                        <Button number = {n} />
                    )})}
                </View>
            </View>
            <TouchableOpacity onPress={generateBoard} style={style.generate}>
                <Text style={style.texto}>GENERATE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Board;