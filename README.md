### uniapp 全局音频播放组件

---

- 支持 h5, app, 微信小程序播放
- 支持小程序, app 后台播放
- 支持来电中断后续播(app 端)

#### 后台播放配置

小程序

```
 "mp-weixin" : {
		"requiredBackgroundModes" : [ "audio" ],
        "appid" : "",
        "setting" : {
            "urlCheck" : false
        },
        "usingComponents" : true
    }
```

iOS

```
"ios" : {
    "UIBackgroundModes" : [ "audio" ]
}
```
