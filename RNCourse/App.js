import { useState } from "react"
import { StyleSheet, ScrollView, View, FlatList, Button } from "react-native"
import { StatusBar } from "expo-status-bar"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function endAddGoalHandker() {
        setModalIsVisible(false)
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]) // this function automatically receive state by React
        endAddGoalHandker()
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandker}
                    visible={modalIsVisible}
                />
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
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            )
                        }}
                        keyExtractor={(item, index) => {
                            return item.id
                        }}
                    />
                </View>
            </View>
        </>
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
