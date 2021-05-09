declare module "*.jpg"
declare module "*.png"
declare module "*.svg"

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}