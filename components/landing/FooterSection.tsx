import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="py-16 px-4 border-t border-[#ebebeb]/20 bg-[#030615]/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
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
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#f2eeef] mb-1 uppercase tracking-wide">
                Organized by
              </span>
              <Image
                src="/logo1.svg"
                alt="Cognito Logo"
                width={96}
                height={96}
                className="w-20 h-20 object-contain mt-3"
                priority
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#f2eeef] mb-1 uppercase tracking-wide">
                Logistic Partner
              </span>
              <Image
                src="/logo4.svg"
                alt="Whizzy Logo"
                width={96}
                height={96}
                className="w-20 h-20 object-contain mt-3"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs md:text-sm text-[#f2eeef] mb-1 uppercase tracking-wide">
                Supported by
              </span>
              <div className="flex flex-row gap-4 mt-3">
                <Image
                  src="/logo3.svg"
                  alt="DAV College Logo"
                  width={96}
                  height={96}
                  className="w-20 h-20 object-contain"
                />
                <Image
                  src="/logo5.svg"
                  alt="DAV International College Logo"
                  width={96}
                  height={96}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
