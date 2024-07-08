import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const Default = ({label}) => {
  return (
    <View style={{paddingHorizontal: 13, marginBottom: 15}}>
      <Text style={{color:Colors.darkBlue, fontWeight: "bold"}}>{label}</Text>
    </View>
  )
}

export default Default