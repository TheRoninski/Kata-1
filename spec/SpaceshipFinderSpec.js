describe('SpaceshipFinder', function() {
	beforeEach(function() {
		findSpaceship = new SpaceshipFinder();
	});

	it('should return "Spaceship lost forever." for an empty map', function() {
		expect(findSpaceship.search('')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." for null input', function() {
		expect(findSpaceship.search('....')).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship found at these coordinates [0, 0]" for input', function() {
		expect(findSpaceship.search('...\nX..')).toEqual("Spaceship found at these coordinates [0, 0]");
	});
});