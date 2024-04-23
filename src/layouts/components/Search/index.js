import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as apiSearch from '~/services/apiSearch';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [account, setAccount] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const valueDebounce = useDebounce(searchValue, 1000);

    const inputRef = useRef();

    useEffect(() => {
        if (!valueDebounce.trim()) {
            setAccount([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const dataSearch = await apiSearch.search(valueDebounce);
            setAccount(dataSearch);
            setLoading(false);
        };
        fetchApi();
    }, [valueDebounce]);

    const handleClickOutside = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            appendTo={()=>document.body}
            onClickOutside={handleClickOutside}
            visible={showResult && account.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {account.map((account) => (
                            <AccountItem key={account.id} account={account} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    
                    ref={inputRef}
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                    type="text"
                    placeholder="Search account videos?"
                    spellCheck={false}
                />
                {searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
