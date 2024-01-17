import { StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function Messagecomponent({ currentUser, item }) {
  const currentUserStatus = item.currentUser !== currentUser;

  console.log(currentUserStatus , item);

  return (
    <View style={currentUserStatus ? {} : { alignItems: "flex-end" }}>
      <View style={styles.messageItemWrapper}>
        <View style={styles.messageItemInnerWrapper}>
          <View
            style={
              currentUserStatus
                ? styles.messageItem
                : [styles.messageItem, { backgroundColor: "#703efe" }]
            }
          >
            <Text
              style={
                currentUserStatus ? { color: "#000" } : { color: "#e5c1fe" }
              }
            >
              {item.text}
            </Text>
          </View>
        </View>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageItemWrapper: {
    maxWidth: "50%",
    marginBottom:verticalScale(10),
  },
  messageItemInnerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageItem: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding:moderateScale(10),
    borderRadius:scale(10),
    marginBottom: 2,
  },
  messageTime : {
    marginLeft : 10
  }
});