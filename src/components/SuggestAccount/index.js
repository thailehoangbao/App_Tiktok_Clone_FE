import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestAccount({ label, data = [],handleSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data?.map((account) => (
                <AccountItem key={account.id} account={account} />
            ))}

            <p className={cx('see-all')} onClick={handleSeeAll}>See All</p>
        </div>
    );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestAccount;
