'use client';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => (
  <section
    id="pricing"
    className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors"
  >
    <div className="max-w-7xl mx-auto px-4 text-center">
      {/* Heading with gradient */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
        Simple, transparent pricing
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
        Choose a plan that scales with your team. No hidden fees, just great value.
      </p>

      {/* Pricing Cards */}
      <div className="mt-16 grid gap-10 md:grid-cols-3 items-stretch">
        <PricingCard
          plan="Basic"
          price="$29"
          features={['5 projects', 'Basic AI assistance', 'Email support']}
        />

        <PricingCard
          plan="Pro"
          price="$99"
          isPopular
          features={[
            'Unlimited projects',
            'Advanced AI assistance',
            'Priority chat support',
            'Team collaboration',
          ]}
        />

        <PricingCard
          plan="Enterprise"
          price="Contact"
          features={[
            'Everything in Pro',
            'Dedicated support manager',
            'Custom integrations',
            'On-premise hosting',
          ]}
        />
      </div>
    </div>
  </section>
);

const PricingCard = ({ plan, price, features, isPopular = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative p-8 pt-12 rounded-2xl border overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isPopular
        ? 'border-indigo-600 bg-white dark:bg-slate-900 scale-105 shadow-lg'
        : 'border-slate-200 bg-white dark:bg-slate-800'
      }`}
  >
    {/* Most Popular Badge — fixed position */}
    {isPopular && (
      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase text-white bg-indigo-600 rounded-full px-3 py-1 shadow z-10">
        Most Popular
      </span>
    )}

    {/* Plan Name */}
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-6">{plan}</h3>

    {/* Pricing */}
    <div className="mt-4 text-5xl font-extrabold text-slate-900 dark:text-white">
      {price !== 'Contact' ? (
        <>
          {price}
          <span className="text-lg font-normal text-slate-500 dark:text-slate-400">/mo</span>
        </>
      ) : (
        <span className="text-3xl">Contact</span>
      )}
    </div>

    {/* Features List */}
    <ul className="mt-6 space-y-4 text-left">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
          <Check className="w-5 h-5 text-indigo-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <a
      href="#"
      className={`mt-8 block w-full text-center px-4 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${isPopular
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:brightness-110 hover:text-white'
          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
        }`}
    >
      {price === 'Contact' ? 'Contact Sales' : 'Choose Plan'}
    </a>

  </motion.div>
);

export default Pricing;
