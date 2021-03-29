import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Card, Image } from 'react-native-ui-lib';
import { gql, useQuery } from '@apollo/client'

const CUISINES_QUERY = gql`
query cuisines {
    cuisines{
        id
        name
        icon
    }
}
`

function CuisinesList() {
    const { loading , data } = useQuery(CUISINES_QUERY)

    const Items = ({name,icon}) => ( //icon is not used because in query there is no picture
        <View style={styles.container}>
            <Card height={100} flex paddingH-10 style={styles.card}>
                <Image style={styles.icon} source={require('../assets/restaurant-icon.jpg')}/> 
                <Text style={styles.title}>{name}</Text>
            </Card>
        </View>
      );

    if (loading) return <Text>Loading ...</Text>;
    return (
        <View style={styles.container}>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={cuisines => cuisines.id}
            data={data.cuisines}
            renderItem={({ item }) => <Items icon={item.icon} name={item.name} />
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'white'
        },
    icon: {
        width:40,
        height: 40,
        alignSelf: 'center',
        margin:20
    },
    container: {
        flex:1
    },
    card: {
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 5,
        borderBottomColor:'#F6BD2F',
        borderBottomWidth:25
    }
  })
  
export default CuisinesList;
