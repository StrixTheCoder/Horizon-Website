import { PricingPlanType } from '../types';

export const pricingPlans: PricingPlanType[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$14.99',
    description: 'Essential features for casual players',
    features: [
      'Basic Aimbot',
      'Simple ESP',
      '24/7 Support',
      '3-day access',
      'Single game support',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29.99',
    description: 'Advanced features for serious gamers',
    features: [
      'Advanced Aimbot',
      'Full ESP Features',
      'Radar Hack',
      '30-day access',
      'Multi-game support',
      'Priority updates',
    ],
    popular: true,
    buttonText: 'Buy Pro',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$49.99',
    description: 'Ultimate package for professional players',
    features: [
      'Premium Aimbot & ESP',
      'All Radar Features',
      'Lifetime Updates',
      'VIP Support',
      'All games supported',
      'Custom Features',
      'Private Discord access',
    ],
    buttonText: 'Go Elite',
  },
];