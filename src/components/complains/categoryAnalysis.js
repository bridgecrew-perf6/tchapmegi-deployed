import React from 'react';
import { PieChart } from 'react-chartkick'
import 'chart.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ListError } from '../error';

export const CategoryAnalysisChart = ({state}) => {
    return (
        <center>
            <PieChart data={state.analysis}/>
        </center>
    );
};

export const CategoryAnalysis = ({state}) => {
    return (
        (state.loading ? <LinearProgress/> :(state.error !== null ? <ListError error={state.error}/> : <CategoryAnalysisChart state={state}/>))
    );
};


