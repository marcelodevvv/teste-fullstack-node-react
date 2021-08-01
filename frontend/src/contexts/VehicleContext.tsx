import { createContext, ReactNode, useState } from 'react';

interface Vehicle {
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
}

export const VehicleContext = createContext({} as VehicleContextData);

export function VehicleProvider({
	children,
	staticVehicles = [],
}: VehicleProviderProps) {
	const [vehicles, setVehicles] = useState<Vehicle[]>(staticVehicles);

	return (
		<VehicleContext.Provider
			value={{
				vehicles,
			}}
		>
			{children}
		</VehicleContext.Provider>
	);
}
