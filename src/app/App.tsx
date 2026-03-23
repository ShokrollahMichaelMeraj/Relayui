import { Button } from './components/ui/button';
import { motion } from 'motion/react';
import { InteractiveNodes } from './components/InteractiveNodes';
import logo from 'figma:asset/3225d8230897cf47eeaf025e0f9b01fe3a0d1946.png';

export default function App() {
  return (
    <div 
      className="min-h-screen relative" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Interactive Node Background */}
      <InteractiveNodes />
      
      {/* Gradient overlay for depth */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.3) 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <motion.img
                src={logo}
                alt="RELAY"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                className="h-10"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="py-24 px-6" style={{ backgroundColor: 'rgba(45, 90, 158, 0.05)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: '#0A0F1E' }}
            >
              Stop Losing Customers on Hold
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
              style={{ color: '#0A0F1E' }}
            >
              Relay is an AI voice agent that replaces hold music with intelligent customer intake. When your agent picks up, they're already briefed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 transition-all hover:shadow-xl"
                style={{ 
                  backgroundColor: '#2D5A9E',
                  color: 'white'
                }}
                onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Request%20Early%20Access'}
              >
                Request Early Access
              </Button>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: '#0A0F1E' }}
            >
              Hold Music is Costing You
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-lg"
                style={{ 
                  backgroundColor: '#F4F8F9',
                }}
              >
                <p className="text-lg leading-relaxed" style={{ color: '#0A0F1E' }}>
                  57% of customers cite hold time as their #1 frustration
                </p>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-lg"
                style={{ 
                  backgroundColor: '#F4F8F9',
                }}
              >
                <p className="text-lg leading-relaxed" style={{ color: '#0A0F1E' }}>
                  First 90 seconds of every call is the customer repeating themselves
                </p>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-lg"
                style={{ 
                  backgroundColor: '#F4F8F9',
                }}
              >
                <p className="text-lg leading-relaxed" style={{ color: '#0A0F1E' }}>
                  Average handle time inflated by poor agent preparation
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: '#0A0F1E' }}
            >
              How Relay Works
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#2D5A9E' }}
                >
                  <span className="text-2xl font-bold text-white">1</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#0A0F1E' }}>
                  Customer is placed on hold
                </h3>
                <p style={{ color: '#6B7280' }}>
                  Instead of music, they're greeted by Relay's conversational AI
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#2D5A9E' }}
                >
                  <span className="text-2xl font-bold text-white">2</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#0A0F1E' }}>
                  Relay has a natural conversation and collects their issue
                </h3>
                <p style={{ color: '#6B7280' }}>
                  Natural conversation extracts key details, reason for call, and context
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#2D5A9E' }}
                >
                  <span className="text-2xl font-bold text-white">3</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#0A0F1E' }}>
                  Agent picks up already briefed — no repetition
                </h3>
                <p style={{ color: '#6B7280' }}>
                  Zero repetition. Straight to resolution. Better experience for everyone.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Early Access Section */}
        <section className="py-20 px-6" style={{ backgroundColor: 'rgba(45, 90, 158, 0.05)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#0A0F1E' }}
            >
              Be First
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl mb-10"
              style={{ color: '#0A0F1E' }}
            >
              Relay is currently in early access. Request a demo and we'll be in touch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 transition-all hover:shadow-xl"
                style={{ 
                  backgroundColor: '#2D5A9E',
                  color: 'white'
                }}
                onClick={() => window.location.href = 'mailto:hello@getrelay.now?subject=Request%20Early%20Access'}
              >
                Request Early Access
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 px-6"
          style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p style={{ color: '#6B7280' }}>
              Relay © 2026 · <a href="mailto:hello@getrelay.now" className="hover:underline" style={{ color: '#2D5A9E' }}>hello@getrelay.now</a> · West Vancouver, BC
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}