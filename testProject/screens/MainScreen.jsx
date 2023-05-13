import {StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";
import DishCard from "./../components/DishCard";
import {StatusBar} from "expo-status-bar";

export const MainScreen = ({navigation}) => {
    const [dish, setDish] = useState([]);
    const [hasFiltered, setFiltered] = useState(false);
    const [filteredDish, setFilteredDish] = useState([]);

    useEffect(()=> {
        axios.get('http://192.168.0.7:1337/api/dishes?populate=*')
            .then(res => {
                const data = res.data.data
                setDish(data)
            })
            .catch(err => console.log(err))
    },[])

    const filterHandler = (type) => {
        setFiltered(true)
        const filteredDishes = dish.filter(item => item.attributes.dishType === type)
        setFilteredDish(filteredDishes)
    }
    const navigateHandler = (id) => {
        navigation.navigate('Dish', {id:id})
    }
    return (
        <View style={styles.container}>
            <View style={styles.filter}>
                {hasFiltered ?  <Pressable color={'#292f3f'} style={({pressed}) => [{borderWidth: pressed ? 1 : 0}, styles.button]} onPress={() => setFiltered(false)}><Text style={styles.btnText}>Reset</Text></Pressable> : null}
                <Pressable style={({pressed}) => [{borderWidth: pressed ? 1 : 0}, styles.button]} onPress={() => filterHandler('Soup')}><Text style={styles.btnText}>Soup</Text></Pressable>
                <Pressable style={({pressed}) => [{borderWidth: pressed ? 1 : 0}, styles.button]} onPress={() => filterHandler('Vegan')}><Text style={styles.btnText}>Vegan</Text></Pressable>
                <Pressable style={({pressed}) => [{borderWidth: pressed ? 1 : 0}, styles.button]} onPress={() => filterHandler('Italia')}><Text style={styles.btnText}>Italia</Text></Pressable>
            </View>
            <ScrollView>{hasFiltered ? filteredDish.map(item => <TouchableOpacity key={item.id} onPress={()=> navigateHandler(item.id)}><DishCard name={item.attributes.dishName} type={item.attributes.dishType} url={`http://192.168.0.7:1337${item.attributes.dishPhoto.data.attributes.url}`}/></TouchableOpacity>)
                : dish.map(item => <TouchableOpacity key={item.id} onPress={()=> navigateHandler(item.id)}><DishCard name={item.attributes.dishName} type={item.attributes.dishType} url={`http://192.168.0.7:1337${item.attributes.dishPhoto.data.attributes.url}`}/></TouchableOpacity>) }
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11151E',
        flexDirection: 'column',
        paddingTop: 20
    },
    filter: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },
    button: {
        width:80,
        height: 25,
        backgroundColor: '#292f3f',
        borderRadius: 50,
        borderColor: 'white',
    },
    pressedBtn: {
        borderColor: 'white',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 16,
        textAlign: "center",
        color: 'white',
    },
    img: {
        width: 50,
        height: 50
    }
});
