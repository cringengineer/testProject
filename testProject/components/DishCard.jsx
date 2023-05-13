import {Image, StyleSheet, Text, View} from 'react-native';

const DishCard = ({url, type, name}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: url}}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.type}>{type}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        marginTop: 50,
        flexDirection: "row",
        backgroundColor: '#292f3f',
        borderRadius: 40,
        justifyContent: "space-around",
        alignItems: "center",
        height: 170,
        paddingLeft: 10
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
        justifyContent: "space-around"
    },
    name: {
        color: 'white',
        fontSize: 23,
        width: 210,
        marginBottom: 10
    },
    type: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic'
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 100
    }
});
export default DishCard;