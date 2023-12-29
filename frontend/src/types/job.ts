export interface Job {
  id: string;
  position: string;
  company: string;
  dateRange: string;
  description: string;
  src: string | null;
  location: string;
  imgSrc: string;
  bullets: string[];
  svgs: string[];
}
