
export const shortenAddress = (address) => {
var radd = "";
if(address!=null){
// `${address.slice(0,5)}...${address.split(address.length - 4)}`
for(var i=0; i<5; i++){
    radd += address[i];
}
radd+="...";
for (var j=address.length-5; j<address.length; j++){
    radd+= address[j];
}
}
return radd;
}