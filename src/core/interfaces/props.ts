import { ReactNode } from 'react';
import { Color } from 'core/variables/constants';

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

/**
 * Interface describes props of CustomButton
 *
 * @interface
 */
export interface IPropsCustomButton {
  /**
   * Defines text in the button
   */
  text: string;
  /**
   * Defines button`s color
   */
  color?: Color;
  /**
   * Defines button`s hover
   */
  hover?: Color;
  /**
   * Defines function onClick event`s
   */
  handler?: () => void;
}

/**
 * Interface describes props of OpportuinityItem
 *
 * @interface
 */
export interface IPropsOpportunityItem {
  /**
   * Describes src of image
   */
  img: string;
  /**
   * Describes title of OpportuinityItem
   */
  title: string;
  /**
   * Describes text of OpportuinityItem
   */
  text: string;
}

export interface IPropsTeamPerson {
  name: string;
  github: string;
  desc: string;
  img: string;
  left?: string;
}

export interface IPropsMainImage {
  width: string;
  height: string;
  src: string;
}

export interface IPropsAuthForm {
  children?: ReactNode;
}

export interface IPropsCustomInput {
  placeholder?: string;
  value: string;
  borderColor: string;
  errorMessage?: string;
  onChangeHandler: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler?: () => void;
}
