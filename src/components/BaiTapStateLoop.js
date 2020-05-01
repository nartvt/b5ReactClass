import React, { Component } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';
import GlassesItem from './GlassesItem';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class BaiTapStateLoop extends Component {
  arrProduct = [
    { id: 1, price: 30, name: 'GUCCI G8850U', url: require('../assets/img/glasses/v1.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { d: 2, price: 50, name: 'GUCCI G8759H', url: require('../assets/img/glasses/v2.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 3, price: 30, name: 'DIOR D6700HQ', url: require('../assets/img/glasses/v3.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 4, price: 30, name: 'DIOR D6005U', url: require('../assets/img/glasses/v4.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 5, price: 30, name: 'PRADA P8750', url: require('../assets/img/glasses/v5.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 6, price: 30, name: 'PRADA P9700', url: require('../assets/img/glasses/v6.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 7, price: 30, name: 'FENDI F8750', url: require('../assets/img/glasses/v7.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip' },
    { id: 8, price: 30, name: 'FENDI F8500', url: require('../assets/img/glasses/v8.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    { id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/img/glasses/v9.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
  ];
  //những giá trị người dùng thao tác làm giao diện thay đổi, => đặt giá trị đó trong state (thuộc tính của components khi thay đổi tư động render lại)
  state = {
    glassesCurrent: { id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/img/glasses/v9.png'), desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
  }
  renderGlassItems = () => {
    return this.arrProduct.map((glassItem, index) => {
      return <Col style={{ width: widthDevice / 3, height: 75 }} key={index}>
        {/* <TouchableOpacity onPress={() => { this.changeGlassesItem(glassItem) }}> */}
          <GlassesItem item={glassItem} handleChangeGlasses={this.changeGlassesItem}/>
        {/* </TouchableOpacity> */}
      </Col>
    })
  }
  changeGlassesItem = (newGlassItem) => {
    // this.glassesCurrent = newGlassItem;// khong render lai
    this.setState({
      glassesCurrent: newGlassItem
    })
  }
  render() {
    return (
      <Grid>
        <Row style={{ maxHeight: heightDevice / 2, position: 'relative' }}>
          <Image style={{ height: heightDevice / 2, marginLeft: '-5%', paddingTop: '10%' }}
            source={require('../assets/img/glasses/model.jpg')}
            resizeMode='stretch' />
          <Image style={{
            position: 'absolute',
            top: '20%',
            left: '27%',
            width: '70%',
            height: heightDevice / 7
          }} source={this.state.glassesCurrent.url} />
          <View style={{
            position: 'absolute', width: widthDevice, height: '30%',
           bottom:0 }}>
            <Text>{this.state.glassesCurrent.name}</Text>
          </View>
        </Row>
        <Row style={{ flexWrap: 'wrap' }}>
         {this.renderGlassItems()}
        </Row>
      </Grid>
    )
  }
}
