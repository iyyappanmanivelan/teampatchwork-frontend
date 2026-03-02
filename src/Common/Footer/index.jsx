import Link from "next/link";
import styles from "./style.module.css";
import { Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            {/* Tactical Grid Background */}
            <div className="tactical-grid" style={{ opacity: 0.1 }} />

            <div className={styles.footerContent}>
                {/* Brand Column */}
                <div className={styles.brandColumn}>
                    <h2 className={styles.brandTitle}>TEAM PATCH WORK</h2>
                    <p className={styles.brandTagline}>
                        Crafting visual narratives that define brands.
                        Your vision, our tactical execution.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon} aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="YouTube">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                {/* Explore Column */}
                <div>
                    <h3 className={styles.columnTitle}>EXPLORE</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/" className={styles.footerLink}>Home</Link></li>
                        <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
                        <li><Link href="/ourwork" className={styles.footerLink}>Our Work</Link></li>
                        <li><Link href="/services" className={styles.footerLink}>Services</Link></li>
                        <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
                    </ul>
                </div>

                {/* Services Column */}
                <div>
                    <h3 className={styles.columnTitle}>SERVICES</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/services" className={styles.footerLink}>Corporate Films</Link></li>
                        <li><Link href="/services" className={styles.footerLink}>Product Shoots</Link></li>
                        <li><Link href="/services" className={styles.footerLink}>Digital Marketing</Link></li>
                        <li><Link href="/services" className={styles.footerLink}>Brand Strategy</Link></li>
                        <li><Link href="/services" className={styles.footerLink}>Post Production</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h3 className={styles.columnTitle}>CONTACT</h3>
                    <div className={styles.contactInfo}>
                        <p>Chennai, Tamil Nadu, India</p>
                        <p>+91 99520 89569</p>
                        <p>contact@teampatchwork.com</p>
                        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: '#E50914', textDecoration: 'none', fontWeight: 'bold' }}>
                            START PROJECT <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} Team Patch Work. All Rights Reserved.</p>
                <div className={styles.bottomLinks}>
                    <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
                    <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
