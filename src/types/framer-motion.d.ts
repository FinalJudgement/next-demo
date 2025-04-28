import { ComponentType } from 'react';

declare module 'framer-motion' {
  export interface Motion {
    div: ComponentType<any>;
    span: ComponentType<any>;
    path: ComponentType<any>;
    svg: ComponentType<any>;
    img: ComponentType<any>;
    button: ComponentType<any>;
    a: ComponentType<any>;
    ul: ComponentType<any>;
    ol: ComponentType<any>;
    li: ComponentType<any>;
    // Add any other HTML elements you're using with motion
  }

  export const motion: Motion;
}
