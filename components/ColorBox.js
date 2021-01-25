import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ColorBox = ({colorName, colorHex}) => {
    const boxColor = {
        backgroundColor:colorHex,
    };
    const textColor = {
        color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black':'white'
    }
    return (
        <View style={[styles.colorBox,boxColor,]}>
            <Text style={[styles.textinbox,textColor]} >{colorName}:{colorHex}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
  colorBox: {
    marginTop:10,
    paddingVertical:10,
    justifyContent:'center',
    marginHorizontal:10,
  },
  textinbox:{
    color:'#fff',
    textAlign:'center' 
  }

});
  
  

export default ColorBox;