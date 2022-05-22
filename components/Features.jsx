import React from "react";
import Map from "./Map";
import Link from "next/link";
import { HiMap } from "react-icons/hi";

const Features = () => {
  return (
    <div id="features" className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      {/* Plan */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          Podstawowe Info
        </h2>
        <div className="max-w-md text-center text-gray-600 md:text-left">
          Ścieżka w okół jeziora jest nam dobrze znana. W maju 2019 objechaliśmy całe jezioro zaczynając w kierunku wschodnim. 
          W tym roku pojechaliśmy w kierunku zachodnim docierając do Heviz, gdzie skorzystaliśmy ze słynnych term. Następnego dnia jechaliśmy północną częścią jeziora docierając do półwyspu Tichany. Tym razem podjęliśmy się wjazdu na szczyt półwyspu. 
          
          <ul>
            <li>1 dzień - 73km, 2000kcal</li>
            <li>2 dzień - 84km, 2550kcal</li>
            <li>3 dzień - 72km, 1900kcal</li>
          </ul>
        </div>
        <div className="rounded-lg m-6 z-50">
            <Map />
        </div>
        
      </div>
     

      {/* Day Schedule */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* Day 1 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-blue-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                12/05
              </div>

              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Czwartek
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">Czwartek</h3>
            <p className="text-gray-600">
              <span className="font-bold">6:00 - 16:00: </span>Podróż (dwa auta), spotkanie na trasie S8 (McDonald Rawa Mazowiecka) - <a className="text-indigo-500 font-bold" href="http://www.kolcsonzosiofok.hu/" target="_blank" rel="noreferrer">Mapa</a>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">16:00 - 16:45: </span>Odbiór e-bike w Siofok - <a className="text-indigo-500 font-bold" href="https://goo.gl/maps/QbvyUWyoy4ZqJodG9" target="_blank" rel="noreferrer">o tu</a>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">18:00 - 19:00: </span>Przygotowanie rowerów oraz degustacja piwa
            </p>
            <p className="text-gray-600">
              <span className="font-bold">19:00: </span>Kolacja w Csarda - <a className="text-indigo-500 font-bold" href="https://baricska.hu/en/home" target="_blank" rel="noreferrer">o tu</a>
            </p>
          </div>
        </div>
        {/* Day 2 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-blue-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                13/05
              </div>

              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Piątek
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">Piątek</h3>
            <p className="text-gray-600">
              <span className="font-bold">8:00 - 9:00:</span> Śniadanie
            </p>
            <p className="text-gray-600">
              <span className="font-bold">9:30 - :</span> Ruszamy w kierunku Heviz (ok 70km) - <a className="text-indigo-500 font-bold" href="https://goo.gl/maps/sdQbEvWYETRFt5Ws6" target="_blank" rel="noreferrer">Trasa</a>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">17:00 - 18:30:</span> Jezioro termalne w szlafroku :)
            </p>
            <p className="text-gray-600">
              <span className="font-bold">19:00 - :</span> Kolacja obok hotelu (TBD)
            </p>
          </div>
        </div>
        {/* Day 3 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-blue-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                14/05
              </div>

              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Sobota
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">Sobota</h3>
            <p className="text-gray-600">
              <span className="font-bold">8:00 - 9:00:</span> Śniadanie
            </p>
            <p className="text-gray-600">
              <span className="font-bold">9:30 - :</span> Ruszamy w kierunku Balatonfured (ok 75km) - <a className="text-indigo-500 font-bold" href="https://goo.gl/maps/iVdCDVXk878ryERT7" target="_blank" rel="noreferrer">Trasa</a>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">13:30 - 14:00:</span> Lunch w plenerze (węgierskie specjały)
            </p>
            <p className="text-gray-600">
              <span className="font-bold">19:00 - :</span> Kolacja w hotelu (bufet)
            </p>
          </div>
        </div>
        {/* Day 4 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-blue-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                15/05
              </div>

              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Niedziela
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">Niedziela</h3>
            <p className="text-gray-600">
              <span className="font-bold">8:00 - 9:00:</span> Śniadanie
            </p>
            <p className="text-gray-600">
              <span className="font-bold">9:30 - :</span> Ruszamy w kierunku Balatonfoldvar (ok 70km) - <a className="text-indigo-500 font-bold" href="https://goo.gl/maps/VSqpV9zdheTbMfqE6" target="_blank" rel="noreferrer">Trasa</a>
            </p>
            <p className="text-gray-600">
              <span className="font-bold">13:30 - 14:00:</span> Lunch po drodze
            </p>
            <p className="text-gray-600">
              <span className="font-bold">19:00 - :</span> Kolacja w okolicy
            </p>
          </div>
        </div>

        {/* Day 5 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="rounded-l-full bg-blue-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-300">
                16/05
              </div>

              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Poniedziałek
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">Poniedziałek</h3>
            <p className="text-gray-600">
              <span className="font-bold">7:00 - 8:00:</span> Śniadanie
            </p>
            <p className="text-gray-600">
              <span className="font-bold">8:00 - 17:00</span> Wyjazd do Warszawy
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
