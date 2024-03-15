import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../../../store/widgetsSlice';
import WidgetDataType, { RangeType } from '../../../types/WidgetDataType';

/**
 * The SummaryWidget widget.
 */
function SummaryWidget() {
	const widgets = useAppSelector(selectWidgets);
	const { data, ranges, currentRange: currentRangeDefault } = widgets.summary as WidgetDataType;

	const [currentRange, setCurrentRange] = useState<RangeType>(currentRangeDefault as RangeType);

	function handleChangeRange(event: SelectChangeEvent<string>) {
		setCurrentRange(event.target.value as RangeType);
	}

	return (
		<Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
			<Typography
				className="flex items-baseline justify-center w-full mt-20 mb-24"
				color="text.secondary"
			>
			</Typography>
			<div className="text-center mt-8">
				<Typography className="text-7xl sm:text-4xl font-bold tracking-tight leading-none text-blue-500">
					{data.count[currentRange]}+
				</Typography>
				<Typography className="text-lg font-medium text-blue-600 dark:text-blue-500">{data.name}</Typography>
			</div>
			<Typography
				className="flex items-baseline justify-center w-full mt-20 mb-24"
				color="text.secondary"
			>
			</Typography>
		</Paper>
	);
}

export default memo(SummaryWidget);
