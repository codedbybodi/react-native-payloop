import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native"

const subscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id : string }>();
    return (
        <View>
            <Text>Subscription Details: {id}</Text>
            <Link href="/"></Link>
        </View>
    )
}

export default subscriptionDetails