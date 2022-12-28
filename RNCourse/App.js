import { useState } from "react"
import { StyleSheet, TextInput, View, FlatList } from "react-native"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]) // this function automatically receive state by React
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                {/* <ScrollView>
                    {courseGoals.map((goal) => (
                        <View key={goal} style={styles.goalItem}>
                            <Text style={styles.goalText}>{goal}</Text>
                        </View>
                    ))}
                </ScrollView> */}
                <FlatList // render only visible items
                    data={courseGoals} // automatically pick up key in data
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} />
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 4,
    },
})
