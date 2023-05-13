import {StyleSheet, View} from 'react-native';
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <View style={styles.container}>
            <Navigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#11151E',
        flexDirection: 'column',
        paddingTop: 50
    },
});
