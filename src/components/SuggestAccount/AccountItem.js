import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippyheadless from '@tippyjs/react/headless';
import BoxAccountItem from './BoxAccountItem';
const cx = classNames.bind(styles);
function AccountItem({ account }) {
    return (
        <div>
            <Tippyheadless
                delay={[500, 0]}
                interactive
                placement="top"
                render={(attrs) => <BoxAccountItem className={cx('box-width')} tabIndex="-1" account={account}/>}
            >
                <div className={cx('account-item')}>
                    <Image
                        src={account.avatar}
                        alt={account.nickname}
                        width="40"
                        height="40"
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{account.nickname}</strong>
                            {account.tick && <FontAwesomeIcon icon={faCheckCircle} color="blue" style={{ marginLeft: '6px' }} />}
                            
                        </p>
                        <p className={cx('name')}>{account.first_name +' '+ account.last_name}</p>
                    </div>
                </div>
            </Tippyheadless>
        </div>
    );
}
AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};
export default AccountItem;
