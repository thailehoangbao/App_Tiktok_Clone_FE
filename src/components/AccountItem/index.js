import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ account }) {
    return (
        <Link to={`/profile/${account.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={account.avatar} alt={account.avatar} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{account.full_name}</span>
                    {account.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{account.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountItem;
