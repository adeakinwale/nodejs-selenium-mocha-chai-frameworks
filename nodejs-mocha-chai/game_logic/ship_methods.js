//Passing in the player and coordinates
function checkForShip (player, coordinates) {
    //location of shipPresent not sure what ship is doing here?
    var shipPresent, ship;
    //Can we use a forEach loop here and how would it be implemented.
    //So for every ship we have
    for (var i = 0; i < player.ships.length; i++ ) {
        //Below I am lost!
        ship = player.ships[i];
        shipPresent = ship.locations.filter(function (actualCoordinate) {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);

        })[0];
        if(!shipPresent) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports.checkForShip = checkForShip;