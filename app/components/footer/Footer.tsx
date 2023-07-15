import Link from 'next/link';
/* import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types'; */

/* const socialIcons: { [key: string]: IconDefinition } = {
  facebook: faFacebook,
  twitter: faTwitter,
  instagram: faInstagram,
}; */

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
        <div>
          <img src= "/logo_elixir.png" width={200} height={200} alt="Nuestro logo" />
        </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h2 className="text-lg font-semibold">Enlaces</h2>
            <ul className="mt-4">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/tienda">Tienda</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Contacto</h2>
            <p className="mt-4">Correo electrónico: elixircars@example.com</p>
            <p>Teléfono: +1234567890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Redes Sociales</h2>
            <ul className="mt-4 flex space-x-4">
            <div className="flex space-x-7">
                    <a href="https://es-la.facebook.com/" target="_blank">
                          <img src="/face.gif" className="w-6 h-6" alt="facebook_icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                          <img src="/insta.gif" className="w-6 h-6" alt="insta_icon" />
                    </a>
                    <a href="https://gmail.com" target="_blank">
                          <img src="/mail.gif" className="w-6 h-6" alt="mail_icon" />
                    </a>

            </div>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Derechos Reservados</h2>
            <p className="mt-4">© 2023 Tu Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


/* 
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-blue-900 text-white" > 
      <div className="container mx-auto lg:flex lg:justify-between" >
        <nav className="flex flex-col items-center text-2xl text-white no-underline font-bold md:flex-row md:gap-8">
        <img src= "/logo_elixir.png" width={200} height={200} alt="Nuestro logo" />
          <Link className='hover:text-yellow-500' href="/">Inicio</Link>
          <Link className='hover:text-yellow-500' href="/nosotros">Nosotros</Link>
          <Link className='hover:text-yellow-500' href="/blog">Blog</Link>
          <Link className='hover:text-yellow-500' href="/tienda">Tienda</Link>
        </nav>
        <p className="text-2xl text-white font-bold text-center">Derechos reservados</p>
      </div>
    </footer>
  );
}; 


 export default Footer */

/* interface footerProps {
    createdBy: string;
  }
  
  const Footer: React.FC<footerProps> = ({ createdBy }) => {
    return (
      <footer>
        <div
          className="p-4 text-center"
          style={{ backgroundColor: "#071952", color: "#fff" }}
        >
          <h3>{createdBy}</h3>
        </div>
      </footer>
    );
  };
  
  export default Footer; */