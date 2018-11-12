## 启动
```
npm install 

npm run ios
npm run android
```


## 图标问题
```
/**
*   react-native 中使用了 react-native-vector-icons
*   直接 import 会报错需要link
*   https://www.npmjs.com/package/react-native-vector-icons#examples
**/

react-native link react-native-vector-icons
import Icon from "react-native-vector-icons/Ionicons"

```