import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BackArrow from "react-native-vector-icons/MaterialCommunityIcons";
import Heart from "react-native-vector-icons/Entypo";
import Search from "react-native-vector-icons/Fontisto";
import Bag from "react-native-vector-icons/SimpleLineIcons";

export default Header = () => {
  const [searchEnable, setSearch] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowStyle}>
        <BackArrow name="keyboard-backspace" size={30} />
      </TouchableOpacity>
      {/* {!searchEnable ? 
            <Text>Women</Text> :
            <TextInput placeholder="Search Here" /> } */}
      <Text style={styles.headerText}>Women</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => setSearch(true)}>
          <Search name="search" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Heart name="heart-outlined" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Bag name="handbag" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // height: "45%",
    height: 55,
    elevation: 4,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginLeft: 3,
  },
  arrowStyle: {
    marginRight: 7,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    width: "50%",
  },
});
