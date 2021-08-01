import { useContext } from 'react';

import { VehicleContext } from '../contexts/VehicleContext';

export function useVehicle() {
	const data = useContext(VehicleContext);
	return data;
}
