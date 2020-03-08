import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class GlassesItem extends Component {
  render() {
    let { item, handleChangeGlasses } = this.props;
    return (
      <TouchableOpacity onPress={() => {handleChangeGlasses(item)}}>
      <View>
        <Image style={{ width: widthDevice / 4, height: 40, margin: '10%', marginTop: '50%' }}
            resizeMode='stretch' source={item.url} />
        {/* <Text> 123 </Text> */}
        </View>
        </TouchableOpacity>
    )
  }
}
