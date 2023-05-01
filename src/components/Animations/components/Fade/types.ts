export type FadeProps = {
  className?: string;
  durationIn?: number;
  durationOut?: number;
  children: React.ReactNode;
  in: boolean;
  onExited?: () => void;
  onClick?: () => void;
};
