import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';


function HomeScreen({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: colors.dark0}}>
        <View style={{marginTop: 150, alignItems: "center"}}>
        <Text style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: 40
        }}>
        Student Information System
        </Text>
        </View>
<View style={styles.container}>
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("AddStudentScreen")
        }}
        >
            <View style={styles.styledButton}>
                <Text style={styles.textButton}>Add a New student</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("ShowAllScreen")
        }}
        >
            <View style={styles.styledButton}>
                <Text style={styles.textButton}>Show All Students</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
            navigation.navigate("SearchScreen")
        }}>
            <View style={styles.styledButton}>
                <Text style={styles.textButton}>Search For a Student</Text>
            </View>
        </TouchableOpacity>
       </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark0
    },
    styledButton: {
        backgroundColor: colors.dark3,
        padding: 15,
        borderWidth: 1,
        width: 300,
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 15
    },
    textButton: {
        color: colors.white,
        fontWeight: "bold"
    }
})

export default HomeScreen;