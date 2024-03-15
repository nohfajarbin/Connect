import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useAppSelector } from 'app/store';
import { selectWidgets } from '../../../store/widgetsSlice';
import WidgetDataType from '../../../types/WidgetDataType';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

/**
 * The OverdueWidget widget.
 */
function MostusedmodulesWidget() {
    const value = 3.5;
    const data = [{img: "assets/images/module_img/shoe.png", moduleName: "Open AI", value: 4, requestCnt:"6 million requests"},
                    {img: "assets/images/module_img/phone.png", moduleName: "Liama 3b", value: 3, requestCnt:"4 million requests"},
                ]

	return (
		<Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden">
			<div className="flex flex-col sm:flex-row items-start justify-between">
				<Typography className="text-lg font-medium tracking-tight leading-6 truncate">
					Most Used Modules
				</Typography>
				<IconButton
					aria-label="more"
					size="large"
				>
					<FuseSvgIcon>heroicons-outline:dots-horizontal</FuseSvgIcon>
				</IconButton>
			</div>
			<div className="flex flex-col flex-auto">
                {
                    data.map((item, key) => (
                        <div style={{display: "flex", marginBottom: "20px"}}>
                            <img
                                className="w-128"
                                src={item.img}
                                alt="shoe"
                            />
                            <div style={{marginLeft: "50px"}}>
                                <p style={{paddingBottom: "15px", fontSize: "15px"}}>{item.moduleName}</p>
                                <Box
                                sx={{
                                    width: 200,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                >
                                <Rating
                                    name="text-feedback"
                                    value={item.value}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                </Box>
                                <p style={{paddingTop: "15px", fontSize: "15px"}}>{item.requestCnt}</p>
                            </div>
                        </div>
                    ))
                }
			</div>
		</Paper>
	);
}

export default memo(MostusedmodulesWidget);
