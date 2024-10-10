import React from "react";
import { Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';



const Words = (props)=>{
    return (
        <div>
            <Box 
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) ~ :not(style)': {
                ml: 2,
                },}}>
                <List
                sx={{ width: '100%', maxWidth: 360}}>
                {props.result.result && props.result.result.query.search.map(data => 
                <ListItem>
                <Link
                href={`https://en.wikipedia.org/wiki/${data.title}`} underline="none"
                >
                <Typography variant="h5" color='inherit' gutterBottom>
                    {data.title}
                </Typography>
                </Link>
                </ListItem>)}
                </List>
            </Box>
        </div>
    )
}

export default Words