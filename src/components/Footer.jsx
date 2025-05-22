import GitHub from '../assets/icons/GitHub';
import Linkedin from './../assets/icons/Linkedin';
import WhatsApp from './../assets/icons/WhatsApp';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-10 text-center text-sm text-gray-500">
      <div className="flex flex-col items-center">
        <p>
          Created by{' '}
          <a
            href="https://github.com/Dilmurat777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline">
            Dilmurat
          </a>
        </p>

        <div className="flex gap-4 mt-2">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="transition-transform duration-300 hover:scale-150">
            <a href="https://github.com/Dilmurat777" target="_blank">
              <GitHub />
            </a>
          </motion.p>
				  <motion.p
					  initial={{ opacity: 0, y: -20 }}
					  animate={{ opacity: 1, y: 0 }}
					  transition={{ duration: 1, ease: 'easeInOut' }}
					  
					  className="transition-transform duration-100 hover:scale-150">
            <a href="https://www.linkedin.com/in/mrdilmurat-idrisov/" target="_blank">
              <Linkedin />
            </a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="transition-transform duration-100 hover:scale-150">
            <a href="https://wa.me/996558755756" target="_blank" rel="noopener noreferrer">
              <WhatsApp />
            </a>
          </motion.p>
        </div>
        <span className="text-xs mt-2">Copyright &copy; 2025</span>
      </div>
    </footer>
  );
}
