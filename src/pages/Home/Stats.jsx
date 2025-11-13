import { HeartPlus, Puzzle, Users, Workflow } from "lucide-react";
export default function Stats() {
  return (
    <section className="bg-seasalt dark:bg-graphite border-silver dark:border-sideral border-t py-24 md:py-32">
      <div className="container mx-auto grid w-[90%] max-w-7xl grid-cols-1 gap-10 px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-bittersweet my-4 flex items-center justify-center">
            <Users className="h-12 w-12" />
          </div>
          <div className="text-techblack dark:text-seasalt font-sans text-3xl font-bold">
            44
          </div>
          <h4 className="text-techblack dark:text-seasalt mt-1 text-2xl">
            Customers and counting
          </h4>
        </div>
        <div>
          <div className="text-bittersweet my-4 flex items-center justify-center">
            <Puzzle className="h-12 w-12" />
          </div>
          <div className="text-techblack dark:text-seasalt font-sans text-3xl font-bold">
            228
          </div>
          <h4 className="text-techblack dark:text-seasalt mt-1 text-2xl">
            Projects delivered
          </h4>
        </div>
        <div>
          <div className="text-bittersweet my-4 flex items-center justify-center">
            <Workflow className="h-12 w-12" />
          </div>
          <div className="text-techblack dark:text-seasalt font-sans text-3xl font-bold">
            577
          </div>
          <h4 className="text-techblack dark:text-seasalt mt-1 text-2xl">
            Custom Solutions
          </h4>
        </div>
        <div>
          <div className="text-bittersweet my-4 flex items-center justify-center">
            <HeartPlus className="h-12 w-12" />
          </div>
          <div className="text-techblack dark:text-seasalt font-sans text-3xl font-bold">
            10,000+
          </div>
          <h4 className="text-techblack dark:text-seasalt mt-1 text-2xl">
            Support tickets resolved
          </h4>
        </div>
      </div>
    </section>
  );
}
