import React, { Component } from 'react';
import { View, Text,StyleSheet,ImageBackground,Alert,Button } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }




  render() {
    return (
      <ImageBackground source={require('../imgs/header-bg.png')} style={styles.header}>
        {/* <View style={styles.con}> */}
          <View style={styles.nav} onPress={() => {
              Alert.alert("你点击了按钮！");
            }}>
            <View style={{width:40,height:40,marginLeft:10}}>
              <ImageBackground source={require('../imgs/header-back.png')} style={{width:'100%',height:'100%'}}></ImageBackground>
            </View>
          </View>
          <View style={styles.cen}><Text style={{fontSize:18,color:"#fff"}}>头部</Text></View>
          <View style={styles.nav}></View>
        {/* </View> */}
      </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  header:{
     height:60,
     width:'100%',
      flexDirection:'row',
      alignItems: 'center',
  },
  con:{
    height:60,
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
  },
  cen:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
  },
  nav:{
    height:60,
    width:60,
    flexDirection:'row',
    alignItems: 'center',
  }
})


export default Header;
