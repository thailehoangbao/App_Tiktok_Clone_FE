import PropTypes from 'prop-types';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ Page }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Page />
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    Page: PropTypes.func.isRequired
};

export default DefaultLayout;
