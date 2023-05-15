export interface IconProps extends React.SVGProps<SVGSVGElement> {
  initial: {
    scale: number;
    rotate: number;
  };
  animate: {
    rotate: number;
    scale: number;
  };
  transition: {
    type: string;
    stiffness: number;
    damping: number;
  };
}
