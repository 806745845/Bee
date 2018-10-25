<link rel="stylesheet" href="_default/doc.css">
<link rel="stylesheet" href="_default/mdp.css">
<link rel="stylesheet" href="_default/font-cloud.css">
<link rel="stylesheet" href="../modal.css">
<link rel="stylesheet" href="../button.css">

[TOC]

# Modal

类名：<code>be-modal</code>

> 唤醒<code>be-modal</code>时，需要给<code>body</code>添加<code>be-modal-active</code>禁用页面滚动

### 默认

> 由<code>be-modal-mask</code>、<code>be-modal</code>组成
>
> <code>be-modal</code>包含一个<code>modal-container</code>，主要用于尺寸和定位
>
> <code>modal-container</code>由<code>modal-close</code>、<code>modal-header</code>、<code>modal-body</code>、<code>modal-footer</code>组成

<div class="doc-example">
    <p class="title">实例</p>
    <div class="doc-section">
        <div class="be-modal-mask"></div>
        <div class="be-modal">
            <div class="modal-container">
                <span class="modal-close fc-close"></span>
                <div class="modal-header">标题</div>
                <div class="modal-body">
                    <div style="height: 200px;">Body Content</div>
                </div>
                <div class="modal-footer">
                    <a href="#" class="be-button primary-ghost">取消</a>
                    <a href="#" class="be-button primary">确定</a>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="be-modal-mask"></div>
<div class="be-modal">
    <div class="modal-container">
        <span class="modal-close fc-close"></span>
        <div class="modal-header">标题</div>
        <div class="modal-body">
            <div style="height: 200px;">Body Content</div>
        </div>
        <div class="modal-footer">
            <a href="#" class="be-button primary-ghost">取消</a>
            <a href="#" class="be-button primary">确定</a>
        </div>
    </div>
</div>
```

### 位置

> <code>be-modal</code>默认水平居中，距离顶部 60px
>
> 给<code>be-modal</code>添加<code>vertical-middle</code>设置默认垂直居中，超出高度时距离顶部 60px

### 尺寸

> <code>be-modal</code>默认宽度 600px
>
> 给<code>be-modal</code>添加<code>mini</code>、<code>small</code>、<code>big</code>、<code>large</code>改变宽度，mini-360px，small-480px，big-720px，large-900px

### 按钮居中

> <code>modal-footer</code>内按钮默认右对齐，给<code>be-modal</code>添加<code>button-center</code>可设置<code>modal-footer</code>按钮居中
