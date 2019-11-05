# Flex布局
## 固定尺寸 
    通过添加类名 basis-xs 控制尺寸，支持xs、sm、df、lg、xl五种尺寸
:::demo 
```html
    <div class="basis-xs bg-grey margin-xs padding-sm radius">xs(20%)</div>
    <div class="basis-sm bg-grey margin-xs padding-sm radius">sm(40%)</div>
    <div class="basis-df bg-grey margin-xs padding-sm radius">sub(50%)</div>
    <div class="basis-lg bg-grey margin-xs padding-sm radius">lg(60%)</div>
    <div class="basis-xl bg-grey margin-xs padding-sm radius">xl(80%)</div>
```
:::
## 比例布局
    父元素添加类名 flex，子元素添加类名 flex-sub ，flex-twice ， flex-treble
:::demo 
```html
    <div class="flex">
        <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
        <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
    </div>
    <div class="flex  p-xs margin-bottom-sm mb-sm">
        <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
        <div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
    </div>
    <div class="flex  p-xs margin-bottom-sm mb-sm">
        <div class="flex-sub bg-grey padding-sm margin-xs radius">1</div>
        <div class="flex-twice bg-grey padding-sm margin-xs radius">2</div>
        <div class="flex-treble bg-grey padding-sm margin-xs radius">3</div>
    </div>
```
:::
## 水平对齐
 父元素添加类名 flex，子元素添加类名 justify-start ，支持 justify-start，justify-end，justify-center，justify-between，justify-around
:::demo 
```html
    <div class="flex solid-bottom padding justify-start">
        <div class="bg-grey padding-sm margin-xs radius">start</div>
        <div class="bg-grey padding-sm margin-xs radius">start</div>
    </div>
    <div class="flex solid-bottom padding justify-end">
        <div class="bg-grey padding-sm margin-xs radius">end</div>
        <div class="bg-grey padding-sm margin-xs radius">end</div>
    </div>
    <div class="flex solid-bottom padding justify-center">
        <div class="bg-grey padding-sm margin-xs radius">center</div>
        <div class="bg-grey padding-sm margin-xs radius">center</div>
    </div>
    <div class="flex solid-bottom padding justify-between">
        <div class="bg-grey padding-sm margin-xs radius">between</div>
        <div class="bg-grey padding-sm margin-xs radius">between</div>
    </div>
    <div class="flex solid-bottom padding justify-around">
        <div class="bg-grey padding-sm margin-xs radius">around</div>
        <div class="bg-grey padding-sm margin-xs radius">around</div>
    </div>
```
:::
## 垂直对齐
    父元素添加类名 flex，子元素添加类名 align-start ，支持 align-start，align-end，align-center
:::demo 
```html
    <div class="flex solid-bottom padding align-start">
        <div class="bg-grey padding-lg margin-xs radius">JoinUI</div>
        <div class="bg-grey padding-sm margin-xs radius">start</div>
    </div>
    <div class="flex solid-bottom padding align-end">
        <div class="bg-grey padding-lg margin-xs radius">JoinUI</div>
        <div class="bg-grey padding-sm margin-xs radius">end</div>
    </div>
    <div class="flex solid-bottom padding align-center">
        <div class="bg-grey padding-lg margin-xs radius">JoinUI</div>
        <div class="bg-grey padding-sm margin-xs radius">center</div>
    </div>
```
:::

# Grid布局
## 等分列
    父元素添加类名grid，col-1,支持9列栅格
## 等高
    父元素添加类名grid，grid-square
# 辅助布局
## 浮动
左浮动添加类名 fl，右浮动添加类名 fr

## 内外边距
    {size}的尺寸有xs/sm/df/lg/xl