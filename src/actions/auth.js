import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN } from '../config';

// Na tela login é gerado um novo token
export const fetchToken = async jwt => await AsyncStorage.setItem(ACCESS_TOKEN, jwt);

// No Custom Drawer (Navigation) tem um botão de deslogar
export const onSignOut = async () => await AsyncStorage.removeItem(ACCESS_TOKEN);

// Verificar se o usuário está logado
export const isSignedIn = async () => await AsyncStorage.getItem(ACCESS_TOKEN);
