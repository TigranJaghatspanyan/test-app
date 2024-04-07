import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Colors from "../../../constants/Colors";

type Styles = {
  container: ViewStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      backgroundColor: Colors.light.white,
      height: 50,
      maxWidth: "100%",
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: Colors.light.white,
    },
  });
};
