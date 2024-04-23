import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    href,
    to,
    primary,
    rounded,
    outline,
    text,
    sizesmall,
    sizelarge,
    disabled,
    onClick,
    children,
    className,
    leftIcon,
    rightIcon,
    classesChildren,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        outline,
        primary,
        sizesmall,
        sizelarge,
        text,
        disabled,
        rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('leftIcon')}>{leftIcon}</span>
            <span className={classesChildren}>{children}</span>
            <span className={cx('rightIcon')}>{rightIcon}</span>
        </Comp>
    );
}
Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    sizesmall: PropTypes.bool,
    sizelarge: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    classesChildren: PropTypes.string,
};
export default Button;
