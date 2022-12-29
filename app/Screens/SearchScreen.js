import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { doc, getDoc } from "firebase/firestore";
import colors from "../constants/colors";
import { useState } from "react";
import { db } from "../config/firebaseconfig";

function SearchScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState({});

  async function getStudent() {

    try {


        const docRef = doc(db, "studentsdatabase", email);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          Alert.alert("Student found!");
          navigation.navigate("SelectItemBySearchScreen", {
            student: docSnap.data()
          });
        } else {
          Alert("No such student!");
        }

        
    } catch (e) {
        Alert.alert("Student not found and/or error occured.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.formGroup}>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.white,
              marginBottom: 10,
            }}
          >
            Search By Email
          </Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => getStudent()}
        >
          <View style={styles.styledButton}>
            <Text style={styles.textButton}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark0,
  },
  box: {
    marginTop: 150,
    alignItems: "center",
  },
  textInput: {
    borderColor: colors.white,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 3,
    paddingLeft: 10,
    backgroundColor: colors.dark1,
    color: colors.white,
    fontSize: 15,
    width: 300,
  },
  styledButton: {
    backgroundColor: colors.dark3,
    padding: 10,
    borderWidth: 1,
    width: 200,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 20,
  },
  textButton: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default SearchScreen;
