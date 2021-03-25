import * as React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { gql, useQuery } from '@apollo/client'

const RESTAURANTS_QUERY = gql`
query restaurants {
    restaurants{
        name,
        logo,
        minimumOrderAmount,
        overallRating,
        estimatedDeliveryTime,
        menus{
        categories {
            name
            }
        },
        workingHours {
            start,
            end
        }
    }
}
`

function RestaurantsList() {
    const { loading, data } = useQuery(RESTAURANTS_QUERY)

    const RestaurantCards = ({ restaurants}) => {
    return <View style={styles.bigcard}>
        <View style={styles.imageview}>
            <Image  style={styles.image} source={{uri: restaurants.logo}}/>
        </View>
        <View style={styles.line}>
            <Text style={styles.text} > 09.00 to 22.00 </Text>
            <Text style={styles.header}>{restaurants.name}</Text>
            <Text style={styles.categories}>Hamburger {restaurants.categories}</Text>  
        </View>
        <View style={styles.info}>
            <Image style={styles.icon} source={require('../assets/low-price-icon.jpg')}/>
            <Text style={styles.infoText}> {restaurants.minimumOrderAmount} TL </Text>
            <Image style={styles.icon} source={require('../assets/timer-icon.jpg')}/>
            <Text style={styles.infoText}> {restaurants.estimatedDeliveryTime} minutes </Text>
            <Image style={styles.iconx} source={require('../assets/food-delivery-icon.jpg')}/>
            <Text style={styles.infoText}> 0 TL </Text>
        </View>
    </View>
    };

    if (loading) return <Text>Loading ...</Text>;
    return (
        <View >
        <FlatList 
        showsVerticalScrollIndicator= {false}
        keyExtractor={restaurants => restaurants.id}
        data={data.restaurants}
        renderItem={({ item }) => <RestaurantCards restaurants={item}/>
        }
        />
        </View>
    );
}

const styles = StyleSheet.create({
    bigcard: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 163,
        width: 390,
        margin:10,
        padding: 5
    },
    image:{
        width:100,
        height: 100,
        alignSelf: 'flex-start'
    },
    imageview:{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    line:{
        borderBottomWidth:1,
        flexDirection: 'column',
        borderColor:'#B2B2B2',
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft:100,
    },
    text:{
        color: '#B2B2B2',
        alignSelf: 'flex-start',
        marginLeft: 100,
        marginBottom: 5
    },
    categories:{
        color: '#B2B2B2',
        alignSelf: 'flex-start',
        marginLeft: 100,
        marginBottom: 5,
        marginTop: 10
    },
    info:{
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        marginTop: 7,
        marginLeft: 18,
        width:17,
        height: 17,
        alignSelf: 'flex-start',
    },
    iconx: {
        marginTop: 7,
        marginLeft: 15,
        width:25,
        height: 20,
        alignSelf: 'flex-start',
    },
    infoText:{
        marginTop: 7,
        color: '#B2B2B2',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 12,
    }
  })

export default RestaurantsList;
