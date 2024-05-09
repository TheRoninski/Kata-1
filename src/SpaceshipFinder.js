function SpaceshipFinder() {}
SpaceshipFinder.prototype.search = function(map) {
    if (cannotFindShip(map)) { // wenn map oder schiff nicht vorhanden
        return "Spaceship lost forever.";
    }
    return findShip(map);
};


function cannotFindShip(map){
    return !(map && map.includes('X'));
}

function findShip(map){
    let rowArray = map.split("\n");
    for (let index = 0; index < rowArray.length; index++) {
        const row = rowArray[index]; // row = ...
        if (row.includes('X')) { // schiff vorhanden
            let shipCoordinateX = row.indexOf("X");
            let shipCoordinateY = rowArray.length - index -1;

            return 'Spaceship found at these coordinates ['+shipCoordinateX+', '+ shipCoordinateY+']';
        }
    }
}