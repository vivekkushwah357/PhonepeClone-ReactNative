import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  requireNativeComponent,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import QRCode from '../components/QRCode';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'purple'} barStyle={'light-content'} />

      <View style={styles.header}>
        <View style={styles.headertwo}>
          <View style={styles.headerleft}>
            <View>
              <Image
                source={require('../images/man.png')}
                style={styles.user}
              />
              <Image
                source={require('../images/flag.png')}
                style={styles.flag}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: moderateScale(20),
                  fontWeight: 600,
                  paddingLeft: moderateScale(5),
                }}>
                Home  
              </Text>
              <AntDesign name="caretdown" size={12} color="white" />
              {/* <Image
                source={require('../images/dropdown.png')}
                style={{
                  width: scale(15),
                  height: scale(15),
                  tintColor: 5,
                  marginLeft: moderateScale(5),
                }}
              /> */}
            </View>
            {/* <Text
              style={{
                color: 'white',
                fontSize: moderateScale(12),
                marginTop: moderateScale(10),
              }}>
              {' '}
              Scheme no 78 Indore
            </Text> */}
          </View>

          <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
              <Image
                source={require('../images/qr-code.png')}
                style={{
                  width: scale(24),
                  height: scale(24),
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../images/bell.png')}
                style={{
                  width: scale(24),
                  height: scale(24),
                  marginLeft: moderateScale(10),
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../images/help.png')}
                style={{
                  width: scale(24),
                  height: scale(24),
                  tintColor: 'white',
                  marginLeft: moderateScale(10),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.updateCard}>
          <View style={styles.updateTopView}>
            <Image
              source={require('../images/logo.png')}
              style={{
                width: scale(30),
                height: scale(30),
                marginLeft: moderateScale(10),
                marginTop: moderateScale(10),
              }}
            />
            <View>
              <Text style={styles.updateTitle}>App Update Available</Text>
              <Text style={styles.updateSubTitle}>
                We Need Fixed Some Issues and added some cool features in this
                update
              </Text>
            </View>
          </View>
          <View style={styles.updateBtnView}>
            <Pressable>
              <Text style={styles.laterText}>LATER</Text>
            </Pressable>
            <Text style={styles.updateText}>UPDATE</Text>
          </View>
        </View>
        <Image
          source={require('../images/phone_pay_banner.png')}
          style={{
            width: '95%',
            height: verticalScale(140),
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: moderateVerticalScale(5),
          }}
        />
        <View style={styles.moneyCard}>
          <Text
            style={{
              marginLeft: moderateScale(10),
              paddingTop: moderateScale(10),
              fontSize: scale(17),
              fontWeight: '600',
              color: 'black',
            }}>
            Money Transfer
          </Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/user.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.subText}>To Mobile Number</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/bank2.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.subText}>To Bank / UPI ID</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/reload.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.subText}>To Self Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/bank.png')}
                  style={styles.icons}
                />
              </View>
              <Text style={styles.subText}>Check Balance</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.blueOptionView}>
          <TouchableOpacity style={styles.blueOption}>
            <Image
              source={require('../images/wallet.png')}
              style={styles.blueCardIcon}
            />
            <Text style={styles.blueCardText}>PhonePe Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blueOption}>
            <Image
              source={require('../images/gift.png')}
              style={styles.blueCardIcon}
            />
            <Text style={styles.blueCardText}>Rewards</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blueOption}>
            <Image
              source={require('../images/speaker.png')}
              style={styles.blueCardIcon}
            />
            <Text style={styles.blueCardText}>Refer & Get 50$</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.RechargeCard}>
            <Text
              style={{
                marginLeft: moderateScale(10),
                paddingTop: moderateScale(10),
                fontSize: scale(17),
                fontWeight: '600',
                color: 'black',
              }}>
              Recharge & Pay Bills
            </Text>
            <View style={styles.transferView}>
              <TouchableOpacity style={styles.transferTab}>
                <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                  <Image
                    source={require('../images/mobile.png')}
                    style={[
                      styles.icons,
                      {
                        tintColor: 'purple',
                        width: scale(30),
                        height: scale(30),
                      },
                    ]}
                  />
                </View>
                <Text style={styles.subText}>Mobile Recharge</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transferTab}>
                <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                  <Image
                    source={require('../images/bulb.png')}
                    style={[
                      styles.icons,
                      {
                        tintColor: 'purple',
                        width: scale(30),
                        height: scale(30),
                      },
                    ]}
                  />
                </View>
                <Text style={styles.subText}>Electricity</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transferTab}>
                <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                  <Image
                    source={require('../images/satellite-dish.png')}
                    style={[
                      styles.icons,
                      {
                        tintColor: 'purple',
                        width: scale(30),
                        height: scale(30),
                      },
                    ]}
                  />
                </View>
                <Text style={styles.subText}>DTH</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transferTab}>
                <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                  <Image
                    source={require('../images/credit-card.png')}
                    style={[
                      styles.icons,
                      {
                        tintColor: 'purple',
                        width: scale(30),
                        height: scale(30),
                      },
                    ]}
                  />
                </View>
                <Text style={styles.subText}>Credit Card Bill Payment</Text>
              </TouchableOpacity>


              
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    backgroundColor: 'purple',
  },
  headertwo: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  headerleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    width: scale(28),
    height: scale(28),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: scale(14),
    height: scale(14),
    position: 'absolute',
    marginTop: verticalScale(15),
    marginLeft: moderateScale(15),
  },
  updateCard: {
    width: '95%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    height: verticalScale(120),
    marginTop: moderateVerticalScale(8),
    borderRadius: scale(11),
  },
  updateTopView: {
    flexDirection: 'row',
    width: '100%',
  },
  updateTitle: {
    fontSize: moderateScale(17),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: 'black',
    marginTop: moderateScale(10),
  },
  updateSubTitle: {
    fontSize: moderateScale(12),
    width: '60%',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  updateBtnView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
    marginRight: moderateScale(20),
  },
  laterText: {
    color: 'purple',
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
  updateText: {
    backgroundColor: 'purple',
    borderRadius: 10,
    marginLeft: moderateScale(20),
    width: '22%',
    height: verticalScale(22),
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    paddingTop: moderateScale(2),
    paddingRight: moderateScale(2),
    fontSize: moderateScale(14),
  },
  transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: moderateScale(20),
    flexDirection: 'row',
    alignContent: 'center',
  },
  transferCard: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(10),
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  transferTab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  moneyCard: {
    width: '95%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    height: verticalScale(140),
    marginTop: moderateVerticalScale(5),
    borderRadius: scale(11),
  },
  icons: {
    width: scale(20),
    height: scale(20),
    tintColor: '#fff',
  },
  subText: {
    marginTop: moderateScale(5),
    color: 'black',
    marginBottom: moderateScale(10),
    width: '70%',
    textAlign: 'center',
  },
  blueOptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '94%',
    marginTop: moderateScale(8),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  blueOption: {
    width: '30%',
    height: verticalScale(60),
    backgroundColor: '#277be8',
    borderRadius: moderateScale(17),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  blueCardIcon: {
    height: scale(28),
    width: scale(28),
    tintColor: '#fff',
    padding: 2,
  },
  blueCardText: {
    color: '#fff',
    fontWeight: '500',
    padding: moderateScale(2),
    fontSize: scale(12),
    marginTop: moderateScale(5),
  },
  RechargeCard: {
    width: '95%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    height: verticalScale(210),
    marginTop: moderateVerticalScale(8),
    borderRadius: scale(11),
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
