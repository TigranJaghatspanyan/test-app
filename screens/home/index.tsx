import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import BottomNavigation from "../../components/feature/bottomNavigation";
import { ProductType } from "./types";
import ProjectIcon from "../../assets/images/icon.svg";
import Search from "../../assets/images/search.svg";
import Star from "../../assets/images/star.svg";
import Like from "../../assets/images/like.svg";
import LikeActive from "../../assets/images/likeActive.svg";
import { getStyles } from "./styles";
import Colors from "../../constants/Colors";
import { useLikedItems } from "../../contexts/LikedItemContextProvider";

const Home = (): JSX.Element => {
  const styles = getStyles();
  const { likedItems, toggleLike, isLiked } = useLikedItems();
  const [products, setProducts] = useState<Array<ProductType>>([]);
  console.log(likedItems,'likedItems');
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const groupedProducts: { [key: string]: Array<ProductType> } = {};

  products?.forEach((product: ProductType) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerPart}>
        <ProjectIcon width={43} height={26} />
        <Search width={18} height={18} />
      </View>
      <ScrollView>
        <View style={{ height: 215, paddingHorizontal: 20, marginTop: 25 }}>
          <Swiper
            loop={false}
            dotColor="#BDC3CB"
            activeDotColor="#ffffff"
            dotStyle={{ width: 10, height: 10 }}
            activeDotStyle={{ width: 10, height: 10 }}
            showsPagination
          >
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/images/banner1.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/images/banner2.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/images/banner3.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </Swiper>
        </View>
        <View style={{ marginBottom: 100 }}>
          {Object.keys(groupedProducts).map((category, index) => (
            <View key={index} style={{ padding: 20 }}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                >
                  {category}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.light.purple,
                    textDecorationLine: "underline",
                  }}
                >
                  SEE ALL
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  columnGap: 15,
                  rowGap: 15,
                }}
              >
                {groupedProducts[category].map(
                  (product: ProductType, productIndex: number) => (
                    <View key={productIndex}>
                      <View
                        style={{
                          position: "relative",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            position: "absolute",
                            top: 10,
                            zIndex: 2,
                            right: 10,
                          }}
                          onPress={() => toggleLike(product.id)}
                        >
                          {isLiked(product.id) ? (
                            <LikeActive width={20} height={20} />
                          ) : (
                            <Like width={20} height={20} />
                          )}
                        </TouchableOpacity>
                        <Image
                          source={{
                            uri: product.images?.[0],
                          }}
                          width={164}
                          height={164}
                          style={{ borderRadius: 10 }}
                        />
                      </View>
                      <View style={{ maxWidth: 160, width: "100%" }}>
                        <Text style={{ marginTop: 10 }}>{product.title}</Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 10,
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              columnGap: 5,
                            }}
                          >
                            <Star width={13} height={13} />
                            <Text>{product.rating}</Text>
                          </View>
                          <Text>{product.price}</Text>
                        </View>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

export default Home;
