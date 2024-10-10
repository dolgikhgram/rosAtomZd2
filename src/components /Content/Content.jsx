import React from "react";
import s from './Content.module.css';
import { Typography,Grid, TextField, Button } from "@mui/material";
import Link from '@mui/material/Link';
import Words from "../Words/Words";
import store from "./../../store/store"
import {observer} from "mobx-react-lite";
import { useState } from "react";


const Content = ()=>{
    // const [val, setVal] = useState('')
    const [result, setResult] = useState({})
    async function fetchData(val){
        const trimVal = val.trim().toLowerCase()
        if (trimVal.length > 0){
            const api = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${trimVal}`
            const response = await fetch(api)
            if (!response.ok){
                throw Error(response.statusText)
            }
        return await response.json()
        }
    }
    async function handleSearch(e){
        const {value} = store.value
        setResult({result: await fetchData(value)})
    }
    return (
        <div className={s.content}>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                    <Typography 
                    variant='h2'
                    align='center'
                    color='primary'
                    gutterBottom> 
                    WikiSearch
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                    <form>
                        <TextField 
                        multiline 
                        label='searche here' 
                        type="text" 
                        className={s.search}
                        onChange={(e)=>store.handleSearch(e)}
                        onKeyUp={handleSearch}
                        >
                        </TextField>
                        <div className={s.word}>
                            <Words result={result}/>
                        </div>
                    </form>
                </Grid>
                <Grid item>
                <Link href="https://en.wikipedia.org/wiki/Special:Random" underline="hover">
                    <Button size="medium">Random!</Button>
                </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default observer(Content)