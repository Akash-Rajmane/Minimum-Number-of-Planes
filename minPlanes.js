
function minPlanes(fuelArr){
    let n = fuelArr.length;

    // The number of planes if n=1 & first element is not equal to 0 
    if (n === 1 & fuelArr[0]!==0){
        return 1;
    }
 
    // Return -1 if fuel in first plane is 0
    if (fuelArr[0] == 0)
        return -1;

    //maxDistance that can be travelled.
    let maxDistance = fuelArr[0];

    // stores the number of steps we can still take
    let step = fuelArr[0];

    // stores the number of planes necessary to reach the end of array.
    let planes = 1;


    // Start traversing fuelArray
    let i = 1;
    for (i = 1; i < n; i++) {
        // Check if we have reached the end of the Array
        if (i === n - 1){
            return planes;
        }

        // updating maxDistance
        maxDistance = Math.max(maxDistance, i + fuelArr[i]);

        // we use a step to get to the current index
        step--;

        // If no further steps left
        if (step === 0) {
            // we must have used a planes
            planes++;

            // Check if the current index/position or lesser index
            // is the maximum reach point from the previous indexes
            if (i >= maxDistance)
                return -1;

            // re-initialize the steps to the amount
            // of steps to reach maxDistance from position i.
            step = maxDistance - i;
        }

    }

    return -1;
}


 let ans = minPlanes([1,2,3,4]);
 console.log(ans);