import { useContext } from 'react';
import ListTodo from './components/ListTodo';

import { Toaster } from 'react-hot-toast';

import { TodoContext } from './context/createContext';
import Header from './components/Header';
import ModalWIndow from './components/ModalWIndow';
import { motion } from 'framer-motion';
import Footer from './components/Footer';


export default function App() {
  const { theme } = useContext(TodoContext);

  return (
    <div className={`App ${theme === 'light' ? 'bg-white' : 'bg-dark text-textWhite'}`}>
      <div
        className={`container max-w-3xl mx-auto px-4 flex flex-col items-center relative h-full`}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-2xl font-bold mt-5 uppercase">📋 Todo List</motion.h1>
        <Header />
        <ListTodo />
        <ModalWIndow />
        <Toaster position="top-center" />
      </div>
        <Footer />
    </div>
  );
}
