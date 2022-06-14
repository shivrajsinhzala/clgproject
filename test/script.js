function loadStates() {
  let url = "https://cdn-api.co-vin.in/api/v2/admin/location/states";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let obj = data.states;

      for (i = 0; i < obj.length; i++) {
        $("#stateselector").append(
          `<option value = ` +
            data.states[i].state_id +
            ` > ` +
            data.states[i].state_name +
            ` </option>`
        );
      }
    });
}

function GetSelectedValue() {
  $("#districtselector").html("<option> Select Your District </option>");
  var e = document.getElementById("stateselector");
  var state_id = e.options[e.selectedIndex].value;
  let disturl =
    `https://cdn-api.co-vin.in/api/v2/admin/location/districts/` + state_id;
  fetch(disturl)
    .then((response) => response.json())
    .then((data) => {
      let obj = data.districts;

      for (i = 0; i < obj.length; i++) {
        $("#districtselector").append(
          `<option value = ` +
            data.districts[i].district_id +
            ` > ` +
            data.districts[i].district_name +
            ` </option>`
        );
      }
    });
};

function submit(){
    var date = new Date();
      var today =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    var e = document.getElementById("districtselector");
    var district_id = e.options[e.selectedIndex].value;

    let finalurl =`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=`+district_id+`&date=`+today;

    fetch(finalurl)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
