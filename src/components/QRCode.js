import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  Pressable,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const QRCode = () => {
    const navigation = useNavigation();

  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occurred', err)
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={styles.header}>
            <FontAwesome6 name='arrow-left-long' size={24} color="white" onPress={() => navigation.goBack()}/>
           <Text style={styles.textBold}>Scan Any QR Code</Text>
        </View>
    <QRCodeScanner
      onRead={onSuccess}
    //   flashMode={RNCamera.Constants.FlashMode.torch}
    //   topContent={
        
    //       <Text style={styles.textBold}>Scan any  QR code.
    //     </Text>
    //   }
    cameraContainerStyle={{ }}
    cameraStyle={{ }}
    topViewStyle={{ }}
      bottomContent={
        <View style={styles.buttonTouchable}>
            <TouchableOpacity>
<Image source={require('../images/photo.png')} style={{width:scale(30),height:scale(30), tintColor:'white'}}/> 
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../images/no-flash.png')} style={{width:scale(30),height:scale(30), tintColor:'white'}}/>
</TouchableOpacity>

        </View>
      }
    /></View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    fontSize:scale(16),
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    marginTop:verticalScale(10),
flexDirection:'row',
gap:50,
  },
  header:{
    backgroundColor:'purple',
    flexDirection:'row',
    height:verticalScale(50),
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-around',
    paddingRight:moderateScale(100),

  }
});

AppRegistry.registerComponent('QRCode', () => QRCode);

export default QRCode;
