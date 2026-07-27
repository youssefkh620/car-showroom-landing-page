const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuDiv = document.getElementById("menuDiv");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

const navBg = document.getElementById("navBg");
const navList = document.getElementById("navList");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navBg.classList.add("bg-white", "shadow-sm");
    navList.classList.remove("text-white");
    navList.classList.add("text-[#364153]");
  } else {
    navBg.classList.remove("bg-white", "shadow-sm");
    navList.classList.remove("text-[#364153]");
    navList.classList.add("text-white");
  }
});

const carsContainer = document.getElementById("carsContainer");

fetch("car.json")
  .then((response) => response.json())
  .then((cars) => {
    cars.forEach((car) => {
      carsContainer.innerHTML += `

    <div
      class="rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden"
    >

      <img 
      class="w-full" 
      src="${car.image}" 
      alt="car" />

      <div class="px-6 py-2">

        <div class="flex items-end justify-between mb-4">

          <div>
            <h4 class="font-primary font-bold text-[10px] text-[#99A1AF]">
              ${car.brand}
            </h4>

            <p class="font-primary font-bold text-[#101828]">
              ${car.model}
            </p>
          </div>


          <p class="font-primary font-black text-[#E7000B]">
            ${car.price}
          </p>

        </div>


        <span class="block m-auto h-0.5 bg-[#F3F4F6] w-full my-3.5"></span>


        <div
          class="flex items-center gap-4 text-[11px] text-[#6A7282] mb-3.5"
        >

          <p>
          <i class="fa-solid fa-gas-pump"></i> 
          ${car.type}
          </p>

          <p>
          <i class="fa-solid fa-car"></i> 
          ${car.transmission}
          </p>

          <p>
          <i class="fa-solid fa-bolt"></i> 
          ${car.power}
          </p>

        </div>


        <button
          class="font-primary font-bold text-xs text-[#364153] border-2 border-[#E5E7EB] w-full rounded-3xl py-3 hover:cursor-pointer"
        >
          View Details
        </button>


      </div>

    </div>

    `;
    });
  });
