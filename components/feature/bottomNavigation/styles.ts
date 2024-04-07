import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import Colors from "../../../constants/Colors";

type Styles = {
  container: ViewStyle;
  iconContainer: ViewStyle;
  iconInfo: ViewStyle;
  text: TextStyle;
  activeText: TextStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      width: "100%",
      height: 80,
      position: "absolute",
      bottom: 0,
      paddingHorizontal: 25,
      display: "flex",
      justifyContent: "center",
      backgroundColor: Colors.light.white
    },
    iconContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexDirection: "row",
    },
    iconInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 60,
    },
    text: {
      fontSize: 11,
      textAlign: "center",
      color: Colors.light.gray,
      marginTop: 5,
    },
    activeText: {
      color: Colors.light.purple,
    },
  });
};
