<link rel="stylesheet" href="_default/doc.css">
<link rel="stylesheet" href="_default/mdp.css">
<link rel="stylesheet" href="_default/font-cloud.css">
<link rel="stylesheet" href="../input.css">
<link rel="stylesheet" href="../button.css">
<link rel="stylesheet" href="../select.css">

[TOC]

# 输入框

类名：<code>be-input</code>

### 默认

> 为<code>input</code>添加<code>be-input</code>，默认宽度 100%

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <input type="text" class="be-input" placeholder="为Input添加be-input，默认宽度100%">
    </div>
</div>

```
<input type="text" class="be-input" placeholder="为Input添加be-input，默认宽度100%">
```

### 样式

> 给<code>be-input</code>添加<code>shadow</code>，设置浅色背景

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <input type="text" class="be-input shadow" placeholder="给be-input添加shadow，设置浅色背景">
    </div>
</div>

```
<input type="text" class="be-input shadow" placeholder="给be-input添加shadow，设置浅色背景">
```

### 尺寸

> 给<code>be-input</code>添加<code>small</code>、<code>big</code>改变尺寸

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <input type="text" class="be-input small" placeholder="小尺寸">
    </div>
    <div class="doc-section">
        <input type="text" class="be-input" placeholder="默认尺寸">
    </div>
    <div class="doc-section">
        <input type="text" class="be-input big" placeholder="大尺寸">
    </div>
</div>

```
<input type="text" class="be-input small" placeholder="小尺寸">
<input type="text" class="be-input" placeholder="默认尺寸">
<input type="text" class="be-input big" placeholder="大尺寸">
```

### 带图标的输入框组

> 使用<code>be-input-icon</code>，设置一个带图标的输入框，宽度固定，仅支持图标

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-icon">
            <span class="icon fc-mobile"></span>
            <input type="text" class="be-input" placeholder="图标在左">
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-icon">
            <input type="text" class="be-input" placeholder="图标在右">
            <span class="icon fc-mobile"></span>
        </div>
    </div>
</div>

```
<div class="be-input-icon">
    <span class="icon fc-mobile"></span>
    <input type="text" class="be-input" placeholder="图标在左">
</div>
<div class="be-input-icon">
    <input type="text" class="be-input" placeholder="图标在右">
    <span class="icon fc-mobile"></span>
</div>
```

> 给<code>a</code>使用<code>icon</code>类，转成图标按钮

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-icon">
            <a href="#" class="icon fc-search"></a>
            <input type="text" class="be-input" placeholder="图标在左">
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-icon">
            <input type="text" class="be-input" placeholder="图标在右">
            <a href="#" class="icon fc-search"></a>
        </div>
    </div>
</div>

```
<div class="be-input-icon">
    <a href="#" class="icon fc-search"></a>
    <input type="text" class="be-input" placeholder="按钮在左">
</div>
<div class="be-input-icon">
    <input type="text" class="be-input" placeholder="按钮在右">
    <a href="#" class="icon fc-search"></a>
</div>
```

> 左边图标右边按钮

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-icon">
            <span class="icon fc-mobile"></span>
            <input type="text" class="be-input" placeholder="搜索手机号码">
            <a href="#" class="icon fc-search"></a>
        </div>
    </div>
</div>

```
<div class="be-input-icon">
    <span class="icon fc-mobile"></span>
    <input type="text" class="be-input" placeholder="搜索手机号码">
    <a href="#" class="icon fc-search"></a>
</div>
```

> <code>be-input-icon</code>同样支持尺寸类<code>small</code>、<code>big</code>和浅色背景类<code>shadow</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-icon small">
            <span class="icon fc-mobile"></span>
            <input type="text" class="be-input" placeholder="搜索手机号码">
            <a href="#" class="icon fc-search"></a>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-icon big">
            <span class="icon fc-mobile"></span>
            <input type="text" class="be-input" placeholder="搜索手机号码">
            <a href="#" class="icon fc-search"></a>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-icon shadow">
            <span class="icon fc-mobile"></span>
            <input type="text" class="be-input" placeholder="搜索手机号码">
            <a href="#" class="icon fc-search"></a>
        </div>
    </div>
</div>

```
<div class="be-input-icon small">
    <span class="icon fc-mobile"></span>
    <input type="text" class="be-input" placeholder="搜索手机号码">
    <a href="#" class="icon fc-search"></a>
</div>
<div class="be-input-icon big">
    <span class="icon fc-mobile"></span>
    <input type="text" class="be-input" placeholder="搜索手机号码">
    <a href="#" class="icon fc-search"></a>
</div>
<div class="be-input-icon shadow">
    <span class="icon fc-mobile"></span>
    <input type="text" class="be-input" placeholder="搜索手机号码">
    <a href="#" class="icon fc-search"></a>
</div>
```

### 输入框组

> 在左侧设置<code>addon</code>，文字使用类名<code>addon-text</code>，按钮使用类名<code>be-button</code>，下拉菜单使用类名<code>be-select</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-group">
            <div class="addon"><span class="addon-text">+86</span></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group">
            <div class="addon"><button class="be-button default">获取验证码</button></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group">
            <div class="addon">
                <div class="be-select default">
                    <i class="select-icon fc-arrow-down"></i>
                    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
                </div>
            </div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
        </div>
    </div>
</div>

```
<div class="be-input-group">
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
</div>
<div class="be-input-group">
    <div class="addon"><button class="be-button default">获取验证码</button></div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
</div>
<div class="be-input-group">
    <div class="addon">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
</div>
```

> 在右侧设置<code>addon</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-group">
            <input type="text" class="be-input" placeholder="http://">
            <div class="addon"><span class="addon-text">.com</span></div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group">
            <input type="text" class="be-input" placeholder="请输入手机号码">
            <div class="addon"><button class="be-button primary">获取验证码</button></div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group">
            <input type="text" class="be-input" placeholder="请输入网址">
            <div class="addon">
                <div class="be-select default">
                    <i class="select-icon fc-arrow-down"></i>
                    <p class="select-selected"><span>.com</span></p>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-input-group">
    <input type="text" class="be-input" placeholder="http://">
    <div class="addon"><span class="addon-text">.com</span></div>
</div>
<div class="be-input-group">
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><button class="be-button primary">获取验证码</button></div>
</div>
<div class="be-input-group">
    <input type="text" class="be-input" placeholder="请输入网址">
    <div class="addon">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>.com</span></p>
        </div>
    </div>
</div>
```

> 两侧都可以设置<code>addon</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-group">
            <div class="addon"><span class="addon-text">+86</span></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
            <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group">
            <div class="addon">
                <div class="be-select default">
                    <i class="select-icon fc-arrow-down"></i>
                    <p class="select-selected"><span>http://</span></p>
                </div>
            </div>
            <input type="text" class="be-input" placeholder="请输入网址">
            <div class="addon">
                <div class="be-select default">
                    <i class="select-icon fc-arrow-down"></i>
                    <p class="select-selected"><span>.com</span></p>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-input-group">
    <div class="addon"><span class="addon-text">+86</span></div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
</div>
<div class="be-input-group">
    <div class="addon">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>http://</span></p>
        </div>
    </div>
    <input type="text" class="be-input" placeholder="请输入网址">
    <div class="addon">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>.com</span></p>
        </div>
    </div>
</div>
```

> 给<code>be-input-group</code>添加<code>cling</code>，设置元素之间间距为 0

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-group cling">
            <div class="addon"><span class="addon-text">+86</span></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
            <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group cling">
            <div class="addon">
                <div class="be-select default">
                    <i class="select-icon fc-arrow-down"></i>
                    <p class="select-selected"><span>http://</span></p>
                </div>
            </div>
            <input type="text" class="be-input" placeholder="请输入网址">
            <div class="addon">
                <div class="be-select default">
                    <i class="select-icon fc-arrow-down"></i>
                    <p class="select-selected"><span class="select-placeholder">请选择域名</span></p>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-input-group cling">
    <div class="addon"><span class="addon-text">+86</span></div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
</div>
<div class="be-input-group cling">
    <div class="addon">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>http://</span></p>
        </div>
    </div>
    <input type="text" class="be-input" placeholder="请输入网址">
    <div class="addon">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择域名</span></p>
        </div>
    </div>
</div>
```

> <code>be-input-group</code>同样支持尺寸类<code>small</code>、<code>big</code>和浅色背景类<code>shadow</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-input-group cling small">
            <div class="addon"><span class="addon-text">+86</span></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
            <div class="addon"><a href="#" class="be-button default">获取验证码</a></div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group cling big">
            <div class="addon"><span class="addon-text">+86</span></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
            <div class="addon"><a href="#" class="be-button default">获取验证码</a></div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-input-group cling shadow">
            <div class="addon"><span class="addon-text">+86</span></div>
            <input type="text" class="be-input" placeholder="请输入手机号码">
            <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
        </div>
    </div>
</div>

```
<div class="be-input-group cling small">
    <div class="addon"><span class="addon-text">+86</span></div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><a href="#" class="be-button default">获取验证码</a></div>
</div>
<div class="be-input-group cling big">
    <div class="addon"><span class="addon-text">+86</span></div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><a href="#" class="be-button default">获取验证码</a></div>
</div>
<div class="be-input-group cling shadow">
    <div class="addon"><span class="addon-text">+86</span></div>
    <input type="text" class="be-input" placeholder="请输入手机号码">
    <div class="addon"><a href="#" class="be-button primary">获取验证码</a></div>
</div>
```
