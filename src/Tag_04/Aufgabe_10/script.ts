

const schoolGrade = Math.floor(Math.random() * 10) + 1;

switch(schoolGrade){
    case 1:
        console.log("Note: 1 sehr gut");
        break;
    case 2:
        console.log("Note: 2 gut");
        break;
    case 3:
        console.log("Note: 3 befriedigend");
        break;
    case 4:
        console.log("Note: 4 ausreichend");
        break;
    case 5:
        console.log("Note: 5 mangelhaft");
        break;
    case 6:
        console.log("Note: 6 ungenügend");
        break;
    default:
        console.log("Das ist keine gültige Schulnote");
}

