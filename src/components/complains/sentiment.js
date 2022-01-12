import React from 'react';
import { PieChart } from 'react-chartkick'
import 'chart.js'

export const SentimentAnalysis = () => {
    return (
        <center>
            <PieChart colors={["#7CFC00", "#FF0000"]} data={[["Positive", 27], ["Negative", 73]]}/>
        </center>
    );
};
