import AsyncStorage from "@react-native-async-storage/async-storage"

export const save = async (text, id) => {
    const key = `${id}`
    const value = JSON.stringify({
        text,
        id
    })

    await AsyncStorage.setItem(key, value)
}

export const remove = async (id) => {
    const key=`${id}`
    await AsyncStorage.removeItem(key)
}

export const loadAll = async () => {
    const keys = await AsyncStorage.getAllKeys()
    keys.sort()
    const entryList = await AsyncStorage.multiGet(keys)
    return entryList.map(entry => JSON.parse(entry[1]))
}