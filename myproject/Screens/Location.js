import * as React from 'react';
import { TabNavigator } from "react-navigation";
import { Container, Text } from "native-base";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// global.currentScreenIndex = 'Dashboard';
//Import all required component
import { View, StyleSheet, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
   


class Location extends Component {

  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    Geolocation.getCurrentPosition((info) => {
      let lat = info.coords.latitude;
      let long = info.coords.longitude;

      console.log(lat);
      console.log(long);
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 37.4219288,
        longitudeDelta: -122.0840806,
      };
      this.setState({ initialPosition: initialRegion });
    });
  }

  render() {
    const { modalVisible } = this.state;
    const { navigate } = this.props.navigation;
    
    // const token_data = token_value();
    // console.log("token_homes_2st"+token_data);

    return (
      <View style={styles.container}>
        <MapView  
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsUserLocation={true}         
          userLocationCalloutEnabled={true}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 >
              <Marker coordinate={this.state.initialPosition} />
        </MapView>

        <View style={{alignContent: "center", alignItems: "center"}}>
            <Button style={{backgroundColor: '#10047c', marginTop: 40, paddingLeft: 8, paddingRight: 8, width: '50%'}} mode="contained" onPress={() => this.props.navigation.navigate('ServiceDetailStep3',  {
              paramKey: 'Pakistan', hello: 'zindabad'
            })}>
             Next
          </Button>
        </View>  
      </View>
    );
  }
}
export default Location;


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontWeight: "400",
    color: "#000",
    fontFamily:
      "Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },

  map: {
    height: 550,
    width: 415,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});




// class LocationA extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error:null,
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//        (position) => {
//          console.log("wokeeey");
//          console.log(position);
//          this.setState({
//            latitude: position.coords.latitude,
//            longitude: position.coords.longitude,
//            error: null,
//          });
//        },
//        (error) => this.setState({ error: error.message }),
//        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//      );
//    }


//   render() {
//     return (
//       <View>
//         <Text> {this.state.latitude} </Text>
//         <Text> {this.state.longitude} </Text>
//         <Text> {this.state.error} </Text>
//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default LocationA;