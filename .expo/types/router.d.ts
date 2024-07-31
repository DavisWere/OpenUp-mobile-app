/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/(tabs)` | `/(tabs)/CustomHeader` | `/(tabs)/Login` | `/(tabs)/Signup` | `/(tabs)/WelcomeScreen` | `/(tabs)/api` | `/(tabs)/axiosConfig` | `/(tabs)/constants` | `/(tabs)\` | `/(tabs)\Login` | `/(tabs)\WelcomeScreen` | `/..\components\AIchat` | `/..\components\Home` | `/..\components\Messages` | `/..\components\screens\Appointments` | `/..\components\subcomponents\Accessibility` | `/..\components\subcomponents\AccessibilityContext` | `/..\components\subcomponents\Games` | `/..\components\subcomponents\MessageInterface` | `/..\components\subcomponents\Settings` | `/..\components\subcomponents\Wallet` | `/CustomHeader` | `/Login` | `/Signup` | `/WelcomeScreen` | `/_sitemap` | `/api` | `/axiosConfig` | `/constants`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
