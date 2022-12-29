import React, { useState } from "react";
import { db } from "../config/firebaseconfig";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { doc, setDoc } from "firebase/firestore"; 
import Checkbox from 'expo-checkbox';
import colors from "../constants/colors";

function AddStudentScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [skills, setSkills] = useState('');
    const [address, setAddress] = useState('');
    const [isCheckedPhysics, setCheckedPhysics] = useState(false);
    const [isCheckedComputer, setCheckedComputer] = useState(false);
    const [isCheckedBiology, setCheckedBiology] = useState(false);
    const [current, setCurrent] = useState("Male");
    const [selectedValue, setSelectedValue] = useState("Pakistan");




    async function submitForm() {
        const subjects = [];
        if (isCheckedPhysics) subjects.push("Physics");
        if (isCheckedComputer) subjects.push("Computers");
        if (isCheckedBiology) subjects.push("Biology");
        // console.log(email, name, current, subjects, skills, address)

        try {
          await setDoc(doc(db, "studentsdatabase", email), {
              name: name,
              email: email,
              country: selectedValue,
              gender: current,
              subjects: subjects,
              skills: skills,
              address: address
          });
          Alert.alert("Student successfully added.");
          navigation.navigate("HomeScreen");
        } catch(e) {
          console.log(e);
        }
    }

  return (
    <ScrollView style={styles.container}>
    <View style={{marginTop: 50, marginLeft: 30}}>
    <Text style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: 40
        }}>
        Add a New Student
        </Text>
    </View>
      <View style={styles.form}>
      <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Country</Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Pakistan" value="Pakistan" />
            <Picker.Item label="Bahrain" value="Bahrain" />
          </Picker>
        </View>
        <View style={[styles.formGroup, {marginTop: 40}]}>
        <Text style={styles.label}>Gender</Text>
        <RadioButtonGroup
        containerStyle={{flexDirection: "row"}}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground={colors.dark3}
      >
        <RadioButtonItem value="Male" label={<Text style={{marginRight: 30, color: colors.white}}>Male</Text>} />
        <RadioButtonItem
          value="Female"
          label={
            <Text style={{marginRight: 20, color: colors.white}}>Female</Text>
          }
        />
      </RadioButtonGroup>
        </View>
        <View style={styles.formGroup}>
        <Text style={styles.label}>Subjects</Text>
        <View style={{flexDirection: "row"}}>
        <View style={styles.checkboxGroup}>
        <Text style={{marginRight: 15, color: colors.white}}>Physics</Text>
        <Checkbox style={styles.checkbox} value={isCheckedPhysics} onValueChange={setCheckedPhysics} />
        </View>
        <View style={styles.checkboxGroup}>
        <Text style={{marginHorizontal: 15, color: colors.white}}>Computer</Text>
        <Checkbox style={styles.checkbox} value={isCheckedComputer} onValueChange={setCheckedComputer} />
        </View>
        <View style={styles.checkboxGroup}>
        <Text style={{marginHorizontal: 15, color: colors.white}}>Biology</Text>
        <Checkbox style={styles.checkbox} value={isCheckedBiology} onValueChange={setCheckedBiology} />
        </View>
        </View>
        </View>
        <View style={styles.formGroup}>
        <Text style={styles.label}>Skills</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.bigInput}
            value={skills}
            onChangeText={(text) => setSkills(text)}
          />
        </View>
        <View style={styles.formGroup}>
        <Text style={styles.label}>Address</Text>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.bigInput}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={{marginVertical: 30}}>
        <Button title="Submit" onPress={submitForm} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark0,
  },
  form: {
    marginTop: 30,
    padding: 20,
  },
  formGroup: {
    marginVertical: 10,
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
  },
  picker: {
    height: 20,
    color: colors.white,
    backgroundColor: colors.dark1,
  },
  label: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  checkboxGroup: {
    flexDirection: "row"
  },
  bigInput: {
    borderColor: colors.white,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 3,
    paddingLeft: 10,
    backgroundColor: colors.dark1,
    color: colors.white,
    fontSize: 15,
    height: 80
  }
});

export default AddStudentScreen;
