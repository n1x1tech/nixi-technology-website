
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4 font-orbitron">
            NIXI TECHNOLOGY
          </div>
          <p className="text-muted-foreground mb-6">
            Transforming enterprise and education through creative intelligent AI solutions
          </p>
          <div className="flex justify-center space-x-8 mb-6 text-sm text-muted-foreground">
            <span>Enterprise AI Workflow Design</span>
            <span>•</span>
            <span>University Partnerships</span>
            <span>•</span>
            <span>Creative Technology</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Nixi Technology. All rights reserved. | info@nixitechnology.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
