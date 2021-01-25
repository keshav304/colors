import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity onPress={handlePress} >
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                horizontal={true}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <View style={[styles.box, { backgroundColor: item.hexCode }]}>
                </View>}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        marginBottom:10,
        color:'black'
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 10,
        marginBottom:20, 
    },



});

export default PalettePreview;