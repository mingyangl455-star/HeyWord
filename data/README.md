# 词库 `vocabulary.json`

所有关卡单词的**音标、释义、例句**统一存放在这里。

## 文件结构

```json
{
  "_meta": { "description": "说明文字，可改可删" },
  "words": {
    "COD": {
      "phonetic": "/kɒd/",
      "meaning": "n. 鳕鱼",
      "example": "Fish and chips often use cod.",
      "exampleCn": "炸鱼薯条常用鳕鱼。"
    }
  }
}
```

- 单词键名必须**全大写**（如 `"DOG"`）
- 只改 `words` 里的内容即可；`_meta` 仅供阅读

## 修改后如何生效

| 你改了什么 | 命令 | 刷新 |
|-----------|------|------|
| 只改释义/例句 | `node grid-gen.js --vocab-only` | 硬刷新页面（`v` 版本号 +1 更稳妥） |
| 改了释义，且要让 `levels.js` 里也更新 | `node grid-gen.js` | 同上 |
| 在 `grid-gen.js` 里改了关卡词表 | `node grid-gen.js` | 同上 |

`--vocab-only` 会同步生成 `js/vocabulary.js`，游戏通关页和词典会优先读词库里的最新内容。

## 新增单词

1. 在 `words` 里增加一项（见上表格式）
2. 若该词会出现在某一关，还要在 `grid-gen.js` 的 `RAW_LEVELS` 里加入对应关卡
3. 运行 `node grid-gen.js`

## 注意

- 不要手改 `js/vocabulary.js`，它由脚本自动生成
- 词典页若仍显示旧文案，可清除浏览器里本站的 `heyword_progress`，或重新通关该关
