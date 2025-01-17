// - Erweitere das Enum um den Wert Delete = 8
// - Läuft dein Code direkt ohne weitere Anpassung


// - Erstelle ein Enum Permissions für die Verwaltung von Zugriffsrechten
// None = 0, Read = 1, Write = 2, Execute = 4,
enum Permissions {
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4,
    Delete = 8,
}   

// - Hat ein User eine höhere Berechtigung, schließt das die darunterliegenden mit ein
// (Berechtigung Execute schließt das Read und Write mit ein…)



// - Schreibe dort eine Funktion, die als Parameter einen Enum-Wert für Permissions übergeben bekommt und auf der Konsole ausgibt, welche Berechtigungen eingeschlossen sind
const printPermissions = (permission: Permissions) => {
    
    let permissionsString = "";
    if (permission & Permissions.Read) {
        permissionsString += "Read, ";
    }
    if (permission & Permissions.Write) {
        permissionsString += "Write, ";
    }
    if (permission & Permissions.Execute) {
        permissionsString += "Execute, ";
    }
    if (permission & Permissions.Delete) {
        permissionsString += "Delete, ";
    }
    console.log(`The user has the following permissions: ${permissionsString}`);
}


// - Rufe die Funktion mit allen möglichen Werten für das Enum auf
printPermissions(Permissions.None);
printPermissions(Permissions.Read);
printPermissions(Permissions.Write);
printPermissions(Permissions.Execute);
printPermissions(Permissions.Delete);