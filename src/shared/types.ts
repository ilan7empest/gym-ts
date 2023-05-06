export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export type BenefitItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export interface ClassType {
  description?: string;
  name: string;
  image: string;
}
