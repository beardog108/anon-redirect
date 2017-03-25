/*
Copyright Kevin Froman (https://ChaosWebs.net/) 2017 MIT License
*/
window.onload = function(){

var urls = ["http://127.0.0.1:8080/ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ/cat.jpg", "http://127.0.0.1:8888/static/themes/clean/logo.png", "http://127.0.0.1:43110/1HeLLo4uzjaLetFx6NH3PMwFP3qbRbTf3D/img/logo.png", "http://127.0.0.1:7657/themes/console/light/images/i2plogo.png"];

// To use this, specify your network URLs below. Order being IPFS, Freenet, ZeroNet and I2P
var sites = ["", "", "", ""];

for (x in urls){
  var img = document.createElement('img');
  img.src = urls[x] + '?v=' + Math.random() + Math.random();
  img.onload = function() {
    console.log('user has ' + urls[x]);
    if (sites[x] != ''){
      if (x == 3){
        // If network is I2P, don't redirect, as the user's browser probably isn't (currently) configured for i2p
        prompt('You appear to have I2P installed. If you wish, you can use our eepsite with the URL below.', sites[x]);
      }
      else{
      window.location.href = sites[x];
      }
    }
  };
}

}