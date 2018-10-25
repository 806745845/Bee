<link rel="stylesheet" href="_default/doc.css">
<link rel="stylesheet" href="_default/mdp.css">
<link rel="stylesheet" href="_default/font-cloud.css">
<link rel="stylesheet" href="../dropdown.css">
<link rel="stylesheet" href="../select.css">

[TOC]

# 选择框

类名：<code>be-select</code>

### 默认

> 默认样式<code>default</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select default">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
</div>

```
<div class="be-select default">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
```

### 样式

> 给<code>be-select</code>添加<code>primary</code>、<code>warning</code>、<code>danger</code>、<code>success</code>、<code>shadow</code>设置样式

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select primary">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select warning">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select danger">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select success">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select shadow">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
        </div>
    </div>
</div>

```
<div class="be-select primary">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
<div class="be-select warning">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
<div class="be-select danger">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
<div class="be-select success">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
<div class="be-select shadow">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
```

### 简单样式

> 给<code>be-select</code>添加<code>simple</code>设置成简单样式，不与<code>primary</code>、<code>warning</code>、<code>danger</code>、<code>success</code>、<code>shadow</code>兼容

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select simple">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>请选择区域</span></p>
        </div>
    </div>
</div>

```
<div class="be-select simple">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
```

### 禁用

> 给<code>be-select</code>添加<code>disabled</code>禁用下拉框

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select primary disabled">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>请选择区域</span></p>
        </div>
    </div>
    <div class="doc-section" style="width: 360px;">
        <div class="be-select simple disabled">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span>请选择区域</span></p>
        </div>
    </div>
</div>

```
<div class="be-select primary disabled">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
<div class="be-select simple disabled">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择区域</span></p>
</div>
```

> 普通选择器<code>be-select-list</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section" style="width: 360px; height: 360px;">
        <div class="be-select default active">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择分类</span></p>
        </div>
        <div class="be-dropdown" style="top: 36px; left: 0;">
            <div class="be-select-list">
                <div class="be-select-content">
                    <ul>
                        <li>
                            <div class="select-item expand">数码产品<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand active">家用电器<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item">电脑</div>
                        </li>
                        <li>
                            <div class="select-item expand disabled">服装<i class="fc-arrow-right"></i></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="be-dropdown" style="top: 70px; left: 102px;">
            <div class="be-select-list">
                <div class="be-select-content">
                    <ul>
                        <li>
                            <div class="select-item expand active">电视<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">空调<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">洗衣机<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">冰箱<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">厨卫大电<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">厨卫小电<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">生活电器<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">个护健康<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">家庭影音<i class="fc-arrow-right"></i></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="be-dropdown" style="top: 70px; left: 204px;">
            <div class="be-select-list">
                <div class="be-select-content">
                    <ul>
                        <li>
                            <div class="select-item">曲面电视</div>
                        </li>
                        <li>
                            <div class="select-item">超薄电视</div>
                        </li>
                        <li>
                            <div class="select-item">HDR电视</div>
                        </li>
                        <li>
                            <div class="select-item">OLED电视</div>
                        </li>
                        <li>
                            <div class="select-item">4K超清电视</div>
                        </li>
                        <li>
                            <div class="select-item">人工智能电视</div>
                        </li>
                        <li>
                            <div class="select-item">电视配件</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-select default active">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择分类</span></p>
</div>
<div class="be-dropdown" style="top: 36px; left: 0;">
    <div class="be-select-list">
        <div class="be-select-content">
            <ul>
                <li>
                    <div class="select-item expand">数码产品<i class="fc-arrow-right"></i></div>
                </li>
                ...
                <li>
                    <div class="select-item expand disabled">服装<i class="fc-arrow-right"></i></div>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="be-dropdown" style="top: 70px; left: 102px;">
    <div class="be-select-list">
        <div class="be-select-content">
            <ul>
                <li>
                    <div class="select-item expand active">电视<i class="fc-arrow-right"></i></div>
                </li>
                ...
                <li>
                    <div class="select-item expand">家庭影音<i class="fc-arrow-right"></i></div>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="be-dropdown" style="top: 70px; left: 204px;">
    <div class="be-select-list">
        <div class="be-select-content">
            <ul>
                <li>
                    <div class="select-item">曲面电视</div>
                </li>
                ...
                <li>
                    <div class="select-item">电视配件</div>
                </li>
            </ul>
        </div>
    </div>
</div>
```

> 联级选择器<code>be-select-cascader</code>

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section" style="width: 360px; height: 240px;">
        <div class="be-select default active">
            <i class="select-icon fc-arrow-down"></i>
            <p class="select-selected"><span class="select-placeholder">请选择分类</span></p>
        </div>
        <div class="be-dropdown" style="top: 36px; left: 0;">
            <div class="be-select-cascader">
                <div class="be-select-content">
                    <ul>
                        <li>
                            <div class="select-item expand">数码产品<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand active">家用电器<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item">电脑</div>
                        </li>
                        <li>
                            <div class="select-item expand disabled">服装<i class="fc-arrow-right"></i></div>
                        </li>
                    </ul>
                </div>
                <div class="be-select-content">
                    <ul>
                        <li>
                            <div class="select-item expand active">电视<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">空调<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">洗衣机<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">冰箱<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">厨卫大电<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">厨卫小电<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">生活电器<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">个护健康<i class="fc-arrow-right"></i></div>
                        </li>
                        <li>
                            <div class="select-item expand">家庭影音<i class="fc-arrow-right"></i></div>
                        </li>
                    </ul>
                </div>
                <div class="be-select-content">
                    <ul>
                        <li>
                            <div class="select-item">曲面电视</div>
                        </li>
                        <li>
                            <div class="select-item">超薄电视</div>
                        </li>
                        <li>
                            <div class="select-item">HDR电视</div>
                        </li>
                        <li>
                            <div class="select-item">OLED电视</div>
                        </li>
                        <li>
                            <div class="select-item">4K超清电视</div>
                        </li>
                        <li>
                            <div class="select-item">人工智能电视</div>
                        </li>
                        <li>
                            <div class="select-item">电视配件</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-select default active">
    <i class="select-icon fc-arrow-down"></i>
    <p class="select-selected"><span class="select-placeholder">请选择分类</span></p>
</div>
<div class="be-dropdown" style="top: 36px; left: 0;">
    <div class="be-select-cascader">
        <div class="be-select-content">
            <ul>
                <li>
                    <div class="select-item expand">数码产品<i class="fc-arrow-right"></i></div>
                </li>
                <li>
                    <div class="select-item expand active">家用电器<i class="fc-arrow-right"></i></div>
                </li>
                <li>
                    <div class="select-item">电脑</div>
                </li>
                <li>
                    <div class="select-item expand disabled">服装<i class="fc-arrow-right"></i></div>
                </li>
            </ul>
        </div>
        <div class="be-select-content">
            <ul>
                <li>
                    <div class="select-item expand active">电视<i class="fc-arrow-right"></i></div>
                </li>
                ...
                <li>
                    <div class="select-item expand">家庭影音<i class="fc-arrow-right"></i></div>
                </li>
            </ul>
        </div>
        <div class="be-select-content">
            <ul>
                <li>
                    <div class="select-item">曲面电视</div>
                </li>
                ...
                <li>
                    <div class="select-item">电视配件</div>
                </li>
            </ul>
        </div>
    </div>
</div>
```
