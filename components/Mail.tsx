import { useRef, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EmailFormProps {
  to: string; // Ganti dengan alamat email yang sesuai
}

const EmailForm: React.FC<EmailFormProps> = ({ to }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = subjectRef.current?.value || '';
    const message = messageRef.current?.value || '';

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-green-500 mx-auto  mb-0">
        <section
      id="contact"
      className="container grid md:grid-cols-2  py-24 gap-4 "
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
        Mari Terhubung dengan Taniland
        </h5>
        <p className="text-white mb-4 max-w-md">
          {" "}
          Bergabunglah dalam Komunitas Taniland dan Wujudkan Potensi Bersama!
        </p>
        <div className="socials flex flex-col gap-2 mb-6">
          <Link href="">
            <Image src="/images/logo-white.png" width={100} height={100} alt="Github Icon" />
          </Link>
         
        </div>
        <Link href="https://www.instagram.com/taniland.co" target="_blank" className="bg-secondary px-10 py-4 rounded-md md:text-lg text-sm font-bold">
            Join Our Community
          </Link>
      </div>
      <div>
        
      <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-black placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Masukkan alamat email Anda"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                ref={subjectRef}
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-black placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Tuliskan subjek pesan Anda"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                className="bg-white border border-black placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Tuliskan pesan Anda"
              />
            </div>
            <button
              type="submit"
              className="bg-green-200 hover:bg-white hover:text-black text-primary font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
      </div>
    </section>
    </div>
    
    );
  };
  
  export default EmailForm;