import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Color } from 'core/variables/constants';
import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Container, List, ListItem } from 'components/Drawer/components/style';

const DrawerNavigation: FC = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <Link to={'/'} style={{ color: Color.white }}>
            Главная
          </Link>
        </ListItem>
        <ListItem>
          <Link to={'/textbook'} style={{ color: Color.white }}>
            Учебник
          </Link>
        </ListItem>
        <ListItem>
          <CustomSelect mobile={true} />
        </ListItem>
        <ListItem>
          <Link to={'/statistic'} style={{ color: Color.white }}>
            Статистика
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default DrawerNavigation;
