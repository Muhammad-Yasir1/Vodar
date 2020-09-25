import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Switch } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'

const styles = StyleSheet.create({
    container: { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#DDD', padding: 10, marginBottom: 10, },
    dropimg: { width: 10, height: 10, resizeMode: 'contain' },
    dataview: { flexDirection: 'row', alignItems: 'center' },
})

const CountryPickerCustom = () => {
    const [countryCode, setCountryCode] = useState('US')
    const [country, setCountry] = useState({callingCode: ["1"], cca2: "US", currency: ["USD"], flag: "flag-us", name: "United States", region: "Americas", subregion: "North America"})
    const onSelect = (country) => {
        console.log(country)
        setCountryCode(country.cca2)
        setCountry(country)
    }
    return (
        <View style={styles.container}>
            <View style={styles.dataview}>

                <CountryPicker onOpen={()=>{console.log('open')}}
                    {...{
                        countryCode,
                        onSelect,
                    }}
                    visible={false}
                />
                {country !== null && (
                    <Text style={styles.data}>{country.name}</Text>
                )}
            </View>
            <Image style={styles.dropimg} source={require('../../../images/arrowbottom.png')} />
        </View>
    )
}

export default CountryPickerCustom;