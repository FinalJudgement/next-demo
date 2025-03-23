import type * as React from "react"

declare module "framer-motion" {
  export interface AnimationProps {
    initial?: any
    animate?: any
    exit?: any
    transition?: any
    variants?: any
    whileHover?: any
    whileTap?: any
    whileFocus?: any
    whileDrag?: any
    whileInView?: any
    onAnimationStart?: any
    onAnimationComplete?: any
    onUpdate?: any
    onDragStart?: any
    onDrag?: any
    onDragEnd?: any
    drag?: any
    dragConstraints?: any
    dragElastic?: any
    dragMomentum?: any
    dragTransition?: any
    dragPropagation?: any
    dragControls?: any
    dragListener?: any
    dragSnapToOrigin?: any
    layout?: any
    layoutId?: any
    layoutDependency?: any
    layoutScroll?: any
    onLayoutAnimationStart?: any
    onLayoutAnimationComplete?: any
    onViewportEnter?: any
    onViewportLeave?: any
    viewport?: any
    transformTemplate?: any
    style?: any
    [key: string]: any
  }

  export interface MotionProps extends AnimationProps {
    children?: React.ReactNode
  }

  export interface MotionAdvancedProps extends MotionProps {
    as?: React.ElementType
  }

  export type MotionComponent<P = {}> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P & MotionProps> & React.RefAttributes<Element>
  >

  export function motion<P extends object>(component: React.ComponentType<P> | string): MotionComponent<P>

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: MotionComponent<JSX.IntrinsicElements[K]>
  }

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode
    initial?: boolean
    exitBeforeEnter?: boolean
    onExitComplete?: () => void
    mode?: "sync" | "wait" | "popLayout"
  }>
}

