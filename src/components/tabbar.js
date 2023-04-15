import Cart from '../assets/SVG/cart.svg';
import Discover from '../assets/SVG/discover.svg';
import Bookmark from '../assets/SVG/bookmark.svg';
import Profile from '../assets/SVG/profile.svg';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Tabbar() {
  return (
    <View style={localStyle.Tab}>
      <Link href={'/construction'} style={localStyle.linkTab}>
        <Cart width={24} height={24} />
      </Link>

      <Link href={'/home'} style={localStyle.linkTab}>
        <Discover width={24} height={24} />
      </Link>

      <Link href={'/construction'} style={localStyle.linkTab}>
        <Bookmark width={24} height={24} />
      </Link>

      <Link href={'/profile'} style={localStyle.linkTab}>
        <Profile width={24} height={24} />
      </Link>
    </View>
  );
}

const localStyle = StyleSheet.create({
  Tab: {
    height: 112,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkTab: {
    marginHorizontal: 20,
  }
})