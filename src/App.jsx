import { FaCloud, FaLock, FaRocket, FaStar, FaUsers } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-base-100 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            SaaS<span className="text-primary">Biz</span>
          </div>
          <div className="space-x-4">
            <a href="#features" className="btn btn-ghost">
              Features
            </a>
            <a href="#pricing" className="btn btn-ghost">
              Pricing
            </a>
            <a href="#testimonials" className="btn btn-ghost">
              Testimonials
            </a>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-base-200 text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Elevate Your Business with{" "}
            <span className="text-primary">
              SaaS<span className="text-secondary">Biz</span>
            </span>
          </h1>
          <p className="mb-6">The ultimate solution for managing your company's operations. Try it free today.</p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
              <div>
                <FaCloud className="text-3xl text-primary" />
              </div>
              <div>
                <h3 className="card-title">Cloud-Based</h3>
                <p className="text-base-content text-opacity-60">Access your data from anywhere in the world.</p>
              </div>
            </div>
          </div>
          <div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
              <div>
                <FaLock className="text-3xl text-primary" />
              </div>
              <div>
                <h3 className="card-title">Secure</h3>
                <p className="text-base-content text-opacity-60">Your data is protected with top-notch security measures.</p>
              </div>
            </div>
          </div>
          <div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
              <div>
                <FaRocket className="text-3xl text-primary" />
              </div>
              <div>
                <h3 className="card-title">Fast</h3>
                <p className="text-base-content text-opacity-60">Experience lightning-fast performance and speed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing cards */}
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial cards */}
          {/* ... */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 text-center py-8 mt-auto">
        <div className="container mx-auto px-4">
          <p>
            &copy; 2023 SaaS<span className="text-primary">Biz</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
