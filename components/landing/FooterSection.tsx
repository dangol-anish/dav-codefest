import Link from "next/link";

const quickLinks = ["Home", "Register", "Timeline", "Prizes", "Contact"];

export function FooterSection() {
  return (
    <footer className="py-16 px-4 border-t border-[#ebebeb] bg-[#030615]/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-[#f2eeef] mb-4">
              DAV CodeFest 2025
            </h3>
            <p className="text-stone-100/80 mb-4 max-w-md">
              Organized by DAV IT Club. Building the future, one line of code at
              a time.
            </p>
            <div className="text-sm text-stone-100/80">
              © 2025 DAV College. All rights reserved.
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#f2eeef] mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="block text-stone-100/80 hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
