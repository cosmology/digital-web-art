export interface Project {
  id: string;
  type: string;
  position: string;
  location: string;
  imgSrc: string;
  name: string;
  subHeading: string;
  dateRange: string;
  bullets: string[];
  deploymentSrc: string;
  m3u8Src: string;
  svgs: string[];
  repos: {
    name: string;
    src: string;
  }[];
}
