import { FormEvent, useMemo, useState, useEffect, ChangeEvent } from 'react';
import { FormControlLabel } from '@material-ui/core';
import { toast } from 'react-toastify';

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
	const [formErrors, setFormErrors] = useState({});
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
		if (!open) {
			setFormState(initialFormState);
			setFormErrors({});
		}

		if (open && editingVehicle) {
			setFormState({ ...editingVehicle });
		}
	}, [editingVehicle, open]);

	function handleCloseModal() {
		setInsertUpdateMode(null);
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const requiredFields = ['vehicle', 'brand', 'year', 'description'];

		const formErrors = requiredFields.reduce<{ [key: string]: boolean }>(
			(formErrors, field) => {
				if (!formState[field]) {
					formErrors[field] = true;
				}
				return formErrors;
			},
			{}
		);

		setFormErrors(formErrors);
		if (Object.values(formErrors).some((field) => field)) {
			return;
		}

		try {
			await saveVehicle({
				id: editingVehicle?.id,
				...formState,
			});
			toast.success('Veículo salvo com sucesso', {
				position: 'top-right',
				autoClose: 5000,
				closeOnClick: true,
				pauseOnHover: true,
			});
			handleCloseModal();
		} catch (err) {
			toast.error(err.message, {
				position: 'top-right',
				autoClose: 5000,
				closeOnClick: true,
				pauseOnHover: true,
			});
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

		handleTouch(event.target.name);
		setFormState((formState) => ({
			...formState,
			[event.target.name]: event.target[property],
		}));
	}

	function handleTouch(target: string) {
		setFormErrors((formErrors) => ({
			...formErrors,
			[target]: false,
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
							error={formErrors['vehicle']}
							onFocus={() => handleTouch('vehicle')}
							onClick={() => handleTouch('vehicle')}
						/>
						<TextField
							id="brand"
							name="brand"
							label="Marca"
							type="text"
							value={formState.brand}
							onChange={handleInputChange}
							error={formErrors['brand']}
							onFocus={() => handleTouch('brand')}
							onClick={() => handleTouch('brand')}
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
							error={formErrors['year']}
							onFocus={() => handleTouch('year')}
							onClick={() => handleTouch('year')}
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
						error={formErrors['description']}
						onFocus={() => handleTouch('description')}
						onClick={() => handleTouch('description')}
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
