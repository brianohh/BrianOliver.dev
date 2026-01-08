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
            className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border rounded-full font-medium hover:border-foreground transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
