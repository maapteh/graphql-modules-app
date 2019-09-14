/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
    const styles: { [className: string]: string };
    export default styles;
}
