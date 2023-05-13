import {useEffect, useState} from "react";
import axios from "axios";
import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import {StatusBar} from "expo-status-bar";


export const DishScreen = ({route}) => {
    const [dish, setDish] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {id} = route.params;
    useEffect(() => {
        axios.get(`http://192.168.0.7:1337/api/dishes/${id}?populate=*`)
            .then(res => {
                const data = res.data.data
                setDish(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                {isLoading ? <Text>Loading</Text> :
                    <View style={styles.container}>
                        <Image style={styles.img}
                               source={{uri: `http://192.168.0.7:1337${dish.attributes.dishPhoto.data.attributes.url}`}}></Image>
                        <Text style={styles.title}>{dish.attributes.dishName}</Text>
                        <Text style={styles.type}>{dish.attributes.dishType}</Text>
                        <Text style={styles.description}>{dish.attributes.description}</Text>
                    </View>
                }
                <StatusBar style="auto"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11151E',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
        color: 'white'
    },
    type: {
        fontSize: 15,
        color: 'white',
        fontStyle: 'italic'
    },
    description: {
        fontSize: 18,
        color: 'white',
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        marginTop: 20
    }
});
