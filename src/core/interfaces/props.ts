/**
 * Interface describes props of component Drawer
 *
 * @interface
 */

export interface IPropsDrawer {
  /**
   * Defines active or not Drawer
   */
  active: boolean;
}

/**
 * Interface describes props of component Burger
 *
 * @interface
 */

export interface IPropsBurger {
  /**
   * defines onClick handler(toggle component Draw)
   */
  onOpen: () => void;
  /**
   * Defines active or not Burger. (If it is active It is rotate on 90 deg)
   */
  active: boolean;
}

/**
 * Interface describes props of component CustomSelector
 *
 * @interface
 */

export interface IPropsCustomSelector {
  /**
   * Defines width of screen(mobile or desktop)
   */
  mobile: boolean;
}

export interface IPropsOpportunityItem {
  img: string;
  title: string;
  text: string;
}

export interface IPropsTeamPerson {
  name: string;
  github: string;
  desc: string;
  img: string;
  left?: string;
}
