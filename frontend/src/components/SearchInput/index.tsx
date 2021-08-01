import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';

import { useVehicle } from '../../hooks/useVehicle';
import { StyledInput } from './styles';

export function SearchInput() {
	const [value, setValue] = useState('');
	const { searchVehicles } = useVehicle();

	const debouncedSearch = useMemo(
		() => debounce(searchVehicles, 300, { maxWait: 1500 }),
		[searchVehicles]
	);

	useEffect(() => {
		try {
			debouncedSearch(value);
		} catch (err) {
			toast.error(err.message);
		}
	}, [debouncedSearch, value]);

	return (
		<StyledInput
			placeholder="BUSCA por um veículo"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}
