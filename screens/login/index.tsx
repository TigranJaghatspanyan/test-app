import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/images/icon.svg";

import Colors from "../../constants/Colors";
import { AsyncStorageService } from "../../service/asyncStorage.service";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/routes";
import { BottomNavigator } from "../../utils/bottomNavigation";

const Login = (): JSX.Element => {
  const navigation = useNavigation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (text: string): void => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string): void => {
    setPassword(text);
  };

  const handleLogin = async () => {
    const auth = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        expiresInMins: 30,
      }),
    }).then((res) => res.json());

    await AsyncStorageService.setItemAsync("accessToken", auth.token);
    navigation.navigate(BottomNavigator.HOME);
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 70,
        paddingHorizontal: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ marginBottom: 30 }}>LOG IN</Text>
        <Logo width={140} height={84} />
        <View style={{ marginTop: 50 }}>
          <Text style={{ marginBottom: 10 }}>
            Username <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={{
              minWidth: "100%",
              borderColor: Colors.light.gray,
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            onChangeText={handleUsernameChange}
            value={username}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ marginBottom: 10 }}>
            Password <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={{
              minWidth: "100%",
              borderColor: Colors.light.gray,
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.6}
        style={{
          marginBottom: 50,
          width: "100%",
          height: 50,
          backgroundColor: Colors.light.purple,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: Colors.light.white }}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
