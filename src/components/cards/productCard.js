import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";

export default function ProductCard({ img, departament, product, router }) {
  return (
    <View style={localStyle.Card}>
      <Image source={img} height={108} width={125} style={{ marginTop: 10 }} />

      <View>
        <Text
          style={{
            color: '#999999',
            fontSize: 8,
            fontWeight: 400,
            marginTop: 10 
          }}
        >{departament}</Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 12,
            fontWeight: 500,
            marginTop: 10 
          }}
        >{product}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={ () => router.push(`/product/${product}`) }
      >
        <Text>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyle = StyleSheet.create({
  Card: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: '#D3D3D3',
    width: 141,
    height: 223,
    alignItems: 'center',
  }
});