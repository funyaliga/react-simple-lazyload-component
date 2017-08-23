import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

/**
 * 延时加载 (fanya )
 * @prop [placeholder] 占位
 */

export default class TextTruncate extends Component {
    static propTypes = {
        placeholder: PropTypes.node,
        height: PropTypes.number,
    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);

        this.node = null;
        this.visible = false;
    }

    componentDidMount() {
        this.io = new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) {
                    this.io.disconnect()
                    this.visible = true
                    this.forceUpdate()
                }
            },
            {}
        )
        this.io.observe(ReactDom.findDOMNode(this))
    }

    componentWillUnmount() {
        this.io.disconnect()
    }

    render() {
        return this.visible
            ? this.props.children
            : this.props.placeholder
                ? this.props.placeholder
                : <div style={{ height: this.props.height }} className="lazyload-placeholder" />
    }
}