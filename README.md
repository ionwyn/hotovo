# project AION

### Overview
project AION is an attempt at solving human scheduling problem.  The software aims to predict human tasks and automate daily schedule.  It sounds crazy, because it is.  The goal here is not to get users to follow what the program tells users to do, but to ultimately get users to be more mindful about what they do.

It is cross-platform, massive thanks to **React Native** and its developers, they all deserve reservations in heaven.

### Features done and under development
* __Knapsack__
Love everything about it.  It's just such a beautiful algorithm, isn't it?
* __Item-based Collaborative-Filtering__
At the heart of the application is this algorithm that suggests the user on what to do based on previously completed tasks.  I understand that often we do not do the same thing twice or do the same thing twice for the same duration.  The latter is not a problem since we only suggests what the users might do based on previous patterns, not tell them what to do.

* There's other stuff, but due to time constraint, I will have to continue this article other time.

The two features above are completed, though not integrated to the front-end, as there is still a lot of front-end work to figure.

### Advanced features (only for future development)
* __Geotask-like feature__
Suggest tasks based on location.  If earlier the user entered ("Buy Milk", "Study"), and if the user is at a grocery store, we suggest the user to "Buy Milk" first.
* __Leave now__
If you have a fixed task at fixed location (e.g. lecture or work), have the app remind you to leave home prior to lecture, and suggest a route (by maybe synchronizing with Google Maps)


## Get Started

####1. System Requirements

* Globally installed [node](https://nodejs.org/en/) >= 4.0

* Globally installed [npm](https://www.npmjs.org/) >= 3.0

* Globally installed [rnpm](https://github.com/rnpm/rnpm) *(only if React Native version < 0.29)*

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)



####2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/ionwyn/hotovo.git

$ cd Divie-react-native/

$ npm install
```

If React Native < 0.29

```sh
$ rnpm link
```

If React Native >= 0.29

```sh
$ react-native link
```

####3. Simulate for iOS

**Method One**

*	Open the project in Xcode from **ios/Divide.xcodeproj**.

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal.

```sh
$ react-native run-ios
```

###4. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal.

```sh
$ react-native run-android
```
