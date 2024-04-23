import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Menu, MenuItem } from './Menu';
import config from '~/config';
import { FollowIcons, FriendIcons, HomeIcons, HomeIconsActive } from '~/components/Icons';
import SuggestAccount from '~/components/SuggestAccount';
import { getSuggested } from '~/services/apiUser';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const PERPAGE = 5;
const INIT_PAGE = 1;
function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        getSuggested({ page, perPage: PERPAGE })
            .then((res) => {
                setSuggestedUser([...suggestedUser,...res]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcons />} iconActive={<HomeIconsActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcons />}
                    iconActive={<FollowIcons />}
                />
                <MenuItem
                    title="Friend"
                    to={config.routes.friend}
                    icon={<FriendIcons />}
                    iconActive={<FriendIcons />}
                />
            </Menu>

            <SuggestAccount label="Suggested accounts" data={suggestedUser} handleSeeAll={handleSeeAll} />
            <SuggestAccount label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
