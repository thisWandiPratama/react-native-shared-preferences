# react-native-shared-preferences
Android's Native key value storage system in React Native

## Installation
< RN 0.47

```
npm install react-native-shared-preferences@0.0.8 --save
```

>= RN 0.47

```
npm install react-native-shared-preferences --save
```

## Project setup and initialization

##### In android/settings.gradle

```
...
include ':react-native-shared-preferences', ':app'
project(':react-native-shared-preferences').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-shared-preferences/android')
```

#### In android/app/build.gradle

```
...
dependencies {
    /* YOUR DEPENDENCIES HERE */
    implemention "com.facebook.react:react-native:+"
    implemention project(":react-native-shared-preferences") // <--- add this
}
```

#### Register Module (in MainApplication.java)

```
import in.sriraman.sharedpreferences.RNSharedPreferencesReactPackage;  // <--- import

public class MainActivity extends ReactActivity {
  ......

  @Override
  protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNSharedPreferencesReactPackage(); // <--- Add this
      );
  }
  ......
}
```

## Usage

#### Import

```
var SharedPreferences = require('react-native-shared-preferences');
```

#### Configure name of preferences file. (Optional. Must be called before other functions.)

```
SharedPreferences.setName("name");
```

#### Set Item

```
SharedPreferences.setItem("key","value");
```

#### Get an value

````
SharedPreferences.getItem("key", function(value){
  console.log(value);
});
```

#### Get multiple items

```
SharedPreferences.getItems(["key1","key2"], function(values){
  console.log(values)
});
```

#### Get all values

```
SharedPreferences.getAll(function(values){
  console.log(values);
});
```

#### Clear all values

```
SharedPreferences.clear();
```

#### Get all keys - returns promise with array of keys

```
SharedPreferences.getAllKeys(function(keys){
  console.log(keys);
});
```

#### Remove Item

```
SharedPreferences.removeItem("key");
```

