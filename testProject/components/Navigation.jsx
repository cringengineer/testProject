import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainScreen} from "../screens/MainScreen";
import {DishScreen} from "../screens/DishScreen";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator()
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    title: 'Recipe Book',
                    headerStyle: {
                        backgroundColor:'#11151E',
                    },
                    headerTintColor: '#fff',
                }} name='Main' component={MainScreen}/>
                <Stack.Screen options={{
                    title: 'Recipe Book',
                    headerStyle: {
                        backgroundColor:'#11151E',
                    },
                    headerTintColor: '#fff',
                }} name='Dish' component={DishScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;