import { ReactNode } from "react";

export default interface SlideAnimationType {
    children?: ReactNode,
    delay?: number,
    duration?: number
}

export default interface FadeAnimationType {
    children?: ReactNode,
    delay?: number,
    duration?: number
}