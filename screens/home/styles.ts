import {
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native";
import Colors from "../../constants/Colors";

type Styles = {
  container: ViewStyle;
  headerPart: ViewStyle;
  image: ImageStyle;
};

export const getStyles = (): Styles => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: Colors.light.white,
    },
    headerPart: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 20,
      marginTop: 50,
      paddingBottom: 20
    },
    image: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
  });
};
