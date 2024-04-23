import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper)}
            ref={ref}
            {...props}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};
forwardRef.propTypes = {};
export default forwardRef(Image);
