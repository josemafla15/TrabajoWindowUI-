import { SunMedium } from 'lucide-react'; 
import { ToggleRight } from 'lucide-react'; 
import { ToggleLeftIcon } from 'lucide-react'; 
import { Play } from 'lucide-react'; 
import { Image } from 'lucide-react'; 

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen" style={{ backgroundColor: 'hsl(250, 4%, 73%)' }}>
      <section className="w-1/4 bg-white rounded-lg p-4">

        <section>
          <h1><strong>Appearance</strong></h1>
          <span>Set or customize your preferences for the system</span>
          <div className="flex justify-center gap-8 mt-4 w-full">
            <div className="flex flex-col items-center">
              <div className="w-24 h-12 bg-gray-300 rounded-lg"></div>
              <span className="mt-2 text-black">Option 1</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-12 bg-gray-300 rounded-lg"></div>
              <span className="mt-2 text-black">Option 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-12 bg-gray-300 rounded-lg"></div>
              <span className="mt-2 text-black">Option 3</span>
            </div>
          </div>
        </section>

        <hr className="my-4 border-gray-300" />

        <section >
          <strong className="text-black">Language</strong>
          <div className="flex items-center justify-between gap-2" >
            <span>Select the language of your platform</span>
            <select className="p-1 border border-gray-300 rounded-lg text-black text-sm">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </section>

        <hr className="my-4 border-gray-300" />

        <section >
          <strong className="text-black">Interface theme</strong>
          <p>Customize your application appearance</p>
        </section>

        <hr className="my-4 border-gray-300" />

        <section>
          <strong className="flex justify-between text-black">Accent color</strong>
          <div className='flex items-center justify-between'>
            <span>Pick your platform main color</span>
          <div className="flex gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          </div>
          </div>
        </section>

        <hr className="my-4 border-gray-300" />

       
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SunMedium color="grey" size={24} />
            <strong className="text-black">Reduce motion</strong>
          </div>
          <ToggleRight color="purple" size={24} />
        </section>

        <hr className="my-4 border-gray-300" />

        <section className='flex item-center justify-between'>
          <div className='flex items-center gap-2'>
            <Play color='grey' size={24} />
            <strong className="flex justify-between text-black">Auto play</strong>
          </div>
          <ToggleRight color="purple" size={24} />
        </section>

        <hr className="my-4 border-gray-300" />

        <section className='flex item-center justify-between'>
          <div className='flex items-center gap-2'>
          <Image color='grey' size={24} aria-label="Image icon" />
            <strong className="flex justify-between text-black">High quality photo</strong>
          </div>
          <ToggleLeftIcon color='purple' size={24} />
        </section>

        <hr className="my-4 border-gray-300" />

        <section className="flex justify-between items-center">
          <strong className="text-black">Reset to default</strong>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition">
              Cancel
            </button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
              Save Preferences
            </button>
          </div>
        </section>

      </section>
    </main>
  );
}
