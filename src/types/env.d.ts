declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string;
    PRODUCTS_ENDPOINT: string;
    PRODUCT_VERIFICATION: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
