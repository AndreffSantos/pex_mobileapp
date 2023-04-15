import { SafeAreaView, Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter, usePathname, Link } from "expo-router";
import styles from "../src/styles";
import Navbar from "../src/components/navbar/index";
import TopBanner from '../src/assets/topBanner.png';
import BottomBanner from '../src/assets/bottomBanner.png';
import ProductCard from "../src/components/cards/productCard";
import Torneira from '../src/assets/produtos/card/torneira.png';
import Piso from '../src/assets/produtos/card/piso.png';
import Brands from '../src/assets/SVG/brands.svg';
import Tabbar from "../src/components/tabbar";

export default function Home() {
  const router = useRouter();
  const path = usePathname();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navbar router={router} path={path} />

        <Image source={TopBanner} />

        <View style={{ marginTop: 20 }}>
          <View style={styles.containerText}>
            <Text style={styles.subtitle}>Categorias</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly'

          }}>
            <TouchableOpacity style={localStyle.button}>
              <Text>Todas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={localStyle.button}>
              <Text>Ofertas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={localStyle.button}>
              <Text>Pisos e Porcelanatos</Text>
            </TouchableOpacity>
          </View>


        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ marginLeft: 20 }}>Produtos populares</Text>

          <View style={localStyle.constainerCard}>
            <ProductCard
              img={Torneira}
              departament={'Louças e metais'}
              product={'Torneira Puravida Hansgrohe'}
              router={router}
            />

            <ProductCard
              img={Piso}
              departament={'Pisos e porcelanato'}
              product={'Portobello Mont blanc Natural 90x...'}
              router={router}
            />
          </View>
        </View>

        <Brands width={400} height={40} style={{ marginTop: 10 }}/>

        <View>
          <Image source={BottomBanner} />
        </View>
        
        <Tabbar />

      </ScrollView>
    </SafeAreaView>
  );
}

const localStyle = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#D3D3D3',
    borderRadius: 50,
    padding: 10
  },
  constainerCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})
