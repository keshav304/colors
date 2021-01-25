import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';
import { StyleSheet, Text } from 'react-native';



const Home = ({ navigation, route }) => {
    const newColorPalette = route.params ? route.params.newColorPalette : undefined;
    const [colorPalettes, setColorPalettes] = useState([])

    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');

        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes)
        }
    }, []);
    useEffect(() => {
        fetchColorPalettes();
    }, [])
    useEffect(() => {
        if (newColorPalette) {
            setColorPalettes(palettes => [newColorPalette, ...palettes])
        }
    }, [newColorPalette])


    return (

        <FlatList
        style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview handlePress={() => {
                    navigation.navigate('ColorPalette', item)

                }}
                    colorPalette={item}
                />
            )}
            ListHeaderComponent={
                <TouchableOpacity onPress={() => { navigation.navigate('ColorPaletteModel'); }}>
                    <Text style={styles.buttonText}>Add a New Color Scheme</Text>
                </TouchableOpacity>}

        />

    )
};

const styles = StyleSheet.create({
    list:{
        padding:10,
        backgroundColor:'white'
    },
    buttonText:{
        fontSize:20,
        color:'teal',
        marginBottom:15,
        fontWeight:'bold',
        textAlign:'center',

    }

})


export default Home;