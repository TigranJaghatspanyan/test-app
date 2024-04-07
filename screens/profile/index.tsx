import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BottomNavigation from "../../components/feature/bottomNavigation";
import Logout from "../../assets/images/logout.svg";
import ArrowBack from "../../assets/images/arrowBack.svg";

import Colors from "../../constants/Colors";
import { AsyncStorageService } from "../../service/asyncStorage.service";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/routes";

const Profile = (): JSX.Element => {
  const { updateUser } = useUserContext();
  const navigation = useNavigation();
  const [user, setUser] = useState();

  const getUser = async () => {
    const token = await AsyncStorageService.getItemAsync("accessToken");
    const user = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }).then((res) => res.json());
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async (): Promise<void> => {
    await AsyncStorageService.removeItemAsync("accessToken");
    updateUser(false);

    navigation.navigate(Routes.LOGIN);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.white }}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 70,
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View>
          <Text style={{ textAlign: "center" }}>PROFILE</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 20,
              borderBottomColor: Colors.light.gray,
              borderBottomWidth: 1,
              paddingBottom: 10,
              marginTop: 50,
            }}
          >
            <Image
              source={{
                uri: user?.image,
              }}
              width={60}
              height={60}
              style={{ borderRadius: 100 }}
            />
            <View>
              <Text style={{ marginBottom: 10 }}>
                {user?.firstName} <Text>{user?.lastName}</Text>
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  color: Colors.light.gray,
                }}
              >
                {user?.gender}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 90,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: Colors.light.gray,
            paddingVertical: 20,
          }}
          onPress={handleLogout}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <Logout width={15} height={15} />
            <Text>Log Out</Text>
          </View>
          <ArrowBack width={15} height={15} />
        </TouchableOpacity>
      </View>
      <BottomNavigation />
    </View>
  );
};

export default Profile;
