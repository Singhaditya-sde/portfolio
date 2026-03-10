import { Link } from 'react-router-dom';

import { navbarConfig } from '@/config/Navbar';

import Adi_profile_vector from '../../assets/Adi_profile_vector.png';
import Container from './Container';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Link to="/">
            <img
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              src={Adi_profile_vector}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
          <div className="flex items-center justify-center gap-4">
            {navbarConfig.navItems.map((items) => (
              <Link
                className="transittion-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={items.label}
                to={items.herf}
              >
                {items.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
