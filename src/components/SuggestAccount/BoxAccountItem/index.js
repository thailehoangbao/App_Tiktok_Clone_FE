import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BoxAccountItem.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function BoxAccountItem({ item, className, account, ...props }) {
    return (
        <div className={cx('wrapper', className)} {...props}>
            <div className={cx('header')}>
                <Image src={account.avatar} alt={account.nickname} width="40" height="40" className={cx('avatar')} />
                <Button children="Follow" primary className={cx('btn-header')} />
            </div>

            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{account.nickname}</strong>
                    {account.tick && (
                        <FontAwesomeIcon icon={faCheckCircle} color="blue" style={{ marginLeft: '6px' }} />
                    )}
                </p>
                <p className={cx('name')}>{account.first_name + ' ' + account.last_name}</p>
            </div>

            <div className={cx('footer')}>
                <strong>{account.followers_count}</strong>
                <span className={cx('title-f')}>Follower</span>
                <strong style={{ marginLeft: '12px' }}>{account.likes_count}</strong>
                <span className={cx('title-f')}>Likes</span>
            </div>
        </div>
    );
}

BoxAccountItem.propTypes = {
    className: PropTypes.string,
    account: PropTypes.object.isRequired,
};

export default BoxAccountItem;
