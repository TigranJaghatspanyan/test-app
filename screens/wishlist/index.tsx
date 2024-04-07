import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BottomNavigation from "../../components/feature/bottomNavigation";
import ProjectIcon from "../../assets/images/icon.svg";
import Search from "../../assets/images/search.svg";
import Star from "../../assets/images/star.svg";
import LikeActive from "../../assets/images/likeActive.svg";
import Like from "../../assets/images/like.svg";
import Colors from "../../constants/Colors";
import { useLikedItems } from "../../contexts/LikedItemContextProvider";

const Wishlist = (): JSX.Element => {
  const { likedItems, toggleLike, isLiked } = useLikedItems();
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        const productsPromises = likedItems.map((itemId) =>
          fetch(`https://dummyjson.com/products/${itemId}`).then((res) =>
            res.json()
          )
        );
        const products = await Promise.all(productsPromises);
        setWishlistProducts(products);
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      }
    };

    fetchWishlistProducts();
  }, [likedItems]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.white }}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          marginTop: 50,
          paddingBottom: 20,
        }}
      >
        <ProjectIcon width={43} height={26} />
        <Search width={18} height={18} />
      </View>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            columnGap: 15,
            rowGap: 15,
            padding: 20,
            marginBottom: 100,
          }}
        >
          {wishlistProducts.map((product, index) => (
            <View key={index}>
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
              <Text style={{ marginTop: 10 }}>{product.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Star width={13} height={13} />
                <Text>{product.rating}</Text>
              </View>
              <Text>{product.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

export default Wishlist;
