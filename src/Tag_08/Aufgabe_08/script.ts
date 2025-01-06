const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
console.log(album);


const deletJpg = (el: string) => {
    if (el.includes(".jpg")) {
        return el.slice(0, el.length - 4).toLowerCase() 
    }else{
        return el.toLowerCase()
    }
            
}

// - Prüfe, ob ".jpg" enthalten ist und entfernt es
// const deletJpg = (el: string) => {
//     return el.includes(".jpg") 
//     ? el.slice(0, el.length - 4).toLowerCase() 
//     : el.toLowerCase()
// }


const albumMap = [...album].map(deletJpg);
console.log(albumMap);



