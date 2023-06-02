export interface IItemsListItem {
  id: number;
  text: string;
  path: string;
}

export const itemsList: IItemsListItem[] = [
  { id: 1, text: 'Главная', path: '/' },
  { id: 2, text: 'Учебник', path: '/textbook' },
  { id: 3, text: 'Игры', path: '/games' },
  { id: 4, text: 'Статистика', path: '/statistic' },
];
