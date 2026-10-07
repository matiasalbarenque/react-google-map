import { Map } from "@/components/map";
import type { LocationProps } from "@/typings/components/location";
import { LOCATION_DEFAULTS } from "./location.data";

export const Location = (props: LocationProps) => {
  const { title = LOCATION_DEFAULTS.title } = props;

  return (
  <section className="scroll-mt-4 px-6 md:px-10 xl:px-0">
    <div className="mx-auto max-w-[1200px] py-16 md:py-20">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] text-black">
          {title}
        </h2>
      </div>

      <div className="mt-10 overflow-hidden rounded-[30px] [&>p]:flex [&>p]:min-h-[400px] [&>p]:items-center [&>p]:justify-center [&>p]:p-6 [&>p]:text-center">
        <Map />
      </div>
    </div>
  </section>
  );
};
