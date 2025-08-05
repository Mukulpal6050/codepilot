// ✅ 5. MobileMenu.jsx (dropdown)
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-16 right-4 bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 z-50 w-60">
          <a href="#features" className="block py-2 text-slate-700 dark:text-white">Features</a>
          <a href="#pricing" className="block py-2 text-slate-700 dark:text-white">Pricing</a>
          <a href="#" className="block py-2 text-slate-700 dark:text-white">Docs</a>
          <a href="#" className="mt-4 block w-full bg-indigo-600 text-white text-center py-2 rounded-full">Get Started</a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
