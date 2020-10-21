# minecraft nbt dic

## 简介
用于生成minecraft中的枚举值，主要服务于各类生成器

## 使用
1. 安装nodejs
2. 执行index.js即可在`./dist`目录下生成合并的json文件

## 参与贡献
minecraft nbt dic现在还存在大量需要补充的信息

规范：在./src/dic目录新建一个.json文件，文件名即为字典值的`key`值（大驼峰）
例如：
``` json
[
    { "id": "black", "name": "黑色" },
    { "id": "dark_blue", "name": "深蓝色" },
    { "id": "yellow", "name": "黄色" },
    { "id": "white", "name": "白色" }
]
```
