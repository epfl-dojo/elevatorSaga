{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            for (i=0; i<=4; i++){
                elevator.goToFloor(i);
            }
            
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
