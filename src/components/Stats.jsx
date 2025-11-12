import { Users, Puzzle, Workflow, HeartPlus } from 'lucide-react'

export default function Stats() {
  return (
    <section className="py-24 bg-seasalt dark:bg-techblack md:py-32">
      <div className="container grid grid-cols-2 gap-10 px-4 mx-auto text-center max-w-7xl md:grid-cols-4">
        <div>
            <div className="flex items-center justify-center my-4 text-nlc-blue dark:text-seasalt">
            <Users className="w-12 h-12" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-seasalt">44</div>
          <h4 className="mt-1 text-2xl text-techblack dark:text-seasalt">Customers and counting</h4>
        </div>
        <div>
        <div className="flex items-center justify-center my-4 text-nlc-blue dark:text-seasalt">
            <Puzzle className="w-12 h-12" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-seasalt">228</div>
          <h4 className="mt-1 text-2xl text-techblack dark:text-seasalt">Projects delivered</h4>
        </div>
        <div>
        <div className="flex items-center justify-center my-4 text-nlc-blue dark:text-seasalt">
            <Workflow className="w-12 h-12" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-seasalt">577</div>
          <h4 className="mt-1 text-2xl text-techblack dark:text-seasalt">Custom Solutions</h4>
        </div>
        <div>
        <div className="flex items-center justify-center my-4 text-nlc-blue dark:text-nlc-blue">
            <HeartPlus className="w-12 h-12" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-seasalt">10000+</div>
          <h4 className="mt-1 text-2xl text-techblack dark:text-seasalt">Support tickets resolved</h4>
        </div>
      </div>
    </section>
  );
}