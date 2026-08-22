import { Link } from "react-router-dom";
import SIGIL from "../../assets/sigil.png";

export default function ReturnToMap({ label = "Return to the Realm" }) {
  return (
    <Link to="/explore" aria-label={label} className="group opacity-65 fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-1.5">
      <span className="heading-cinzel text-xs uppercase tracking-widest text-gray-400 transition-colors duration-300 group-hover:text-gold-bright">
        {label}
      </span>
    </Link>
  );
}
