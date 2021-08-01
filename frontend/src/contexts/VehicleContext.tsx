import { createContext, ReactNode, useState } from 'react';

export interface Vehicle {
	id: string;
	vehicle: string;
	brand: string;
	year: number;
	sold: boolean;
	description: string;
}

interface VehicleProviderProps {
	children: ReactNode;
	staticVehicles?: Vehicle[];
}

interface VehicleContextData {
	vehicles: Vehicle[];
	selectedVehicle: string | null;
	selectVehicle: (vehicleId: string) => void;
}

export const VehicleContext = createContext({} as VehicleContextData);

export function VehicleProvider({
	children,
	staticVehicles = [],
}: VehicleProviderProps) {
	const [vehicles, setVehicles] = useState<Vehicle[]>(staticVehicles);
	const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(
		null
	);

	return (
		<VehicleContext.Provider
			value={{
				vehicles,
				selectedVehicle: selectedVehicleId,
				selectVehicle: setSelectedVehicleId,
			}}
		>
			{children}
		</VehicleContext.Provider>
	);
}
