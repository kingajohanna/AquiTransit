# AquiTransit

## Requirements

install node 18 from here: https://nodejs.org/en/download

setup for windows:

- android: https://reactnative.dev/docs/environment-setup?os=windows&platform=android
- ios: you can not run on windows

setup for mac:

- android: https://reactnative.dev/docs/environment-setup?os=macos&platform=android
- ios: https://reactnative.dev/docs/environment-setup?os=macos&platform=ios

## Install

Install npm packages: `npm i`
(Only on mac) Install pods for iOS: `npx pod-install`

## Run

Start only the metro server: `npm run start` - use this the node_modules didn't change and the application is already installed on the test device
Android: `npm run android`
(Only on mac) iOS: `npm run ios`

## Development packages

### Material UI

We can use this package to create components with predefined styles

More information:
https://www.react-native-material.com/docs/getting-started

## Directories

### components

For all reusable thing, like buttons, headers, texts

### navigation

The navigation logic, if we would have a registration flow, we should have to create a new navigator for that - that would be here

### screens

One screen of the application, the screens render/contain the components

### types

The types, interfaces for example an API call

### api

The actual API calls

### stores

If we need to store some data, which we using on multiple screen, the we should create a store for it, so we can access to that data from everywhere.

### constants

Helper things, like regex checks, so we can use those in several screens/components
