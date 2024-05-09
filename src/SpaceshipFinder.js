function SpaceshipFinder() {}
SpaceshipFinder.prototype.search = function(map) {
    if (!(map && map.includes('X'))) { // wenn map oder schiff nicht vorhanden
        return "Spaceship lost forever.";
    }
    return;
};