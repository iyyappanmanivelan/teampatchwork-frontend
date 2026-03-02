import { useRouter } from "next/router";
import PillNav from "@/Animation/PillNav";
import styles from "./styles.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.headernav}>
      <div className="container pt-4">
        <PillNav
          logo={"/assets/brand_logo.png"}
          logoAlt={"logo"}
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/aboutus" }, // Check if path is correct
            { label: "Services", href: "/services" },
            { label: "Our Works", href: "/ourwork" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref={router.pathname}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
    </header>
  );
};

export default Header;
