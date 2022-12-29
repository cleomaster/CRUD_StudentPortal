import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { db } from "../config/firebaseconfig";
import { collection, getDocs } from "firebase/firestore"; 
import colors from '../constants/colors';



function ShowAllScreen({ navigation }) {

    const [students, setStudents] = useState([]);


    useEffect(() => {
        fetchAllData();
    }, [])

    async function fetchAllData() {
            const data = [];
            const colRef = collection(db, "studentsdatabase");
            const docsSnap = await getDocs(colRef);
            docsSnap.forEach(doc => {
            data.push(doc.data())
          })
          setStudents(data);
          console.log(students);
    }


    const renderItem = ({ item }) => {
        return (
            <View style={styles.row}>
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("SelectItemScreen", {
                student: item
            });
        }}
        >
        <View style={[styles.item, styles.tableContentButton]}>
            <Text style={[styles.tableContent]}>Select</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.item}>
            <Text style={styles.tableContent}>{item.name}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.tableContent}>{item.country}</Text>
        </View>
        </View>
        )
    }

    

    return (
       <View style={styles.container}>
        <Text>Show All Students</Text>
        <View style={styles.table}>
        <View style={[styles.row, styles.tableHeaderRow]}>
        <View style={styles.item}>
            <Text style={styles.tableHeading}>Select</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.tableHeading}>Name</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.tableHeading}>Country</Text>
        </View>
        </View>
        <FlatList data={students} renderItem={renderItem} />
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 300,
        alignItems: "center",
        backgroundColor: colors.dark0
    },
    table: {
        width: 350
    },
    row: {
        borderWidth: 1,
        borderColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
    },
    tableHeaderRow: {
        backgroundColor: colors.dark2
    },
    tableHeading: {
        color: colors.white,
        fontWeight: "bold"
    },
    tableContent: {
        color: colors.white
    },
    tableContentButton: {
        backgroundColor: colors.dark2,
        padding: 2
    }
})

export default ShowAllScreen;