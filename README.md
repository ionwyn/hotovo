# Project AION

### Overview
Project AION is an attempt at solving the human scheduling problem.  The software aims to predict human tasks and automate a daily schedule.  It sounds crazy, because it is.  The goal here is not to get users to follow what the program says to do, but to ultimately get users to be more mindful about what they do.

It is cross-platform, massive thanks to **React Native** and its developers, they all deserve reservations in heaven.

### Features done and under development
* __Knapsack__
Love everything about it.  It's such a beautiful algorithm, isn't it?
* __Item-based Collaborative-Filtering__
At the heart of the application is an algorithm that suggests to the user what to do based on previously completed tasks. I understand that we often do not do the same thing twice or for the same duration.  The latter is not a problem since the program only suggests what the user might do based on previous patterns, and does not tell them what to do.

* There is more to deal with here other, but due to time constraints, I will have to continue this article at another time.

The two features above are completed, though not integrated to the front-end, as there is still a lot of front-end work to figure out.

### Advanced features (only for future development)
* __Geotask-like feature__
Suggests tasks based on location.  If the user entered ("Buy Milk", "Study") earlier, and the user is at a grocery store, we suggest to the user "Buy Milk" first.
* __Leave now__
If you have a fixed task at a fixed location (e.g. lecture or work),the app reminds you to leave home prior to lecture, and suggests a route (potentially synchronizing with Google Maps)


## Get Started

### 1. System Requirements

* Globally installed [node](https://nodejs.org/en/)

* Globally installed [npm](https://www.npmjs.org/)

* Globally installed [react-native](https://facebook.github.io/react-native/docs/getting-started.html)



### 2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/ionwyn/hotovo.git

$ cd hotovo/

$ npm install
```

Link React Native Modules 

```sh
$ react-native link
```

### 3. Simulate for iOS


*	Run the following command in your terminal.

```sh
$ react-native run-ios
```

### 4. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal.

```sh
$ react-native run-android
```
