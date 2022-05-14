import { Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
// import { Surface, TouchableRipple, TouchableOpacity } from 'react-native-paper';
// import { Feather } from 'react-native-vector-icons';
// import colors from '../constants/colors';
// import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
// // import { black, blue100 } from 'react-native-paper/lib/typescript/styles/colors';

const AppHeader = () => {
    return (
        <View>
            <Surface style={style.color}>
                <View style={style.view}>
                    <Text style={colors.white}>Home</Text>
                    {/* <TouchableOpacity>
                        <Feather name="menu" size='24'></Feather>
                    </TouchableOpacity> */} 

                    {/* Suno, use material icons.. call it directly just import materialicons library and use icons */}

                </View>
                <View style={style.view}></View>
                <View style={style.view}></View>
            </Surface>

        </View>
    )

}

export default AppHeader;

const style = StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
    },


    view: {
        flex: 1,
        backgroundColor: 'yellow',
        margin: 10,
    },

    color: {
        color: 'black',
        backgroundColor: 'blue',
    },

})