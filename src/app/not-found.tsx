import AnimatedCTAButton from "@/components/ui/animated-cta-button";
export default function NotFound() {
  return (
    
      <div className="dark relative mx-4 my-4 flex min-h-[95vh] justify-center text-center items-center overflow-hidden rounded-3xl bg-gray-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[--gray-0] via-[#161616] to-[--gray-0] text-[var(--gray-500)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[linear-gradient(to_right,#4a49492e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container text-center relative z-30">
<h1 className="text-2xl uppercase !leading-tight tracking-tighter text-[var(--text-primary)] md:text-5xl exact-2xl:text-7xl">Page Not Found</h1>
      <p className="mb-6 text-md text-[var(--text-tertiary)] md:!text-lg text-center">Could not find requested resource</p>
       <AnimatedCTAButton
              href="/"
              text="Back to Home"
              ariaLabel="Back to Home"
              external={false} 
              className="mx-auto md:ml-0"
            />
      </div>
        
        </div>
     
  );
}