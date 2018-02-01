# react-category-jd
---

react 仿京东手机端分类组件.

[![NPM version][npm-image]][npm-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-category-jd.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-category-jd
[travis-image]: https://img.shields.io/travis/react-component/react-category-jd.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/react-category-jd
[coveralls-image]: https://img.shields.io/coveralls/react-component/react-category-jd.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/react-category-jd?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/react-category-jd.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/react-category-jd
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/react-category-jd.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-category-jd
## install

[![react-category-jd](https://nodei.co/npm/react-category-jd.png)](https://npmjs.org/package/react-category-jd)
<br />
![](https://ucarecdn.com/391169cb-3ccb-4744-97c0-95087fd9037f/reactcategoryjd.gif)
## Usage

```js
import ReactDOM from 'react-dom';
import CategoryJD from 'react-category-jd';

const dataSource = Array(20).fill(0).map((_, index) => (
  {
    title: `汽车用品${index}`,
    path: '/abc',
    image:
      '//img13.360buyimg.com/mcoss/jfs/t13768/304/553456768/42679/21bc3c35/5a28f1c1N226249b0.jpg',
    children: [{
      title: `热卖推荐${index}`,
      children: [
        { title: `汽车坐垫${index}`, path: '/abc', image: '//img20.360buyimg.com/focus/jfs/t13861/165/1416050485/4023/7a99270b/5a1fb902N806b102c.jpg' },
        { title: `行车记录仪${index}`, path: '/abc', image: '//img30.360buyimg.com/focus/jfs/t12901/240/1394851486/8943/454985f7/5a1fb8fcNb81047cc.jpg' },
        { title: `机油${index}`, path: '/abc', image: '//img13.360buyimg.com/focus/jfs/t12934/187/1360887703/3624/2773362c/5a1fb8f6N7d4de465.jpg' },
        { title: `洗车水枪${index}`, path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t12775/362/1793763591/8646/9054789/5a28b10cN62861b9b.jpg' },
        { title: `应急救援${index}`, path: '/abc', image: '//img14.360buyimg.com/focus/jfs/t15556/93/149991245/6163/3387b1e9/5a28b106N59344f7a.png' },
      ],
    }, {
      title: `全新整车${index}`,
      children: [
        { title: `微型车${index}`, path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t12337/75/1409309351/5500/b04a2642/5a1fb8eeN05d4163e.jpg' },
        { title: `小型车${index}`, path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t13081/260/1376706334/6999/c4bff110/5a1fb8e9Nd2feb53d.jpg' },
        { title: `紧凑型车${index}`, path: '/abc', image: '//img11.360buyimg.com/focus/jfs/t13072/223/1436827028/5429/ae4f87d0/5a1fb8e2N6eba4559.jpg' },
        { title: `中型车${index}`, path: '/abc', image: '//img11.360buyimg.com/focus/jfs/t15643/17/110288415/4137/d6db0406/5a28b0f9N900e6ad6.jpg' },
        { title: `SUV${index}`, path: '/abc', image: '//img20.360buyimg.com/focus/jfs/t12709/19/1797741968/5030/aa3b63bd/5a28b0f0N5541a6c1.jpg' },
        { title: `中大型车${index}`, path: '/abc', image: '//img10.360buyimg.com/focus/jfs/t15643/11/99628246/3283/c304231f/5a28b0f5N74773599.jpg' },
      ],
    }, {
      title: `热卖推荐${index}`,
      children: [
        { title: `汽车坐垫${index}`, path: '/abc', image: '//img20.360buyimg.com/focus/jfs/t13861/165/1416050485/4023/7a99270b/5a1fb902N806b102c.jpg' },
        { title: `行车记录仪${index}`, path: '/abc', image: '//img30.360buyimg.com/focus/jfs/t12901/240/1394851486/8943/454985f7/5a1fb8fcNb81047cc.jpg' },
        { title: `机油${index}`, path: '/abc', image: '//img13.360buyimg.com/focus/jfs/t12934/187/1360887703/3624/2773362c/5a1fb8f6N7d4de465.jpg' },
        { title: `洗车水枪${index}`, path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t12775/362/1793763591/8646/9054789/5a28b10cN62861b9b.jpg' },
        { title: `应急救援${index}`, path: '/abc', image: '//img14.360buyimg.com/focus/jfs/t15556/93/149991245/6163/3387b1e9/5a28b106N59344f7a.png' },
      ],
    }],
  }
));

ReactDOM.render(<CategoryJD dataSource={dataSource} />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>prefixCls</td>
        <td>String</td>
        <td>category-layout</td>
        <td></td>
      </tr>
      <tr>
        <td>className</td>
        <td>String</td>
        <td></td>
        <td>跟节点class</td>
      </tr>
      <tr>
        <td>dataSource</td>
        <td>array</td>
        <td></td>
        <td>数据源</td>
      </tr>
      <tr>
        <td>link</td>
        <td>node</td>
        <td></td>
        <td>可指定用react-router的Link做为跳转组件，默认为a标签</td>
      <tr>
        <td>onChange</td>
        <td>Function</td>
        <td></td>
        <td>如果设置onChange后，不会走path跳转，需要手动执行相应逻辑</td>
      </tr>
      <tr>
        <td>alias</td>
        <td>object</td>
        <td></td>
        <td>可以指定title, path, image, children的别名，如alias={title: 'name', path: 'url'}</td>
      </tr>
    </tbody>
</table>

## Development

```
npm install
npm start
```
