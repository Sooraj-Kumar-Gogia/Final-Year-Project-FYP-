import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, Modal } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import styles from '../../style/ExternalStyle';
import ProductDisplaySeller from './ProductDisplaySeller';

export default MyStore = ({ route }) => {

    navigation = useNavigation()
    const [data, setData] = useState([]);
    const [reviews, setreviews] = useState([]);
    // const userId = "63187878d73eff844b5de2c0"
    const userId = route.params.userId

    React.useEffect(() => {
        fetch(`http://10.0.2.2:3000/getproductsforstore/${userId}`)
            .then((res) => res.json())
            .then(data => {
                setData(data);
            })

    }, [])

    React.useEffect(() => {
        fetch(`http://10.0.2.2:3000/fetchrating/${userId}`)
            .then((res) => res.json())
            .then(data => {
                setreviews(data);

            })

    }, [])


    return (
        <View>
            <ScrollView>

                <View>
                    <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} resizeMode='cover' style={{ height: 150, width: "100%" }} />
                    <Text style={styles.NameHeading}>My Store ({data.length})</Text>
                </View>

                {data.map((item, ndx) => (
                    <View>
                        <Card style={styles.productcatalog} onPress={() => { navigation.navigate('ProductDisplaySeller', { item_id: item._id, userId: userId }) }}>
                            <View key={ndx}>
                                {/* <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} /> */}
                                <Image source={{ uri: item.image }} style={styles.ProductImage} />
                                <Card.Title title={item.name} />
                                <Card.Content>
                                    <Text style={{ fontSize: 18, color: 'darkblue', fontFamily: 'Poppins', fontWeight: 'bold', marginLeft: 8, }}>Rs. {item.price}/-</Text>
                                </Card.Content>
                            </View>
                        </Card>
                    </View>
                ))}



                {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    <View style={{ flex: 2, flexDirection: 'column', flexWrap: 'wrap' }}>

                        <Card style={styles.storeproductcatalog}>
                            <View>
                                {/* <Image source={{ uri: item.image }} style={styles.storeProductImage} /> */}
                {/* <Image source={require('myproject/src/dishes/dish1.jpg')} resizeMode='cover' style={styles.storeProductImage} /> */}
                {/* <Card.Title title={item.name} subtitle={item._id} /> */}
                {/* <Card.Title title="{item.name}" subtitle="{item.price}" /> */}
                {/* <Card.Content> */}
                {/* </Card.Content> */}
                {/* </View> */}
                {/* // </Card> */}

                {/* // </View> */}
                {/* // </View> */}




                <Text style={styles.NameHeading}>Reviews ({reviews.length})</Text>
                {/* <Text style={{width: "100%", padding: 20, }}>_________________________________________________________</Text> */}

                

                {reviews.map((item, ndx) => (
                    <View key={ndx}>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={25}
                            startingValue={item.rated}
                            // value={reviews.rated}
                            readonly={true}
                            style={{ marginLeft: 25, marginTop: 20, height: 20, width: 100, }} />
                        <Text style={{ marginTop: 15, marginLeft: 30, fontSize: 16, fontFamily: 'Poppins', marginLeft: 10, }}>{item.comment}</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    )
}