import { FormEvent, useState } from 'react';
import { FormControlLabel } from '@material-ui/core';

import { Modal, Content, Switch, TextField, ControlGroup } from './styles';
import { Button } from '../Button';

export function ModalVehicleIU() {
	const [open, setOpen] = useState(true);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Content>
				<h1>Novo Veículo</h1>

				<form>
					<ControlGroup>
						<TextField id="vehicle" label="Veículo" type="text" />
						<TextField id="brand" label="Marca" type="text" />
					</ControlGroup>

					<ControlGroup>
						<TextField id="year" label="Ano" type="number" />
						<FormControlLabel control={<Switch name="sold" />} label="Vendido" />
					</ControlGroup>

					<TextField id="description" label="Descrição" multiline rows="6" />

					<footer>
						<Button type="submit" onClick={handleSubmit}>
							ADICIONAR
						</Button>
						<Button type="button" onClick={() => setOpen(false)}>
							FECHAR
						</Button>
					</footer>
				</form>
			</Content>
		</Modal>
	);
}
