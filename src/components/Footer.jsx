
const Footer = () => {
  return (
    <footer id="about" className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Campus Infrastructure</h3>
            <p className="text-sm text-gray-300">
              Explore our state-of-the-art facilities and infrastructure available for academic and extracurricular activities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>VIT University</p>
              <p>Katpadi, Vellore, Tamil Nadu</p>
              <p className="mt-2">Email: info@campus.edu</p>
              <p>Phone: +91 9441679243</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-center text-gray-300">
            © {new Date().getFullYear()} Campus Infrastructure Catalogue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
