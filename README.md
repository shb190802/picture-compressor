# picture-compressor

前端图片压缩工具，使用 canvas 对图片做压缩处理。

使用时，可以设置目标图片的宽高
返回的目标图片填充模式有两种

- **scale** 等比例缩放，保证图片在设置的宽高之内完成显示

![](https://suohb.com/images/scale.png)

- **fill** 平铺显示，将图片尺寸设置为参数宽高，可能引起图片变形

![](https://suohb.com/images/fill.png)

### 支持图片旋转

![](https://suohb.com/images/rotate.png)

## 安装

```
npm install picture-compressor --save
```

## 使用

```html
<template>
  <div id="app">
    <input ref="upload" type="file" value="上传" @change="fileUpload" />
  </div>
</template>
<script>
  import pictureCompress from "picture-compressor"
  export default {
    name: "APP",
    methods: {
      fileUpload: function() {
        var file = this.$refs["upload"].files[0]
        var rotate = 90
        var reads = new FileReader()
        reads.readAsDataURL(file)
        reads.onload = function() {
          pictureCompress({
            img: this.result,
            width: 400,
            height: 400,
            rotate: rotate
          }).then(res => {
            var img = new Image()
            img.src = res.img
            document.body.appendChild(img)
          })
        }
      }
    }
  }
</script>
```

or

```html
<input type="file" id="file" />
<script src="../dist/picture-compressor.js"></script>
<script>
  rotate = 0
  var files = document.getElementById("file")
  files.addEventListener("change", () => {
    var file = files.files[0]
    var reads = new FileReader()
    reads.readAsDataURL(file)
    reads.onload = function() {
      pictureCompress({
        img: this.result,
        width: 100,
        height: 100,
        rotate: rotate
      }).then(res => {
        var img = new Image()
        img.src = res.img
        document.body.appendChild(img)
      })
    }
  })
</script>
```

## options 选项

| name    | type   | 描述                                      | 是否必选 | 默认值 |
| ------- | ------ | ----------------------------------------- | -------- | ------ |
| img     | String | 图片资源的 url 或者 base64                | Y        | -      |
| width   | Number | 生成图片的宽度 > 0                        | Y        | -      |
| height  | Number | 生成图片的高度 > 0                        | Y        | -      |
| quality | Number | 生产图片质量                              | N        | 0.92   |
| type    | String | 生成图片类型(jpg or png)                  | N        | jpg    |
| fit     | String | 图片填充方式(scale:等比缩放 or fill:填充) | N        | scale  |
| rotate  | Number | 图片旋转（0,90,-90,180）度                | N        | 0      |

## returns 返回值

| name   | type   | 描述        |
| ------ | ------ | ----------- |
| img    | String | 图片 base64 |
| width  | Number | 图片宽度    |
| height | Number | 图片高度    |
