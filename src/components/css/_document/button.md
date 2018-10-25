<link rel="stylesheet" href="_default/doc.css">
<link rel="stylesheet" href="_default/mdp.css">
<link rel="stylesheet" href="_default/font-cloud.css">
<link rel="stylesheet" href="../button.css">

[TOC]

# 按钮

类名：<code>be-button</code>

### 可以使用的标签

<code>a</code>、<code>button</code>、<code>input</code>都可以使用

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <a href="#" class="be-button default">Link</a>
        <button class="be-button default">Button</button>
        <input type="button" value="Input Button" class="be-button default">
        <input type="submit" value="Input Submit" class="be-button default">
    </div>
</div>

```
<a href="#" class="be-button default">Link</a>
<button class="be-button default">Button</button>
<input type="button" value="Input Button" class="be-button default">
<input type="submit" value="Input Submit" class="be-button default">
```

### 按钮样式

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <a href="#" class="be-button default">默认</a>
        <a href="#" class="be-button primary">主色</a>
        <a href="#" class="be-button primary-ghost">主色(反色)</a>
        <a href="#" class="be-button success">成功</a>
        <a href="#" class="be-button success-ghost">成功(反色)</a>
        <a href="#" class="be-button warning">警告</a>
        <a href="#" class="be-button warning-ghost">警告(反色)</a>
        <a href="#" class="be-button danger">危险</a>
        <a href="#" class="be-button danger-ghost">危险(反色)</a>
        <a href="#" class="be-button link">链接</a>
        <a href="#" class="be-button disabled">禁用</a>
    </div>
</div>

```
<a href="#" class="be-button default">默认</a>
<a href="#" class="be-button primary">主色</a>
<a href="#" class="be-button primary-ghost">主色(反色)</a>
<a href="#" class="be-button success">成功</a>
<a href="#" class="be-button success-ghost">成功(反色)</a>
<a href="#" class="be-button warning">警告</a>
<a href="#" class="be-button warning-ghost">警告(反色)</a>
<a href="#" class="be-button danger">危险</a>
<a href="#" class="be-button danger-ghost">危险(反色)</a>
<a href="#" class="be-button link">链接</a>
<a href="#" class="be-button disabled">禁用</a>
```

### 按钮 doing

给<code>be-button</code>添加<code>doing</code>，如果需要 loading 则需引入<code>animation.css</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <a href="#" class="be-button default doing"><i class="fc-loading-line"></i>默认</a>
        <a href="#" class="be-button primary doing"><i class="fc-loading-line"></i>主色</a>
        <a href="#" class="be-button primary-ghost doing"><i class="fc-loading-line"></i>主色(反色)</a>
        <a href="#" class="be-button success doing"><i class="fc-loading-line"></i>成功</a>
        <a href="#" class="be-button success-ghost doing"><i class="fc-loading-line"></i>成功(反色)</a>
        <a href="#" class="be-button warning doing"><i class="fc-loading-line"></i>警告</a>
        <a href="#" class="be-button warning-ghost doing"><i class="fc-loading-line"></i>警告(反色)</a>
        <a href="#" class="be-button danger doing"><i class="fc-loading-line"></i>危险</a>
        <a href="#" class="be-button danger-ghost doing"><i class="fc-loading-line"></i>危险(反色)</a>
        <a href="#" class="be-button link doing"><i class="fc-loading-line"></i>链接</a>
    </div>
</div>

```
<a href="#" class="be-button default">默认</a>
<a href="#" class="be-button primary">主色</a>
<a href="#" class="be-button primary-ghost">主色(反色)</a>
<a href="#" class="be-button success">成功</a>
<a href="#" class="be-button success-ghost">成功(反色)</a>
<a href="#" class="be-button warning">警告</a>
<a href="#" class="be-button warning-ghost">警告(反色)</a>
<a href="#" class="be-button danger">危险</a>
<a href="#" class="be-button danger-ghost">危险(反色)</a>
<a href="#" class="be-button link">链接</a>
<a href="#" class="be-button disabled">禁用</a>
```

### 按钮尺寸

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <a href="#" class="be-button primary big">大尺寸</a>
        <a href="#" class="be-button primary">默认尺寸</a>
        <a href="#" class="be-button primary small">小尺寸</a>
    </div>
</div>

```
<a href="#" class="be-button primary big">大尺寸</a>
<a href="#" class="be-button primary">默认尺寸</a>
<a href="#" class="be-button primary small">小尺寸</a>
```

添加<code>block</code>设置按钮宽度 100%

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <a href="#" class="be-button primary block">宽度100%</a>
    </div>
</div>

```
<a href="#" class="be-button primary block">宽度100%</a>
```

### 按钮图标

添加<code>i</code>可设置图标

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <a href="#" class="be-button primary"><i class="fc-close"></i></a>
        <a href="#" class="be-button primary"><i class="fc-arrow-left"></i>图标在左</a>
        <a href="#" class="be-button primary">图标在右<i class="fc-arrow-right"></i></a>
    </div>
</div>

```
<a href="#" class="be-button primary"><i class="fc-close"></i></a>
<a href="#" class="be-button primary"><i class="fc-arrow-left"></i>图标在左</a>
<a href="#" class="be-button primary">图标在右<i class="fc-arrow-right"></i></a>
```

### 按钮组

使用<code>be-button-group</code>构建按钮组

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group">
            <a href="#" class="be-button primary">按钮</a>
            <a href="#" class="be-button primary">按钮</a>
            <a href="#" class="be-button danger">按钮</a>
        </div>
    </div>
</div>

```
<div class="be-button-group">
    <a href="#" class="be-button primary">按钮</a>
    <a href="#" class="be-button primary">按钮</a>
    <a href="#" class="be-button danger">按钮</a>
</div>
```

给<code>be-button-group</code>添加<code>cling</code>可以让按钮间距为 0

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group cling">
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button danger-ghost">按钮</a>
        </div>
    </div>
</div>

```
<div class="be-button-group cling">
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button danger-ghost">按钮</a>
</div>
```

把<code>be-button-group</code>放进一个<code>be-button-group</code>里可以做成一个更复杂的组件

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group">
            <div class="be-button-group">
                <a href="#" class="be-button primary">按钮</a>
            </div>
            <div class="be-button-group cling">
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button danger-ghost">按钮</a>
            </div>
        </div>
    </div>
</div>

```
<div class="be-button-group">
    <div class="be-button-group">
        <a href="#" class="be-button primary">按钮</a>
    </div>
    <div class="be-button-group cling">
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button danger-ghost">按钮</a>
    </div>
</div>
```

<code>be-button-group</code>或<code>be-button-group</code>默认居中对齐，给最外层的<code>be-button-group</code>添加<code>left</code>或<code>right</code>可以设置左对齐或右对齐

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group cling left">
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button danger-ghost">按钮</a>
        </div>
    </div>
</div>

```
<div class="be-button-group cling left">
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button danger-ghost">按钮</a>
</div>
```

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group cling right">
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button danger-ghost">按钮</a>
        </div>
    </div>
</div>

```
<div class="be-button-group cling right">
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button danger-ghost">按钮</a>
</div>
```

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group left">
            <div class="be-button-group">
                <a href="#" class="be-button primary">按钮</a>
            </div>
            <div class="be-button-group cling">
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button danger-ghost">按钮</a>
            </div>
        </div>
    </div>
</div>

```
<div class="be-button-group left">
    <div class="be-button-group">
        <a href="#" class="be-button primary">按钮</a>
    </div>
    <div class="be-button-group cling">
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button danger-ghost">按钮</a>
    </div>
</div>
```

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group right">
            <div class="be-button-group">
                <a href="#" class="be-button primary">按钮</a>
            </div>
            <div class="be-button-group cling">
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button danger-ghost">按钮</a>
            </div>
        </div>
    </div>
</div>

```
<div class="be-button-group right">
    <div class="be-button-group">
        <a href="#" class="be-button primary">按钮</a>
    </div>
    <div class="be-button-group cling">
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button danger-ghost">按钮</a>
    </div>
</div>
```

### 按钮组的尺寸

给最外层的<code>be-button-group</code>添加<code>small</code>或<code>big</code>可以改变按钮组的尺寸

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-button-group cling small">
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button danger-ghost">按钮</a>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-button-group cling big">
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button primary-ghost">按钮</a>
            <a href="#" class="be-button danger-ghost">按钮</a>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-button-group small">
            <div class="be-button-group">
                <a href="#" class="be-button primary">按钮</a>
            </div>
            <div class="be-button-group cling">
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button danger-ghost">按钮</a>
            </div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-button-group big">
            <div class="be-button-group">
                <a href="#" class="be-button primary">按钮</a>
            </div>
            <div class="be-button-group cling">
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button primary-ghost">按钮</a>
                <a href="#" class="be-button danger-ghost">按钮</a>
            </div>
        </div>
    </div>
</div>

```
<div class="be-button-group cling small˜">
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button danger-ghost">按钮</a>
</div>
<div class="be-button-group cling big">
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button primary-ghost">按钮</a>
    <a href="#" class="be-button danger-ghost">按钮</a>
</div>
<div class="be-button-group small">
    <div class="be-button-group">
        <a href="#" class="be-button primary">按钮</a>
    </div>
    <div class="be-button-group cling">
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button danger-ghost">按钮</a>
    </div>
</div>
<div class="be-button-group big">
    <div class="be-button-group">
        <a href="#" class="be-button primary">按钮</a>
    </div>
    <div class="be-button-group cling">
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button primary-ghost">按钮</a>
        <a href="#" class="be-button danger-ghost">按钮</a>
    </div>
</div>
```
