# picture-compressor

前端图片压缩工具，使用canvas对图片做压缩处理。

使用时，可以设置目标图片的宽高
返回的目标图片填充模式有两种
* **scale** 等比例缩放，保证图片在设置的宽高之内完成显示

![](https://suohb.com/images/scale.png)

* **fill** 平铺显示，将图片尺寸设置为参数宽高，可能引起图片变形

![](https://suohb.com/images/fill.png)


## 安装
```
npm install picture-compressor --save
```

## 使用
```html
<input id="upload" type="file" value="上传"/>
<script>
import pictureCompress from 'picture-compress'

var upload = document.getElementById('upload')
upload.addEventListener('change', () => {
  let file = upload.files[0]
  let fr = new FileReader()
  fr.readAsDataURL(file)
  fr.onload = function(){
    pictureCompress({
      img: this.result,
      width: 640,
      height:640,
    }).then(res => {
      console.log(res)
      var img = new Image()
      img.src = res.img
    }).catch(err => {
      console.log(err)
    })
  }
})
</script>
```

## options选项

name |type |  描述 | 是否必选 | 默认值
-|-|-|-|-
img|String | 图片资源的url或者base64 | Y | -
width|Number|生成图片的宽度 > 0| Y | -
height|Number|生成图片的高度 > 0| Y | -
quality|Number|生产图片质量| N | 0.92
type| String | 生成图片类型(jpg or png) | N | jpg
fit| String | 图片填充方式(scale:等比缩放 or fill:填充) | N | scale

## returns 返回值

name | type | 描述
-|-|-
img|String|图片base64
width|Number|图片宽度
height|Number|图片高度