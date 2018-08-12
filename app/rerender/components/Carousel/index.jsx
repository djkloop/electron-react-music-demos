// @flow
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon'
import { throttle } from '../../../utils/utils';
import style from './Carousel.scss'


type CarouselProps = {
  classes: Object
};
const imgLists = [
  {
    id: 111,
    img: 1
  },
  {
    id: 222,
    img: 2
  },
  {
    id: 333,
    img: 3
  },
  {
    id: 444,
    img: 4
  },
  {
    id: 555,
    img: 5
  },
  {
    id: 666,
    img: 6
  }
]

const styles = theme => ({
  cRoot: {
    width: '100%',
    height: '200px',
    background: theme.palette.common.black,
    position: 'relative',
    margin: '30px 0 0',
    transition: 'all 0.3s ease',
    perspective: 700,
    transformStyle: 'preserve-3d'
  },
  controlItem: {
    transition: 'all 0.3s ease',
    flex: 1,
    background: 'rgb(244,244,244)'
  },
  lrBtn: {
    background: '#fff',
    position: 'relative',
    color: '#000',
    margin: '40px'
  },
  lBtn: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    display: 'block',
    cursor: 'pointer',
    background: '#fff'
  },
  rBtn: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    display: 'block',
    cursor: 'pointer',
    background: '#fff',
    right: 0
  }
});

const PREFIX = "elec-carousel-conatiner"

/**
 * 思路
 *
 * 1
 */



class Carousel extends Component<CarouselProps> {

  constructor(props) {
    super(props);
    this.state = {};
    this.imglist = imgLists;
    this.nowIndex = 0;
    this.timerId = null;
    this.autoPlay = false;
    this.time = 5000;
    this.isShowBtn = false;
    this.autoPlayHandle = this.autoPlayHandle.bind(this);
    this.btnHandle = this.btnHandle.bind(this);
    this.lastBtnHandle = throttle(this.lastBtnHandle.bind(this), 500);
    this.prevBtnHandle = throttle(this.prevBtnHandle.bind(this), 500);
  }

  componentDidMount() {
    this.initCarousel();
    if(this.autoPlay) {
      this.autoPlayHandle();
    }
  }

  // 自动播放
  autoPlayHandle() {
    this.timerId = (setInterval(this.prevBtnHandle, this.time));
  }

  // 初始化 根据拿到的图片长度
  // 和开始索引来判断当前的图片的位置

  initCarousel() {
    // const carItem = document.querySelectorAll('.car-item');
    // 拿到当前的索引
    this.resetNowIndex();
  }

  qs = str => document.querySelector(str);
  qsa = str => document.querySelectorAll(str);

  resetNowIndex() {
    const Imgs = this.imglist;
    const len = Imgs.length;
    const now = this.nowIndex;
    const _res = [];
    let cacheNowLeft = now;
    let cacheNowRight = now;
    // 如果大于最大长度 切回去
    const cachePrev = ++cacheNowRight > len - 1 ? 0 : cacheNowRight;
    const cacheLast = --cacheNowLeft < 0 ? len -1 : cacheNowLeft;
    for (let index = 0; index < len; index++) {
       // 中间
      if(now === index) {
        _res.push({
          id: Imgs[index].id,
          img: Imgs[index].img,
          isCenter: true
        });
        continue;
      }
      // 下一张
      if(index === cachePrev) {
        _res.push({
          id: Imgs[index].id,
          img: Imgs[index].img,
          isRight: true
        });
        continue;
      }
      // 上一张
      if(index === cacheLast) {
        _res.push({
          id: Imgs[index].id,
          img: Imgs[index].img,
          isLeft: true
        });
        continue;
      }
      _res.push({
        id: Imgs[index].id,
        img: Imgs[index].img,
        isHidden: true
      });
    }
    this.setImgList(_res);
    return _res;
  }

  setImgList(resetArray) {
    this.setState({
      imgList: resetArray
    })
  }

  // 底部按钮
  btnHandle(index) {
    console.log(this.nowIndex, index);
  }

  // 上一张
  lastBtnHandle() {
    this.nowIndex--;
    if(this.nowIndex < 0) {
      this.nowIndex = this.imglist.length - 1;
    }
    this.resetNowIndex();
  }
  // 下一张
  prevBtnHandle() {
    // 默认是0开始

    this.nowIndex++;
    if(this.nowIndex > this.imglist.length - 1) {
      this.nowIndex = 0;
    }
    this.resetNowIndex();
  }

  render() {
    const { classes } = this.props;
    const { imgList } = this.state;
    return (
      <Fragment>
        <div className={style[PREFIX]}>
          <div className={style[`${PREFIX}_content`]}>
            {
              imgList
              ?
              imgList.map((imgItem) => (
                <div
                  key={imgItem.img}
                  className={`${style[`${PREFIX}_c-item`]} ${imgItem.isCenter ? style[`${PREFIX}_center`] : ''} ${imgItem.isLeft ? style[`${PREFIX}_left`] : ''} ${imgItem.isRight ? style[`${PREFIX}_right`] : ''}`}
                >
                  xs={imgItem.img}
                </div>
              ))
              :
              null
            }
          </div>
          {
            this.isShowBtn
            ?
              <div className={`${classes.lrBtn}`}>
                <Icon onClick={this.lastBtnHandle} className={`${classes.lBtn}`} style={{ fontSize: 30 }}>chevron_left</Icon>
                <Icon onClick={this.prevBtnHandle} className={`${classes.rBtn}`} style={{ fontSize: 30 }}>chevron_right</Icon>
              </div>
            :
            null
          }

          <div className={`${classes.controlList} ${style[`${PREFIX}_list`]}`}>
            <span className={`${classes.controlItem}`} onClickCapture={() => this.btnHandle(1)} />
            <span className={`${classes.controlItem}`} />
            <span className={`${classes.controlItem}`} />
            <span className={`${classes.controlItem}`} />
            <span className={`${classes.controlItem}`} />
            <span className={`${classes.controlItem}`} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Carousel);
