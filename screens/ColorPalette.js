import React from 'react';
import {  FlatList,Text,StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';


const ColorPalette = ({route}) => {
    const {paletteName,colors}=route.params
    const renderItem = ({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
      );

    return (

        <FlatList
          data={colors}
          renderItem={renderItem}
          keyExtractor={item => item.colorName}
          ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
        />

    )
}
const styles = StyleSheet.create({

  text: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 10,
      textAlign: 'center'
  },



});

  

export default ColorPalette;