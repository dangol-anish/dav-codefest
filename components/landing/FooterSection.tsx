import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Register", href: "#register" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Contact", href: "#contact" },
];

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
            <h4 className="font-semibold text-xl text-[#f2eeef] mb-4">
              Quick Links
            </h4>
            <div className="space-y-3 ">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-stone-100/80 hover:text-stone-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-semibold text-xl text-[#f2eeef] mb-4">
              Supported By
            </h4>
            <div className="flex gap-4">
              <Image
                src="/logo1.svg"
                alt="Logo 1"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
                priority
              />
              <Image
                src="/logo2.svg"
                alt="Logo 2"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <Image
                src="/logo3.svg"
                alt="Logo 3"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
