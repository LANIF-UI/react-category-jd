/* eslint-disable no-console */
import '../assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import CategoryJD from '../src/CategoryJD';

const dataSource = Array(20).fill(
  {
    title: '汽车用品',
    path: '/abc',
    image:
      '//img13.360buyimg.com/mcoss/jfs/t13768/304/553456768/42679/21bc3c35/5a28f1c1N226249b0.jpg',
    children: [{
      title: '热卖推荐',
      children: [
        { title: '汽车坐垫', path: '/abc', image: '//img20.360buyimg.com/focus/jfs/t13861/165/1416050485/4023/7a99270b/5a1fb902N806b102c.jpg' },
        { title: '行车记录仪', path: '/abc', image: '//img30.360buyimg.com/focus/jfs/t12901/240/1394851486/8943/454985f7/5a1fb8fcNb81047cc.jpg' },
        { title: '机油', path: '/abc', image: '//img13.360buyimg.com/focus/jfs/t12934/187/1360887703/3624/2773362c/5a1fb8f6N7d4de465.jpg' },
        { title: '洗车水枪', path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t12775/362/1793763591/8646/9054789/5a28b10cN62861b9b.jpg' },
        { title: '应急救援', path: '/abc', image: '//img14.360buyimg.com/focus/jfs/t15556/93/149991245/6163/3387b1e9/5a28b106N59344f7a.png' },
      ],
    },
      {
        title: '全新整车',
        children: [
          { title: '微型车', path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t12337/75/1409309351/5500/b04a2642/5a1fb8eeN05d4163e.jpg' },
          { title: '小型车', path: '/abc', image: '//img12.360buyimg.com/focus/jfs/t13081/260/1376706334/6999/c4bff110/5a1fb8e9Nd2feb53d.jpg' },
          { title: '紧凑型车', path: '/abc', image: '//img11.360buyimg.com/focus/jfs/t13072/223/1436827028/5429/ae4f87d0/5a1fb8e2N6eba4559.jpg' },
          { title: '中型车', path: '/abc', image: '//img11.360buyimg.com/focus/jfs/t15643/17/110288415/4137/d6db0406/5a28b0f9N900e6ad6.jpg' },
          { title: 'SUV', path: '/abc', image: '//img20.360buyimg.com/focus/jfs/t12709/19/1797741968/5030/aa3b63bd/5a28b0f0N5541a6c1.jpg' },
          { title: '中大型车', path: '/abc', image: '//img10.360buyimg.com/focus/jfs/t15643/11/99628246/3283/c304231f/5a28b0f5N74773599.jpg' },
        ],
      },
    ],
  }
);

ReactDOM.render((
  <div style={{ height: 667 }}>
    <CategoryJD dataSource={dataSource} />
  </div>), document.getElementById('__react-content')
);
