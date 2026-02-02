import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-brand-light dark:bg-brand-dark py-6">
      <div className="container mx-auto px-4">
        <Separator className="mb-6 bg-brand-forest/20 dark:bg-brand-teal/20" />
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div>
            <span className="block uppercase text-brand-forest dark:text-brand-teal text-sm font-semibold mb-2">
              Links
            </span>
            <ul className="flex flex-col sm:flex-row gap-4">
              <li>
                <a
                  className="text-brand-forest/80 hover:text-brand-teal dark:text-brand-light/80 dark:hover:text-brand-teal font-semibold text-sm transition-colors"
                  href="https://github.com/DerekMalone"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-brand-forest/80 hover:text-brand-teal dark:text-brand-light/80 dark:hover:text-brand-teal font-semibold text-sm transition-colors"
                  href="/attribution"
                >
                  Attribution
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-brand-forest/70 dark:text-brand-light/70">
              © {new Date().getFullYear()}{" "}
              <a
                href="/"
                className="hover:text-brand-teal transition-colors"
              >
                Derek Malone
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
