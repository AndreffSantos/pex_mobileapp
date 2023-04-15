import { View, Text } from "react-native";
import { Link } from "expo-router";
import Seta from '../assets/SVG/setaDireita.svg';


export default function Navigator({ Icon, description, route, color }) {
  return (
    <View 
      style={{
        height: 56,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Icon width={24} height={24} />
        <Text style={{
          marginLeft: 20,
          color: !color ? '#000' : color,
        }}>{description}</Text>
      </View>
      <Link
        href={route}
      >
        <Seta width={24} height={24} />
      </Link>
    </View>
  );
}