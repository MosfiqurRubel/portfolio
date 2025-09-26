import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight space-x-2">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay1">
              Mosfiqur
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay2">
              Rahman
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay3">
            I create a stellar web experiences with modern Technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
