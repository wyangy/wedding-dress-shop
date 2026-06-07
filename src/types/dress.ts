export type Dress = {
  id: number;
  name: string;
  size: string;
  bust: number;
  waist: number;
  hip: number;
  hollowToHem: number;
  description: string;
  images: {
    main: string;
    front?: string;
    back?: string;
    detail?: string;
    flaw?: string;
  };
};
