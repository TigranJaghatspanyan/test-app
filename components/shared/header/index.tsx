import React from "react";
import { Text, View } from "react-native";

import { getStyles } from "./styles";

const Header = (): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
