import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class DemoLoop extends Component {

  data = [
    { maHV: 1, hoTen: "Tran Van A", soDT: "01223246232" },
    { maHV: 2, hoTen: "Tran Van B", soDT: "01229946232" },
    { maHV: 3, hoTen: "Tran Van C", soDT: "01223290232" }
  ]
  arrFood = [
    { ma: 1, tenMon: 'Gà nướng', gia: 10, hinhAnh: require('./../assets/img/food/product1.jpg') },
    { ma: 1, tenMon: 'Bò nướng', gia: 10, hinhAnh: require('./../assets/img/food/product2.jpg') },
    { ma: 1, tenMon: 'Mì ý', gia: 10, hinhAnh: require('./../assets/img/food/product3.jpg') },
    { ma: 1, tenMon: 'Heo hun khói', gia: 10, hinhAnh: require('./../assets/img/food/product4.jpg') },
    { ma: 1, tenMon: 'Gà ri', gia: 10, hinhAnh: require('./../assets/img/food/product5.jpg') },
    { ma: 1, tenMon: 'Sườn Nướng', gia: 10, hinhAnh: require('./../assets/img/food/product6.jpg') }
  ]
  renderHocVien = () => {
    // var arrContent = [];
    // for (var i = 0; i < this.data.length; i++){
    //   var comHocVien = <View key={i}>
    //     <Text>Mã Học viên: {this.data[i].maHV}</Text>
    //     <Text>Tên Học viên: {this.data[i].hoTen}</Text>
    //     <Text>Sdt Học viên: {this.data[i].soDT}</Text>
    //   </View>
    //   arrContent.push(comHocVien);
    // }
    // return arrContent;
    //# Cach 2 : dung es6 : tao mang componentHocVien tu mang hocvien
    var mangComponentHocVien = this.data.map(({ maHV, hoTen, soDT }, index) => {
      // callback trong map chay n lan ung voi so phan tu cua this.data
      // moi lan chay bat buoc return ve 1 gia tri cho mang moi
      // let { maHV, hoTen, soDT } = hocVien;
      return <View key={index}>
        <Text>Mã Học viên: {maHV}</Text>
        <Text>Tên Học viên: {hoTen}</Text>
        <Text>Sdt Học viên: {soDT}</Text>
      </View>
    })
    return mangComponentHocVien;
  }
  renderFoodItem = () => {
    return this.arrFood.map(({ ma, tenMon, gia, hinhAnh },index) => {
      return <Col style={{width: widthDevice / 2, height: 200 }} key={index}>
        <View style={{padding: '5%'}}>
          <Text>{tenMon}</Text>

          <Image style={{ width: 150, height: 75 }} source={hinhAnh} resizeMode='contain' />
          <Text style={{ fontSize: 17, color: 'red', fontWeight: 'bold' }}>{gia}</Text>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#FFCC66', width: 150, alignItems: 'center', padding: 5 }}>
              <Text>Đặt Món</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Col>
    })
  }
  render() {
    // return (
    //   <View>
    //     (this.renderHocVien)
    //   </View>
    // )
    return (
        <View>
      <Grid style={{flex: 1}}>
        <Row style={{ maxHeight: 250}}>
          <Image source={require('../assets/img/food/imageMenu.jpg')} resizeMode='contain' />
        </Row>
        <Row style={{flexWrap: 'wrap' }}>
          {this.renderFoodItem()}
            </Row>
      </Grid>
        </View>
    )
  }
}
