import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class CategoryJD extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    dataSource: PropTypes.array,
    link: PropTypes.node,
    onChange: PropTypes.func,
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

  onChange = (menu) => () => {
    const { onChange } = this.props;
    if (onChange) onChange(menu);
  }

  render() {
    const { className, prefixCls, dataSource, link, onChange } = this.props;
    const { selectedMenu } = this.state;
    let Link = link || 'a';

    if (dataSource.length === 0) {
      return null;
    }

    let linkTo = link ? 'to' : 'href';
    const secondMenu = dataSource[selectedMenu];

    if (onChange) {
      Link = 'a';
      linkTo = 'data-link';
    }

    return (
      <div className={cx(prefixCls, className)}>
        <div className={`${prefixCls}-first`}>
          <ul>
            {dataSource.map((firstMenu, index) => (
              <li key={index} className={cx({ active: selectedMenu === index })} onClick={this.onClickMenu(index)}>
                <a>{firstMenu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${prefixCls}-second`}>
          <div className={`${prefixCls}-second-main`} key={selectedMenu}>
            {secondMenu.image ? (
              <div className={`${prefixCls}-second-title`}>
                <Link {...{ [linkTo]: secondMenu.path || '' }} onClick={this.onChange(secondMenu)}>
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
                        <Link {...{ [linkTo]: third.path || '' }} onClick={this.onChange(third)}>
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
