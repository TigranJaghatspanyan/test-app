import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
  static async setItemAsync(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.log(err);
    }
  }

  static async getItemAsync(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  static async removeItemAsync(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }
}
