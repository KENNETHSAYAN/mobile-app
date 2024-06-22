import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const TABLE_DATA = [
  { id: 1, firstName: "Kenneth Angel", middleInitials: "M.", lastName: "Sayan", address: "sayankennethangel@gmail.com" },
  { id: 2, firstName: "Xiregi", middleInitials: "R.", lastName: "Galangque", address: "xrgalangque@gmail.com" },
  { id: 3, firstName: "Nathaniel Mari", middleInitials: "M.", lastName: "Gucor", address: "nathanielgucor@gmail.com" },
  { id: 4, firstName: "Raff Shan", middleInitials: "B.", lastName: "Ladra", address: "shanladra@gmail.com" },
  { id: 5, firstName: "Joe Lejan", middleInitials: "O.", lastName: "Saguindan", address: "Joelejan@gmail.com" },


];

const ViewTables = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.firstName}</Text>
      <Text style={styles.cell}>{item.middleInitials}</Text>
      <Text style={styles.cell}>{item.lastName}</Text>
      <Text style={styles.cell}>{item.address}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Group Member of Learnify</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>First Name</Text>
        <Text style={styles.headerCell}>Middle Initials</Text>
        <Text style={styles.headerCell}>Last Name</Text>
        <Text style={styles.headerCell}>Email Address</Text>
      </View>
      <FlatList
        data={TABLE_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.table}
      />
    </SafeAreaView>
  );
};

export default ViewTables;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});
