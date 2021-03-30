---
icon: windows
author: Best Shi
time: 2021-3-30
tag:
    - Windows
category: 随笔
---

# Windows 相关

## 禁用 Windows 10 自动调节对比度

1. 按 win+r 键打开运行窗口。
2. 输入 regedit，回车打开注册表编辑器。
3. 在地址栏输入 `计算机\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Class\{4d36e968-e325-11ce-bfc1-08002be10318}\0001` 然后回车。
4. 在右侧窗口中找到 `FeatureTestControl`，双击，然后将弹框中的值修改为`9250`，确定。
5. 重启电脑。

<img :src="$withBase('/images/bestshi.com_2021-03-30_20-18-43.jpg')">
