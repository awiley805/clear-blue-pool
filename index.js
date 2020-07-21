
const reviews = [
    {
        name: "Susan Smith",
        city: "Round Rock",
        job: "Weekly Pool Service",
        text: "nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et"
    },
    {
        name: "Barb Johnson",
        city: "Austin",
        job: "Pool Light Repair",
        text: "nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et"
    },
      {
        name: "Peter Jones",
        city: "Cedar Park",
        job: "New Pool Construction",
        text: "nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et"
    },
    {
        name: "Bill Anderson",
        city: "Austin",
        job: "Weekly Pool Service",
        text: "nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et"
    },
    {
        name: "Mike Smith",
        city: "Leander",
        job: "Pool Heater Repair",
        text: "nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et"
    },
]

const name = document.querySelector(".client");
const city = document.querySelector(".city");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
  showClient(currentItem)
})

function showClient(client){
  const item = reviews[client];
  name.textContent = item.name;
  city.textContent = item.city;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showClient(currentItem);
})

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reivews.length - 1;
  }
  showClient(currentItem)
})
