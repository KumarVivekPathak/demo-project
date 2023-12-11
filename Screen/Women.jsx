import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Header from "../components/Header";
import Sort from "react-native-vector-icons/Octicons";
import Heart from "react-native-vector-icons/Entypo";

const renderListItem = (item) => {
  return (
    <View style={styles.listItemContainer}>
      <Image
        source={item.image}
        style={{ height: 200, width: "100%", borderRadius: 5 }}
      />
      <TouchableOpacity style={styles.heartIcon}>
        <Heart name="heart-outlined" size={30} />
      </TouchableOpacity>

      <Text style={styles.itemName}>{item.name} </Text>
      <Text style={styles.itemTypeText}>{item.type} </Text>
      <Text style={styles.itemWearingText}>{item.wearing} </Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>
  );
};

export default WomenPage = () => {
  const [listData, setListData] = useState([
    {
      id: 1,
      image: require("../assets/img1.png"),
      name: "12 STOREEZ",
      type: "Mercerised-jersey",
      wearing: "shorts",
      price: "₹ 4,999",
    },
    {
      id: 2,
      image: require("../assets/img2.png"),
      name: "12 STOREEZ",
      type: "Mercerised-jersey",
      wearing: "shorts",
      price: "₹ 4,999",
    },
    {
      id: 3,
      image: require("../assets/img1.png"),
      name: "12 STOREEZ",
      type: "Mercerised-jersey",
      wearing: "shorts",
      price: "₹ 4,999",
    },
    {
      id: 4,
      image: require("../assets/img2.png"),
      name: "12 STOREEZ",
      type: "Mercerised-jersey",
      wearing: "shorts",
      price: "₹ 4,999",
    },
    {
      id: 5,
      image: require("../assets/img1.png"),
      name: "12 STOREEZ",
      type: "Mercerised-jersey",
      wearing: "shorts",
      price: "₹ 4,999",
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topBar}>
        <Text style={styles.productCountText}>97/100 Products</Text>
        <View style={styles.sortIcons}>
          <TouchableOpacity style={styles.sortIconText}>
            <Sort name="sort-asc" size={24} color="#808895" />
            <Text style={styles.sortFilterText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortIconText}>
            <Sort name="filter" size={24} color="#808895" />
            <Text style={styles.sortFilterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.listContaintCotainerStyles}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderListItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  topBar: {
    flexDirection: "row",
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "space-between",
    height: 30,
    alignItems: "center",
    marginTop: 5,
  },
  sortIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    alignItems: "center",
  },
  sortIconText: {
    flexDirection: "row",
    alignItems: "center",
    width: "42%",
  },
  sortFilterText: {
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 4,
    color: "#808895",
  },
  productCountText: {
    fontSize: 17,
    color: "#9caabd",
    fontWeight: "450",
  },
  listContaintCotainerStyles: {
    marginTop: 10,
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  listItemContainer: {
    width: "48%",
    marginVertical: 10,
  },
  itemName: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#0f172a",
  },
  itemTypeText: {
    fontSize: 18,
    color: "#090909",
    fontWeight: "500",
  },
  itemWearingText: {
    fontSize: 18,
    color: "#090909",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#090909",
    fontWeight: "500",
  },
  heartIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 5,
    paddingTop: 7,
  },
});
