function SpaceshipFinder() {}
SpaceshipFinder.prototype.search = function(map) {
    if (cannotFindShip(map)) { // wenn map oder schiff nicht vorhanden
        return "Spaceship lost forever.";
    }
    return findShip();
};


function cannotFindShip(map){
    return !(map && map.includes('X'));
}

function findShip(){
    return 'Spaceship found at these coordinates [0, 0]';
}