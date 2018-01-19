import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class CategoryJD extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    dataSource: PropTypes.array,
    link: PropTypes.node,
  }

  static defaultProps = {
    prefixCls: 'category-layout',
    dataSource: [],
  }

  state = {
    selectedMenu: 0,
  }

  onClickMenu = (index) => () => {
    this.setState({
      selectedMenu: index,
    });
  }

  render() {
    const { className, prefixCls, dataSource, link } = this.props;
    const { selectedMenu } = this.state;
    const Link = link || 'a';

    if (dataSource.length === 0) {
      return null;
    }

    const secondMenu = dataSource[selectedMenu];
    return (
      <div className={cx(prefixCls, className)}>
        <div className={`${prefixCls}-first`}>
          <ul>
            {dataSource.map((firstMenu, index) => (
              <li key={index} className="active" onClick={this.onClickMenu(index)}>
                <a>{firstMenu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${prefixCls}-second`}>
          <div className={`${prefixCls}-second-main`} key={selectedMenu}>
            {secondMenu.image ? (
              <div className={`${prefixCls}-second-title`}>
                <Link>
                  <img src={secondMenu.image} />
                </Link>
              </div>
            ) : null}
            {secondMenu.children && secondMenu.children.map((second, si) => (
              <div key={si} className={`${prefixCls}-second-column`}>
                <h4>{second.title}</h4>
                <ul>
                  {
                    second.children && second.children.map((third, ti) => (
                      <li key={ti}>
                        <Link>
                          <img src={third.image} />
                          <span>{third.title}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
