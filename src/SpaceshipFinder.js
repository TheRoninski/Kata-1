function SpaceshipFinder() {}
SpaceshipFinder.prototype.search = function(map) {
    if (cannotFindShip(map)) { // wenn map oder schiff nicht vorhanden
        return "Spaceship lost forever.";
    }
    return;
};

function cannotFindShip(map){
    return !(map && map.includes('X'));
}