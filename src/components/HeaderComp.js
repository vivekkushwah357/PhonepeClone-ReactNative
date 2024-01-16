// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
// import Home from './src/screen/Home';
// import History from './src/screen/History';
// import Wealth from './src/screen/Wealth';
// import Insurance from './src/screen/Insurance';
// import Stores from './src/screen/Stores';

// const HeaderComp = () => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   return (
//     <View style={styles.container}>
//       {selectedTab == 0 ? (
//         <Home />
//       ) : selectedTab == 1 ? (
//         <Stores />
//       ) : selectedTab == 2 ? (
//         <Insurance />
//       ) : selectedTab == 3 ? (
//         <Wealth />
//       ) : (
//         <History />
//       )}
//       <View style={styles.bottomNav}>
//         <View style={styles.bottomNav2}>
//           <TouchableOpacity
//             style={styles.botomTab}
//             onPress={() => setSelectedTab(0)}>
//             <View
//               style={[
//                 styles.tabIconBg,
//                 {backgroundColor: selectedTab == 0 ? 'purple' : '#bdbdbd'},
//               ]}>
//               <Image
//                 source={require('./src/images/smart.png')}
//                 style={styles.tabIcon}
//               />
//             </View>
//             <Text style={{color: selectedTab == 0 ? 'purple' : '#bdbdbd'}}>
//               Home
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.botomTab}
//             onPress={() => setSelectedTab(1)}>
//             <View
//               style={[
//                 styles.tabIconBg,
//                 {backgroundColor: selectedTab == 1 ? 'purple' : '#bdbdbd'},
//               ]}>
//               <Image
//                 source={require('./src/images/store.png')}
//                 style={styles.tabIcon}
//               />
//             </View>
//             <Text style={{color: selectedTab == 1 ? 'purple' : '#bdbdbd'}}>
//               Stores
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.botomTab}
//             onPress={() => setSelectedTab(2)}>
//             <View
//               style={[
//                 styles.tabIconBg,
//                 {backgroundColor: selectedTab == 2 ? 'purple' : '#bdbdbd'},
//               ]}>
//               <Image
//                 source={require('./src/images/insurance.png')}
//                 style={styles.tabIcon}
//               />
//             </View>
//             <Text style={{color: selectedTab == 2 ? 'purple' : '#bdbdbd'}}>
//               Insurance
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.botomTab}
//             onPress={() => setSelectedTab(3)}>
//             <View
//               style={[
//                 styles.tabIconBg,
//                 {backgroundColor: selectedTab == 3 ? 'purple' : '#bdbdbd'},
//               ]}>
//               <Image
//                 source={require('./src/images/rupee.png')}
//                 style={styles.tabIcon}
//               />
//             </View>
//             <Text style={{color: selectedTab == 3 ? 'purple' : '#bdbdbd'}}>
//               Wealth
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.botomTab}
//             onPress={() => setSelectedTab(4)}>
//             <View
//               style={[
//                 styles.tabIconBg,
//                 {backgroundColor: selectedTab == 4 ? 'purple' : '#bdbdbd'},
//               ]}>
//               <Image
//                 source={require('./src/images/transaction.png')}
//                 style={styles.tabIcon}
//               />
//             </View>
//             <Text style={{color: selectedTab == 4 ? 'purple' : '#bdbdbd'}}>
//               History
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HeaderComp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   bottomNav: {
//     width: '100%',
//     height: verticalScale(70),
//     padding: moderateScale(5),
//     backgroundColor: '#fff',
//     bottom: 0,
//     position: 'absolute',
//   },
//   bottomNav2: {
//     width: '100%',
//     height: verticalScale(55),
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   botomTab: {
//     width: '20%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabIcon: {
//     width: scale(18),
//     height: scale(18),
//     tintColor: '#fff',
//   },
//   tabIconBg: {
//     width: scale(34),
//     height: scale(34),
//     borderRadius: scale(17),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
