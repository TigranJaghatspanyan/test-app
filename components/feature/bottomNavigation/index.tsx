import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BottomNavigator } from "../../../utils/bottomNavigation";
import HomeIcon from "../../../assets/images/bottomNavigationIcons/home.svg";
import HomeIconActive from "../../../assets/images/bottomNavigationIcons/homeActive.svg";
import CategoriesIcon from "../../../assets/images/bottomNavigationIcons/categories.svg";
import CategoriesIconActive from "../../../assets/images/bottomNavigationIcons/categoriesActive.svg";
import WishlistIcon from "../../../assets/images/bottomNavigationIcons/favorite.svg";
import WishlistIconActive from "../../../assets/images/bottomNavigationIcons/favoriteActive.svg";
import ProfileIcon from "../../../assets/images/bottomNavigationIcons/person.svg";
import ProfileIconActive from "../../../assets/images/bottomNavigationIcons/personActive.svg";

import { getStyles } from "./styles";

const BottomNavigation = (): JSX.Element => {
  const styles = getStyles();
  const navigation = useNavigation();
  const route = useRoute();

  const isActiveScreen = (screenName: string): boolean => {
    return route.name === screenName;
  };

  const navigateToScreen = (screenName: string): void => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconInfo}
          activeOpacity={1}
          onPress={() => navigateToScreen(BottomNavigator.HOME)}
        >
          {isActiveScreen(BottomNavigator.HOME) ? (
            <HomeIconActive width={22} height={26} />
          ) : (
            <HomeIcon width={22} height={26} />
          )}
          <Text
            style={[
              styles.text,
              isActiveScreen(BottomNavigator.HOME) && styles.activeText,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconInfo}
          activeOpacity={1}
          onPress={() => navigateToScreen(BottomNavigator.CATEGORIES)}
        >
          {isActiveScreen(BottomNavigator.CATEGORIES) ? (
            <CategoriesIconActive width={22} height={26} />
          ) : (
            <CategoriesIcon width={22} height={26} />
          )}
          <Text
            style={[
              styles.text,
              isActiveScreen(BottomNavigator.CATEGORIES) && styles.activeText,
            ]}
          >
            Categories
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconInfo}
          activeOpacity={1}
          onPress={() => navigateToScreen(BottomNavigator.WISHLIST)}
        >
          {isActiveScreen(BottomNavigator.WISHLIST) ? (
            <WishlistIconActive width={22} height={26} />
          ) : (
            <WishlistIcon width={22} height={26} />
          )}
          <Text
            style={[
              styles.text,
              isActiveScreen(BottomNavigator.WISHLIST) && styles.activeText,
            ]}
          >
            Wishlist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconInfo}
          activeOpacity={1}
          onPress={() => navigateToScreen(BottomNavigator.PROFILE)}
        >
          {isActiveScreen(BottomNavigator.PROFILE) ? (
            <ProfileIconActive width={22} height={26} />
          ) : (
            <ProfileIcon width={22} height={26} />
          )}
          <Text
            style={[
              styles.text,
              isActiveScreen(BottomNavigator.PROFILE) && styles.activeText,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavigation;
