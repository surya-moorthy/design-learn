
import './App.css'

function App() {

  return (
   <div className="h-full flex flex-col justify-center items-center px-4">
    <div className="flex flex-col justify-center items-center max-w-3xl text-center gap-6 min-h-[75vh] md:h-auto md:my-20">
           <h1 className="text-4xl sm:text-5xl font-sans font-medium">Kamado Tanjiro – The Blade of Compassion</h1>
           <p 
           className="text-neutral-400 text-lg font-medium font-serif"
           >
              Guided by empathy and driven by an unbreakable will, Kamado Tanjiro rises against darkness to protect humanity and redeem his sister. In every swing of his blade lies courage, in every step—hope. Witness the journey of a boy turned hero.
           </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-10">
        <Card/>
        <Card/>
        <Card/>
    </div> 
   </div>
  )
}

function Card() {
  return (
    <div className="max-w-sm rounded-2xl shadow-md hover:shadow-xl shadow-gray-200 h-auto overflow-hidden transition-shadow">
         <div>
              <img src="image.png" alt="Kamado-Tanjiro" className="w-full h-64 rounded-xl"/>
         </div>
         <div className="flex flex-col justify-center items-center p-10">
               <h4 className="font-medium font-serif">
                   I have some interest on watching anime and 
                   one of my bext character is Kamado Tanjiro 
               </h4>
               <button className="px-4 py-2 rounded-md bg-neutral-800 text-white text-md cursor-pointer hover:bg-neutral-950 transition-opacity hover:opacity-75">
                     Check out more 
               </button>
         </div>
    </div>
  )
}

export default App