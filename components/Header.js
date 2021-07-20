import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';


const styles = StyleSheet.create({
    header : {
      height: 60,
      padding: 15,
      backgroundColor : 'darkslateblue'

    },

    headerText : {
        color:  "#ffffff",
        fontSize : 23,
        textAlign : 'center'
    }
  });


const Header = ({ title }) => {

    const [items, setItems] = useState([
        {id : uuid.v4(), text : 'Milk'},
        {id : uuid.v4(), text : 'Eggs'},
        {id : uuid.v4(), text : 'Bread'},
    ])


    return (
        <View style = {styles.header}>
            <Text style = {styles.headerText}>{title}</Text>
        </View>
    );
}

Header.defaultProps = {title : 'Shopping List'}

export default Header;