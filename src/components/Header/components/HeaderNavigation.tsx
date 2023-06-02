import React from 'react';
import { Link } from 'react-router-dom';
import { setPage } from 'features/app/appSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { IItemsListItem, itemsList } from 'components/Header/components/constants';
import {
  Container,
  NavList,
  ListItem,
  ListItemActive,
  LinkNav,
} from 'components/Header/components/style';

const HeaderNavigation = React.memo(() => {
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();

  const onclickHandler = (item: IItemsListItem) => {
    dispatch(setPage(item.text));
  };

  return (
    <Container>
      <NavList>
        {page.length >= 1 &&
          itemsList.map(({ text, id, path }) => {
            if (text === page) {
              return (
                <ListItemActive key={id + text}>
                  <Link to={path}>
                    <LinkNav onClick={() => onclickHandler({ text, id, path })}>{text}</LinkNav>
                  </Link>
                </ListItemActive>
              );
            } else if (text === 'Игры') {
              return <CustomSelect mobile={false} key={id + text} />;
            } else {
              return (
                <ListItem key={id + text}>
                  <Link to={path}>
                    <LinkNav onClick={() => onclickHandler({ text, id, path })}>{text}</LinkNav>
                  </Link>
                </ListItem>
              );
            }
          })}
      </NavList>
    </Container>
  );
});

export default HeaderNavigation;
