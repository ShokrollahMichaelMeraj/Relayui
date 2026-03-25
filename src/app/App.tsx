import { Button } from './components/ui/button';
import logo from 'figma:asset/d700563c83c1772554d5e56a14c1a148ae7906bb.png';
import { Check, ArrowRight, Zap, Clock, TrendingUp, Users, Shield, BarChart } from 'lucide-react';

export default function App() {
  return (
    <div 
      className="min-h-screen relative" 
      style={{ backgroundColor: '#F8F8F8' }}
    >
      {/* Subtle gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header 
          className="sticky top-0 backdrop-blur-sm"
          style={{ 
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)', 
            backgroundColor: 'rgba(248, 248, 248, 0.8)',
            zIndex: 50
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo & Text */}
              <a
                href="#"
                className="flex items-center gap-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img
                  src={logo}
                  alt="RELAY"
                  className="h-12"
                  style={{ objectFit: 'contain' }}
                />
                <span 
                  className="text-3xl font-bold"
                  style={{ color: '#000000' }}
                >
                  RELAY
                </span>
              </a>
              
              {/* Nav Links - Centered flex container */}
              <div className="hidden md:flex items-center flex-1 justify-center">
                <nav className="flex items-center gap-8">
                  <a href="#pricing" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#000000' }}>Pricing</a>
                  <a href="#features" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#000000' }}>Features</a>
                  <a href="#how-it-works" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#000000' }}>How It Works</a>
                </nav>
              </div>
              
              {/* Get Started Button */}
              <Button 
                size="sm"
                className="text-sm px-5 hidden md:inline-flex"
                style={{ 
                  backgroundColor: '#000000',
                  color: 'white'
                }}
                onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Request%20Early%20Access'}
              >
                Get Started
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span 
                className="text-sm font-semibold px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  color: '#000000'
                }}
              >
                Now in Early Access
              </span>
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ color: '#000000' }}
            >
              Replace hold music with
              <br />
              <span style={{ color: '#000000' }}>intelligent intake</span>
            </h1>
            
            <p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              style={{ color: '#404040' }}
            >
              Relay is an AI voice agent that collects customer information during hold time. Your agents pick up already briefed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 gap-2"
                style={{ 
                  backgroundColor: '#000000',
                  color: 'white'
                }}
                onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Request%20Early%20Access'}
              >
                Request Early Access
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 py-6"
                style={{ 
                  borderColor: '#D0D0D0',
                  color: '#000000',
                  backgroundColor: 'transparent'
                }}
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#000000' }}>57%</div>
                <div className="text-sm" style={{ color: '#666666' }}>Customers frustrated by hold time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#000000' }}>90s</div>
                <div className="text-sm" style={{ color: '#666666' }}>Wasted repeating info</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#000000' }}>40%</div>
                <div className="text-sm" style={{ color: '#666666' }}>Faster resolution time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                Simple, transparent pricing
              </h2>
              <p className="text-xl" style={{ color: '#666666' }}>
                Choose the plan that fits your call volume
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div
                className="p-8 rounded-2xl border"
                style={{ 
                  borderColor: '#E0E0E0',
                  backgroundColor: '#FAFAFA'
                }}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Starter</h3>
                <p className="text-sm mb-6" style={{ color: '#666666' }}>Perfect for small teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#000000' }}>$299</span>
                  <span className="text-sm" style={{ color: '#666666' }}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Up to 500 calls/month', 'Basic analytics', 'Email support', 'CRM integration'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#000000' }} />
                      <span className="text-sm" style={{ color: '#000000' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  variant="outline"
                  style={{ 
                    borderColor: '#D0D0D0',
                    color: '#000000',
                    backgroundColor: 'transparent'
                  }}
                  onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Starter%20Plan%20Inquiry'}
                >
                  Get Started
                </Button>
              </div>

              {/* Professional Plan (Featured) */}
              <div
                className="p-8 rounded-2xl border-2 relative"
                style={{ 
                  borderColor: '#000000',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
                  style={{ 
                    backgroundColor: '#000000',
                    color: 'white'
                  }}
                >
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Professional</h3>
                <p className="text-sm mb-6" style={{ color: '#666666' }}>For growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#000000' }}>$799</span>
                  <span className="text-sm" style={{ color: '#666666' }}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Up to 2,000 calls/month', 'Advanced analytics', 'Priority support', 'All integrations', 'Custom workflows', 'API access'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#000000' }} />
                      <span className="text-sm" style={{ color: '#000000' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  style={{ 
                    backgroundColor: '#000000',
                    color: 'white'
                  }}
                  onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Professional%20Plan%20Inquiry'}
                >
                  Get Started
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div
                className="p-8 rounded-2xl border"
                style={{ 
                  borderColor: '#E0E0E0',
                  backgroundColor: '#FAFAFA'
                }}
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>Enterprise</h3>
                <p className="text-sm mb-6" style={{ color: '#666666' }}>For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#000000' }}>Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Unlimited calls', 'Custom analytics', 'Dedicated support', 'White-label option', 'SLA guarantee', 'Custom integrations'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#000000' }} />
                      <span className="text-sm" style={{ color: '#000000' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  variant="outline"
                  style={{ 
                    borderColor: '#D0D0D0',
                    color: '#000000',
                    backgroundColor: 'transparent'
                  }}
                  onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Enterprise%20Plan%20Inquiry'}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                Everything you need
              </h2>
              <p className="text-xl" style={{ color: '#666666' }}>
                Built for modern customer service teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Instant Setup',
                  description: 'Integrate with your existing phone system in minutes, not weeks'
                },
                {
                  icon: Clock,
                  title: 'Reduced Wait Time',
                  description: 'Turn unproductive hold time into valuable customer intake'
                },
                {
                  icon: TrendingUp,
                  title: 'Better Metrics',
                  description: 'Track handle time, CSAT, and first-call resolution improvements'
                },
                {
                  icon: Users,
                  title: 'Agent Efficiency',
                  description: 'Agents start every call with context, not from scratch'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'SOC 2 compliant with end-to-end encryption'
                },
                {
                  icon: BarChart,
                  title: 'Deep Analytics',
                  description: 'Understand call patterns, common issues, and customer sentiment'
                }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="p-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.06)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#000000' }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#666666' }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                How Relay works
              </h2>
              <p className="text-xl" style={{ color: '#666666' }}>
                Three simple steps to better customer service
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  number: '01',
                  title: 'Customer placed on hold',
                  description: 'When your team is busy, instead of generic hold music, Relay\'s conversational AI greets the customer naturally.',
                  highlight: 'Natural conversation, not robotic menus'
                },
                {
                  number: '02',
                  title: 'AI collects information',
                  description: 'Relay asks relevant questions to understand the issue, gather context, and collect any necessary details.',
                  highlight: 'Smart intake based on your workflows'
                },
                {
                  number: '03',
                  title: 'Agent picks up briefed',
                  description: 'Your agent sees a complete summary before answering. No repetition needed. Straight to resolution.',
                  highlight: 'Zero wasted time for customer or agent'
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div 
                    className="text-5xl font-bold flex-shrink-0"
                    style={{ color: 'rgba(0, 0, 0, 0.15)' }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3" style={{ color: '#000000' }}>
                      {step.title}
                    </h3>
                    <p className="text-lg mb-3" style={{ color: '#666666' }}>
                      {step.description}
                    </p>
                    <div 
                      className="inline-block text-sm font-medium px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        color: '#000000'
                      }}
                    >
                      {step.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-20 px-6" style={{ backgroundColor: '#F8F8F8' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                Loved by customer service teams
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Relay cut our average handle time by 35%. Customers love not having to repeat themselves.",
                  author: "Sarah Chen",
                  role: "VP Customer Success",
                  company: "TechCorp"
                },
                {
                  quote: "Game changer for our support team. It's like having an extra team member who never sleeps.",
                  author: "Michael Rodriguez",
                  role: "Head of Support",
                  company: "CloudScale"
                },
                {
                  quote: "Our CSAT scores went up 22 points in the first month. Best ROI we've seen in years.",
                  author: "Emma Thompson",
                  role: "Director of Operations",
                  company: "GrowthLabs"
                }
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0E0E0'
                  }}
                >
                  <p className="text-base mb-6 leading-relaxed" style={{ color: '#000000' }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold" style={{ color: '#000000' }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm" style={{ color: '#666666' }}>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6" style={{ backgroundColor: '#000000' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Ready to transform your customer service?
            </h2>
            <p className="text-xl mb-10" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Join the early access program and be among the first to eliminate hold music forever.
            </p>
            <div>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-2"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  color: '#000000'
                }}
                onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Request%20Early%20Access'}
              >
                Request Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="py-12 px-6"
          style={{ 
            backgroundColor: '#F8F8F8',
            borderTop: '1px solid #E0E0E0'
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="RELAY" className="h-6" style={{ objectFit: 'contain' }} />
              </div>
              <div className="text-sm text-center md:text-left" style={{ color: '#666666' }}>
                Relay © 2026 · <a href="mailto:hello@getrelay.now" className="hover:underline transition-colors" style={{ color: '#000000' }}>hello@getrelay.now</a> · West Vancouver, BC
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}