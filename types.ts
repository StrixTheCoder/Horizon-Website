export interface FeatureType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlanType {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  game: string;
  content: string;
  avatar: string;
}

export interface FAQType {
  question: string;
  answer: string;
}