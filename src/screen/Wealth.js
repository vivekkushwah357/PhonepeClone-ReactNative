import React, { useState, useEffect } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Messagecomponent from "../components/Messagecomponent";
import { socket } from "../utils/index";

export default function Messagescreen({ navigation }) {
  const [currentChatMessage, setCurrentChatMessage] = useState("");
  const [allChatMessages, setAllChatMessages] = useState([]);

  useEffect(() => {
    const groupIdentifier = 'yourGroupId';
    
    socket.emit('findGroup', groupIdentifier);

    const foundGroupListener = (allChats) => {
      setAllChatMessages(allChats);
    };

    socket.on('foundGroup', foundGroupListener);

    return () => {
      socket.off('foundGroup', foundGroupListener);
    };
  }, []);

  const handleAddNewMessage = () => {
    const timeData = {
      hr: new Date().getHours().toString().padStart(2, '0'),
      mins: new Date().getMinutes().toString().padStart(2, '0'),
    };
  
    const currentUser = { id: 'yourUserId', name: 'Your Name' };
  
    if (currentUser) {
      const newMessage = {
        id: Date.now(), 
        user: currentUser,
        content: currentChatMessage,
        timeData,
      };
  
      socket.emit("newChatMessage", {
        ...newMessage,
        groupIdentifier: 'yourGroupId',
      });
  
      setAllChatMessages((prevMessages) => [...prevMessages, newMessage]);
  
      setCurrentChatMessage("");
      Keyboard.dismiss();
    }
  };

  console.log(allChatMessages,'allChatMessages');
  console.log(currentChatMessage,'currentChatMessage');
    return (
      <View style={styles.wrapper}>
        <View style={styles.messageContainer}>
          <FlatList
            data={allChatMessages}
            renderItem={({ item }) => (
              <Messagecomponent item={item} currentUser={item.user} />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.messageList}
          />
        </View>
        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            value={currentChatMessage}
            onChangeText={(value) => setCurrentChatMessage(value)}
            placeholder="Enter your message"
          />
  
          <Pressable onPress={handleAddNewMessage} style={styles.button}>
            <Text style={styles.buttonText}>SEND</Text>
          </Pressable>
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#eee",
  },
  messageContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    
  },
  messageList: {
    flexGrow: 1,
  },
  messageInputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  messageInput: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#703efe",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

