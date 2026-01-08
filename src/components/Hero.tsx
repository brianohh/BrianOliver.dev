export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-muted text-sm tracking-wide uppercase mb-4">
          Web Developer & Designer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          Hi, I&apos;m Brian Oliver
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10">
          I craft beautiful, functional web experiences that help businesses
          connect with their audiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-3 rounded-full font-medium overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute inset-0 border-2 border-accent rounded-full group-hover:border-transparent transition-colors"></span>
            <span className="relative text-accent group-hover:text-white transition-colors">Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
