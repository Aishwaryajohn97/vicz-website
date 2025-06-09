import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        <p>© 2025 VICZ Ltd. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}











