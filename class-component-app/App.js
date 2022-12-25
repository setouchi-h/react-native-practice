import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>現在時刻</Text>
                <Text>{this.state.date.toLocaleTimeString()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
