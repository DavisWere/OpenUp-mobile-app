/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/(tabs)` | `/(tabs)/CustomHeader` | `/(tabs)/Login` | `/(tabs)/Signup` | `/(tabs)/WelcomeScreen` | `/(tabs)/api` | `/(tabs)/axiosConfig` | `/(tabs)/constants` | `/CustomHeader` | `/Login` | `/Signup` | `/WelcomeScreen` | `/_sitemap` | `/api` | `/axiosConfig` | `/constants`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
