import {
  View,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import products from "../data/products";
import { cartSlice } from "../store/cartSlice";


const ProductDetailsScreen = () => {
  const product=useSelector((state)=>state.products.selectedProduct)
  // const product = products[0];
  const { width } = useWindowDimensions();
  const dispatch=useDispatch()

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}))
  };
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 10 }}>
          {/* title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* price */}
          <Text style={styles.price}>₹{product.price}</Text>
          {/* description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {/* Add to cart button */}
        <View style={{ marginTop: 100 }}>
          <Pressable onPress={addToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
