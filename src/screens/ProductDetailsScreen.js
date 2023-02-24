import {
  View,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];
  const { width } = useWindowDimensions();
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
      <View style={{padding:10}}>
      {/* title */}
      <Text style={styles.title}>{product.name}</Text>
      {/* price */}
      <Text style={styles.price}>₹{product.price}</Text>
      {/* description */}
      <Text style={styles.description}>{product.description}</Text>
      
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize:34,
    fontWeight:'500',
    marginVertical:10
  },
  price:{
    fontWeight:'500',
    fontSize:16,
    letterSpacing:1.5

  },
  description:{
    marginVertical:10,
    fontSize:18,
    lineHeight:25,
    fontWeight:'300'
  }
});

export default ProductDetailsScreen;
