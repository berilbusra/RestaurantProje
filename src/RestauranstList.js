import * as React from 'react';
import {FlatList} from 'react-native';
import {View, Text, Card } from 'react-native-ui-lib';
import { gql, useQuery } from '@apollo/client'

const RESTAURANTS_QUERY = gql`
query restaurants {
    restaurants{
        id
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
    return <View flex spread marginB-10>
        
        <Card  flex marginH-10 paddingB30  >
            <View row>
                <Card.Section padding-15 
                imageSource={{uri: restaurants.logo}}
                imageStyle={{width: 100, height: 100, flex: 1, alignSelf: 'flex-start'}}/>
                <Card.Section paddingT-30 paddingR-85
                    content={[
                        {text: restaurants.workingHours[0].start + ' - ' + restaurants.workingHours[0].end},
                        {text: restaurants.name},
                        {text: '    '},
                        {text: 'Hamburger'}
                    ]}
                    contentStyle={{flex:1 }}
                />
            </View>
            <View flexDirection={'column'} style={{borderTopColor:'#B2B2B2', borderTopWidth:1}} ></View>
            <View row>
                <Card.Section padding-10
                imageSource={require('../assets/low-price-icon.jpg')}
                imageStyle={{width: 20, height: 20, flex: 1 }}
                />
                <Card.Section paddingT-10
                content={[{text:restaurants.minimumOrderAmount + ' TL'}]}/>
                <Card.Section padding-10 
                imageSource={require('../assets/timer-icon.jpg')}
                imageStyle={{width: 20, height: 20, flex: 1 }}
                />
                <Card.Section paddingT-10
                content={[{text:restaurants.estimatedDeliveryTime + ' minutes'}]}/>
                <Card.Section padding-10 
                imageSource={require('../assets/food-delivery-icon.jpg')}
                imageStyle={{width: 20, height: 20, flex: 1 }}
                />
                <Card.Section paddingT-10
                content={[{text:'0 TL'}]}
                />
            </View>
        </Card>
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

export default RestaurantsList;
