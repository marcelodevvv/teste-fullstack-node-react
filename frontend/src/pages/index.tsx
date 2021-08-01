import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { VehiclesList } from '../components/VehiclesList';
import { VehiclesDetails } from '../components/VehiclesDetails';

import { Container } from '../styles/pages/Home';

export default function Home() {
	return (
		<Container>
			<Header />
			<main>
				<PageTitle title="Veículo" />
				<div>
					<VehiclesList />
					<VehiclesDetails />
				</div>
			</main>
		</Container>
	);
}
