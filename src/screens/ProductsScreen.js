import { useNavigation } from "@react-navigation/native";
import { Image, FlatList, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import products from "../data/products";
import { productSlice } from "../store/productSlice";

const ProductsScreen = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const products = useSelector((state) => state.products.products);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("Products Details")}}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
