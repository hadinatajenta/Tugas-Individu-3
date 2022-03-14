import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const NavBottom = () => {
    return (
        <View style={navStyle.copyright}>
            <Text style={navStyle.textCopyright}>Copyright Hadinata-119140067</Text>
        </View>
    )
}

const navStyle = StyleSheet.create({
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        top: 850,
        left: 100,
    },
    textCopyright:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default NavBottom