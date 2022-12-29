import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";
import colors from "../constants/colors";

function SelectItemScreen({ navigation, route }) {
  const { student } = route.params;


  async function deleteStudent() {
    await deleteDoc(doc(db, "studentsdatabase", student.email));
    Alert.alert("Student successfully deleted.");
    navigation.navigate("HomeScreen")
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Selected Item</Text>
        <View style={styles.table}>
        <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Name</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.name}</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Email</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.email}</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Country</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.country}</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Gender</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.gender}</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Subjects</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.subjects}</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Skills</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.skills}</Text>
          </View>
          </View>
          <View style={styles.row}>
          <View style={[styles.item]}>
            <Text style={[styles.tableContent, styles.itemHeading]}>Address</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.tableContent}>{student.address}</Text>
          </View>
          </View>
        </View>
        <View style={styles.buttonGroup}>
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("EditScreen", {
                student: student
            })
        }}
        >
            <View style={styles.styledButton}>
                <Text style={styles.textButton}>Edit</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={deleteStudent}
        >
            <View style={styles.styledButton}>
                <Text style={styles.textButton}>Delete</Text>
            </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: colors.dark0,
  },
  box: {
    margin: 30,
  },
  row: {
    borderWidth: 1,
    borderColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
},
tableContent: {
    color: colors.white
},
itemHeading: {
    fontWeight: "bold",
    color: colors.white
},
styledButton: {
    backgroundColor: colors.dark3,
    padding: 15,
    borderWidth: 1,
    width: 200,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 5
},
textButton: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20
},
buttonGroup: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
}
});

export default SelectItemScreen;
