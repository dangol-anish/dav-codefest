"use client";

import { Mail, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const contacts = [
  { icon: Mail, label: "Email", value: "cognitoitclub@davnepal.edu.np" },
  { icon: Phone, label: "Phone", value: "+977-9763443311" },
  { icon: MessageCircle, label: "WhatsApp", value: "+977-9763443311" },
];

const socials = [
  {
    icon: Facebook,
    label: "Facebook",
    value: "Cognito DAV IT Club",
    color: "text-blue-400",
    href: "https://www.facebook.com/profile.php?id=61556579985834",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@davitclub",
    color: "text-blue-400",
    href: "https://www.instagram.com/davitclub",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "Join Community",
    color: "text-blue-400",
    href: "https://discord.gg/PZH4AbAW",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 bg-[#030615]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-stone-100/80">
            Ready to join the revolution?
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#030615]/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-stone-100 mb-6">
                Direct Contact
              </h3>
              <div className="space-y-6">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-950/20 rounded-2xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-stone-100 text-sm">
                          {contact.label}
                        </div>
                        <div className="text-stone-100/60 font-medium">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-[#030615]/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-stone-100 mb-6">
                Follow Our Journey
              </h3>
              <div className="space-y-6">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-950/20 hover:bg-blue-950/40 text-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`h-6 w-6 ${social.color}`} />
                      </div>
                      <div>
                        <div className="text-stone-100 text-sm">
                          {social.label}
                        </div>
                        <div className={`font-medium text-stone-100/60 `}>
                          {social.value}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
