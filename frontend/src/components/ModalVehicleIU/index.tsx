import { FormEvent, useMemo, useState, useEffect, ChangeEvent } from 'react';
import { FormControlLabel } from '@material-ui/core';

import { Button } from '../Button';
import { useVehicle } from '../../hooks/useVehicle';

import { Modal, Content, Switch, TextField, ControlGroup } from './styles';

const initialFormState = {
	vehicle: '',
	brand: '',
	year: 0,
	description: '',
	sold: false,
};

export function ModalVehicleIU() {
	const [formState, setFormState] = useState(initialFormState);
	const { IUMode, setInsertUpdateMode, selectedVehicle, vehicles, saveVehicle } =
		useVehicle();

	const { open, editingVehicle } = useMemo(() => {
		const open = IUMode === 'insert' || IUMode === 'update';

		const editingVehicle =
			IUMode === 'update'
				? vehicles.find((vehicle) => vehicle.id === selectedVehicle)
				: null;

		return {
			open,
			editingVehicle,
		};
	}, [IUMode, selectedVehicle, vehicles]);

	useEffect(() => {
		if (editingVehicle) {
			setFormState({ ...editingVehicle });
		} else {
			setFormState(initialFormState);
		}
	}, [editingVehicle]);

	function handleCloseModal() {
		setInsertUpdateMode(null);
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		try {
			await saveVehicle({
				id: editingVehicle?.id,
				...formState,
			});
			handleCloseModal();
		} catch (err) {
			console.error(err);
		}
	}

	function handleInputChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		checked?: boolean
	) {
		let property: string;

		if (typeof checked === 'boolean') {
			property = 'checked';
		} else {
			property = 'value';
		}

		setFormState((formState) => ({
			...formState,
			[event.target.name]: event.target[property],
		}));
	}

	return (
		<Modal open={open} onClose={handleCloseModal}>
			<Content>
				<h1>{editingVehicle?.vehicle || 'Novo Veículo'}</h1>

				<form onSubmit={handleSubmit}>
					<ControlGroup>
						<TextField
							id="vehicle"
							name="vehicle"
							label="Veículo"
							type="text"
							value={formState.vehicle}
							onChange={handleInputChange}
						/>
						<TextField
							id="brand"
							name="brand"
							label="Marca"
							type="text"
							value={formState.brand}
							onChange={handleInputChange}
						/>
					</ControlGroup>

					<ControlGroup>
						<TextField
							id="year"
							name="year"
							label="Ano"
							type="number"
							value={formState.year}
							onChange={handleInputChange}
						/>
						<FormControlLabel
							control={
								<Switch
									id="sold"
									name="sold"
									checked={formState.sold}
									onChange={handleInputChange}
								/>
							}
							label="Vendido"
						/>
					</ControlGroup>

					<TextField
						id="description"
						name="description"
						label="Descrição"
						multiline
						rows="6"
						value={formState.description}
						onChange={handleInputChange}
					/>

					<footer>
						<Button type="submit">ADICIONAR</Button>
						<Button type="button" onClick={handleCloseModal}>
							FECHAR
						</Button>
					</footer>
				</form>
			</Content>
		</Modal>
	);
}
