<link rel="stylesheet" href="_default/doc.css">
<link rel="stylesheet" href="_default/mdp.css">
<link rel="stylesheet" href="_default/font-cloud.css">
<link rel="stylesheet" href="../alert.css">

[TOC]

# 警告框

类名：<code>be-alert</code>

### 页面中的警告框

> <code>be-alert</code>由<code>alert-close</code>、<code>alert-icon</code>、<code>alert-title</code>和<code>alert-content</code>组成，可自由组合

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-alert primary">
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-alert primary">
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-alert primary">
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-title">友情提醒：</div>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-alert primary">
            <span class="alert-close fc-close"></span>
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-title">友情提醒：</div>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
</div>

```
<div class="be-alert primary">
    <span class="alert-close fc-close"></span>
    <i class="alert-icon fc-info-s"></i>
    <div class="alert-title">友情提醒：</div>
    <div class="alert-content">天干物燥，小心火烛！</div>
</div>
```

### 警告框的样式

> 提供<code>primary</code>、<code>warning</code>、<code>danger</code>、<code>success</code>四种样式

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-alert primary">
            <span class="alert-close fc-close"></span>
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-title">友情提醒：</div>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-alert warning">
            <span class="alert-close fc-close"></span>
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-title">友情提醒：</div>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-alert danger">
            <span class="alert-close fc-close"></span>
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-title">友情提醒：</div>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
    <div class="doc-section">
        <div class="be-alert success">
            <span class="alert-close fc-close"></span>
            <i class="alert-icon fc-info-s"></i>
            <div class="alert-title">友情提醒：</div>
            <div class="alert-content">天干物燥，小心火烛！</div>
        </div>
    </div>
</div>

```
<div class="be-alert primary">
    <span class="alert-close fc-close"></span>
    <i class="alert-icon fc-info-s"></i>
    <div class="alert-title">友情提醒：</div>
    <div class="alert-content">天干物燥，小心火烛！</div>
</div>
```

### 浮于顶部的警告框

> 给<code>be-alert</code>添加<code>fixed</code>可置于顶部

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-alert-fixed">
            <div class="be-alert-box">
                <div class="be-alert primary">
                    <i class="alert-icon fc-info-s"></i>
                    <div class="alert-content">天干物燥，小心火烛！</div>
                </div>
            </div>
            <div class="be-alert-box">
                <div class="be-alert warning">
                    <i class="alert-icon fc-info-s"></i>
                    <div class="alert-content">天干物燥，小心火烛！</div>
                </div>
            </div>
            <div class="be-alert-box">
                <div class="be-alert danger">
                    <i class="alert-icon fc-info-s"></i>
                    <div class="alert-content">天干物燥，小心火烛！</div>
                </div>
            </div>
            <div class="be-alert-box">
                <div class="be-alert success">
                    <i class="alert-icon fc-info-s"></i>
                    <div class="alert-content">天干物燥，小心火烛！</div>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-alert fixed primary">
    <i class="alert-icon fc-info-s"></i>
    <div class="alert-content">天干物燥，小心火烛！</div>
</div>
```
