import { testimonials } from "@/constants/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="w-full min-h-screen bg-black text-wheat px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-semibold mb-4 max-w-[250px] text-4xl mx-auto !leading-normal md:!leading-tight md:max-w-[700px] sm:text-5xl md:text-8xl">
            What my <span className="font-serif italic">clients say</span>
          </h2>

          <p className="text-wheat/60 md:text-lg">
            See what my clients have to say about working with me and the
            results I helped them achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className={
                "bg-wheat/5 border border-wheat/15 rounded-lg p-12 hover:bg-wheat/10 transition-colors"
              }
            >
              <div className="mb-8">
                <Image
                  src={testimonial.logo}
                  alt="Company logo"
                  width={40}
                  height={40}
                  className="opacity-80 w-auto h-auto"
                />
              </div>

              <h2 className="text-xl font-medium mb-4 text-wheat">
                {testimonial.title}
              </h2>

              <p className="text-wheat/60 mb-8 leading-relaxed max-w-[490px]">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="rounded-full overflow-hidden size-[60px]">
                  <Image
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    width={60}
                    height={60}
                    className="object-cover w-auto h-auto"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-wheat">
                    {testimonial.author.name}
                  </h3>
                  <h5 className="text-sm text-wheat/60">
                    {testimonial.author.company}
                  </h5>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
