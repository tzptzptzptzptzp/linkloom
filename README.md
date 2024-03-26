# LinkLoom

## 開発資料

- [アプリケーション概要](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=14502224)
- [要求定義書](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=0)
- [機能要件一覧表](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=332822465)
- [非機能要件一覧表](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=623492906)
- [画面一覧表](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=678051956)
- [テーブル一覧表](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=812860006)
- [DB 設計書](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=1220957527)
- [API 設計書](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=1394397426)
- [進捗管理表(UI)](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=1671581391)
- [進捗管理表(API)](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=844869407)
- [進捗管理表(UI+API)](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=1539331398)
- [工数管理表](https://docs.google.com/spreadsheets/d/1p-MNCigngsJbKjWzqAbvgvFbOpNa4frX0tVcj4aSfYs/edit#gid=264947126)

![line](./public/line.png)

- [システム構成図](https://www.figma.com/file/UpOHAF0NP2XOprBmUVrQKK/LinkLoom?type=design&node-id=1%3A6&mode=design&t=2rr6sT2G0kNOVzxQ-1)
- [ER図](https://www.figma.com/file/UpOHAF0NP2XOprBmUVrQKK/LinkLoom?type=design&node-id=1%3A5&mode=design&t=2rr6sT2G0kNOVzxQ-1)
- [画面遷移図](https://www.figma.com/file/UpOHAF0NP2XOprBmUVrQKK/LinkLoom?type=design&node-id=1%3A4&mode=design&t=2rr6sT2G0kNOVzxQ-1)

## デザイン資料

- [デザインカンプ](https://www.figma.com/file/UpOHAF0NP2XOprBmUVrQKK/LinkLoom?type=design&node-id=1%3A2&mode=design&t=2rr6sT2G0kNOVzxQ-1)
- [ワイヤーフレーム](https://www.figma.com/file/UpOHAF0NP2XOprBmUVrQKK/LinkLoom?type=design&node-id=1%3A3&mode=design&t=2rr6sT2G0kNOVzxQ-1)

## ディレクトリ構成

```
src/
 ├── api / [name].api.ts
 ├── app
 ├── components
 ├── config / [name].config.ts
 ├── hooks / [name].hook.ts
 ├── providers / [name].provider.tsx
 ├── reducks
 ├── schemas / [name].schema.ts
 ├── styles / [name].style.scss
 ├── types / [name].type.ts
 ├── utils / [name].util.ts

 components/
 ├── atoms / [Name] / [Name].atom.tsx
 ├── features / [Name] / [Name].feature.tsx
 ├── forms / [Name] / [Name].form.tsx
 ├── molecules / [Name] / [Name].molecule.tsx
 ├── organisms / [Name] / [Name].organism.tsx
 ├── templates / [Name] / [Name].template.tsx

 reducks/[name]/
 ├── dispatches.[name].ts
 ├── initializes.[name].ts
 ├── operations.[name].ts
 ├── reducers.[name].ts
 ├── selectors.[name].ts
 ├── slice.[name].ts
 ├── types.[name].ts
```
