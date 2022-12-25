import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
    return (
        <View style={styles.container}>
            <Clock />
        </View>
    )
}

const Clock = () => {
    const date = useClock()

    return (
        <View>
            <Text>現在時刻</Text>
            <Text>{date.toLocaleTimeString()}</Text>
        </View>
    )
}

const useClock = () => {
    const [date, setDate] = useState(() => new Date())

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    }, [])

    return date
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
