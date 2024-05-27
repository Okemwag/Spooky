// function to calculate the emissions of a user based on their inputs

interface EmissionData {
    // user inputs
    distance: number;
    distanceUnit: string;
    vehicleType: string;
    fuelType: string;
    fuelEfficiency: number;
    fuelEfficiencyUnit: string;
    }





export function calculateEmissions(data: EmissionData): number {
    // emission factors in kg CO2 per unit
    const emissionFactors = {
        gasoline: 2.31,
        diesel: 2.68,
        electric: 0.0,
        hybrid: 1.46,
    };
    // convert distance to km
    let distanceInKm = data.distance;
    if (data.distanceUnit === 'miles') {
        distanceInKm = data.distance * 1.60934;
    }
    // convert fuel efficiency to L/100km
    let fuelEfficiencyInLPer100Km = data.fuelEfficiency;
    if (data.fuelEfficiencyUnit === 'mpg') {
        fuelEfficiencyInLPer100Km = 235.215 / data.fuelEfficiency;
    }
    // calculate emissions
    const fuelConsumed = distanceInKm / 100 * fuelEfficiencyInLPer100Km;
    const emissions = fuelConsumed * emissionFactors[data.fuelType];
    return emissions;
    }
