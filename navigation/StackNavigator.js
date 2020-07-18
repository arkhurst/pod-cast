import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Channel from  '../screens/Channel';
import Music from '../screens/Music';

const Stack  = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator>
             <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
              name="Channel"
              component={Channel}
              options={{
                  headerShown:false
              }}
            />
            <Stack.Screen 
             name="Music"
             component={Music}
             options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;