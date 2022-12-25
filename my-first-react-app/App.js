import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Welcome } from "./Welcome"

export default function App() {
    return(
        <View style={styles.container}>
            <Welcome name="Bob" />
            <Welcome name="Sara" />
            <Welcome name="Edite" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})
