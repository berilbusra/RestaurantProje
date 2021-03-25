import * as React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { gql, useQuery } from '@apollo/client'

const MENU_CATEGORIES_QUERY = gql`
query menuCategories {
    menuCategories{
        id
        name
        items{
            internalName
        }
    }
}
`

function MenuCategoriesList() {
    const { loading , data } = useQuery(MENU_CATEGORIES_QUERY)

    const Items = ({name}) => (
        <View style={styles.card}>
        <Image style={styles.icon} source={require('../assets/restaurant-icon.jpg')}/>
        <View>
            <Text style={styles.title}>{name}</Text>
        </View>
        </View>
      );

    if (loading) return <Text>Loading ...</Text>;
    return (
        <View >
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={menuCategories => menuCategories.id}
        data={data.menuCategories}
        renderItem={({ item }) => <Items name={item.name} />
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
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 100,
        width: 100,
        marginVertical: 8,
        marginHorizontal: 5,
        borderBottomColor:'#F6BD2F',
        borderBottomWidth:25
    }
  })
  
export default MenuCategoriesList;
