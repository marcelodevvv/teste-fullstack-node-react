import { createContext, ReactNode, useState, useCallback } from 'react';
import { PartialBy } from '../utils/utility-types';
import { api } from '../services/api';

export interface Vehicle {
	id: string;
	vehicle: string;
	brand: string;
	year: number;
	sold: boolean;
	description: string;
}

type SaveVehicleParams = PartialBy<Vehicle, 'id'>;

type InsertUpdateMode = 'insert' | 'update' | undefined;

interface VehicleProviderProps {
	children: ReactNode;
	staticVehicles?: Vehicle[];
}

interface VehicleContextData {
	vehicles: Vehicle[];
	selectedVehicle: string | null;
	selectVehicle: (vehicleId: string) => void;
	IUMode: InsertUpdateMode;
	setInsertUpdateMode: (IUMode: InsertUpdateMode) => void;
	addVehicle: () => void;
	editVehicle: (vehicleId: string) => void;
	saveVehicle: (vehicle: SaveVehicleParams) => Promise<void>;
	searchVehicles: (query: string) => Promise<void>;
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
	const [insertUpdateMode, setInsertUpdateMode] =
		useState<InsertUpdateMode>(null);

	const handleAddVehicle = useCallback(() => {
		setInsertUpdateMode('insert');
	}, []);

	const handleEditVehicle = useCallback((vehicleId: string) => {
		setSelectedVehicleId(vehicleId);
		setInsertUpdateMode('update');
	}, []);

	const handleSaveVehicle = useCallback(async (vehicle: SaveVehicleParams) => {
		if (vehicle.id) {
			const response = await api.put(`veiculos/${vehicle.id}`, vehicle);

			if (response.status === 200) {
				setVehicles((oldVehicles) =>
					oldVehicles.map((oldVehicle) =>
						oldVehicle.id === vehicle.id ? response.data.vehicle : oldVehicle
					)
				);
			} else {
				console.error(response.status, response.data);
				throw new Error('Falha ao salvar veículo');
			}
		} else {
			const response = await api.post('veiculos', vehicle);

			if (response.status === 200) {
				setVehicles((oldVehicles) => [response.data.vehicle, ...oldVehicles]);
			} else {
				console.error(response.status, response.data);
				throw new Error('Falha ao adicionar veículo');
			}
		}
	}, []);

	const handleSearchVehicles = useCallback(async (query: string) => {
		try {
			let vehicles: Vehicle[];

			if (!query) {
				const response = await api.get('veiculos');
				vehicles = response.data.vehicles;
			} else {
				const response = await api.get('veiculos/find', {
					params: {
						query,
					},
				});
				vehicles = response.data.vehicles;
			}

			setVehicles(vehicles);
		} catch (err) {
			console.error(err);
			throw new Error('Falha ao buscar veículos');
		}
	}, []);

	return (
		<VehicleContext.Provider
			value={{
				vehicles,
				selectedVehicle: selectedVehicleId,
				selectVehicle: setSelectedVehicleId,
				IUMode: insertUpdateMode,
				setInsertUpdateMode,
				addVehicle: handleAddVehicle,
				editVehicle: handleEditVehicle,
				saveVehicle: handleSaveVehicle,
				searchVehicles: handleSearchVehicles,
			}}
		>
			{children}
		</VehicleContext.Provider>
	);
}
