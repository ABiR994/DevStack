import LogoText from "../assets/logo-text.png";

const footerColumns = [
    {
        title: "Product",
        links: [
        { label: "Home", href: "#home" },
        { label: "Technologies", href: "#technologies" },
        { label: "Projects", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        ],
    },
];

const socialLinks = ["GitHub", "Twitter", "LinkedIn"];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
            <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-12">
            <div className="max-w-xs text-center md:text-left mx-auto md:mx-0">
                <img src={LogoText} alt="Dev Stack" className="h-8 mx-auto md:mx-0" />
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                Curated tools, technologies, and resources for developers
                building modern software.
                </p>
                <div className="mt-4 flex items-center justify-center md:justify-start gap-3 text-sm font-medium text-gray-700">
                {socialLinks.map((social, index) => (
                    <span key={social} className="flex items-center gap-3">
                    <a href="#" className="hover:text-pink-600 transition-colors">
                        {social}
                    </a>
                    {index < socialLinks.length - 1 && (
                        <span className="text-gray-300">•</span>
                    )}
                    </span>
                ))}
                </div>
            </div>

            <div className="hidden md:flex gap-32">
                {footerColumns.map((column) => (
                <div key={column.title}>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                    {column.title}
                    </h4>
                    <ul className="mt-4 flex flex-col gap-3">
                    {column.links.map((link) => (
                        <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                        >
                            {link.label}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6 text-sm text-gray-400">
            <p>© {year} Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <a href="#" className="hover:text-pink-600 transition-colors">
                Privacy
                </a>
                <a href="#" className="hover:text-pink-600 transition-colors">
                Terms
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;