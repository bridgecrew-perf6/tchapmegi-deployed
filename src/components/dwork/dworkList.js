import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ListError } from '../error';
import isWithinInterval from 'date-fns/isWithinInterval';
import addHours from 'date-fns/addHours';
import format from 'date-fns/format';
import isSameMinute from 'date-fns/isSameMinute';

const getClass = (target, durations) => {
    let value = false;
    for(var i = 0; i < durations.length;i++) {
        if(value === true) {
            break;
        }
        else if(isSameMinute(new Date(target), new Date(durations[i].start_time))) {
            value = true;
        }
        else if(isSameMinute(new Date(target), addHours(new Date(durations[i].start_time), durations[i].duration))) {
            value = true;
        }
        else {
            value = isWithinInterval(new Date(target),{
                start: new Date(durations[i].start_time),
                end: addHours(new Date(durations[i].start_time), durations[i].duration)
            })
        }
    }
    if(value === true) {
        return "mm present"
    }
    else {
        return "mm"
    }
};

export const Ruler = ({ durations }) => {
    let date = format(new Date(), 'yyyy-MM-dd');
    return (
        <div className='ruler'>
             <div className='cm'>
             <div className={getClass(`${date}T00:00`, durations)}></div>
             <div className={getClass(`${date}T00:12`, durations)}></div>
             <div className={getClass(`${date}T00:24`, durations)}></div>
             <div className={getClass(`${date}T00:36`, durations)}></div>
             <div className={getClass(`${date}T00:48`, durations)}></div>
             <div className={getClass(`${date}T01:00`, durations)}></div>
             <div className={getClass(`${date}T01:12`, durations)}></div>
             <div className={getClass(`${date}T01:24`, durations)}></div>
             <div className={getClass(`${date}T01:36`, durations)}></div>
             <div className={getClass(`${date}T01:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T02:00`, durations)}></div>
             <div className={getClass(`${date}T02:12`, durations)}></div>
             <div className={getClass(`${date}T02:24`, durations)}></div>
             <div className={getClass(`${date}T02:36`, durations)}></div>
             <div className={getClass(`${date}T02:48`, durations)}></div>
             <div className={getClass(`${date}T03:00`, durations)}></div>
             <div className={getClass(`${date}T03:12`, durations)}></div>
             <div className={getClass(`${date}T03:24`, durations)}></div>
             <div className={getClass(`${date}T03:36`, durations)}></div>
             <div className={getClass(`${date}T03:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T04:00`, durations)}></div>
             <div className={getClass(`${date}T04:12`, durations)}></div>
             <div className={getClass(`${date}T04:24`, durations)}></div>
             <div className={getClass(`${date}T04:36`, durations)}></div>
             <div className={getClass(`${date}T04:48`, durations)}></div>
             <div className={getClass(`${date}T05:00`, durations)}></div>
             <div className={getClass(`${date}T05:12`, durations)}></div>
             <div className={getClass(`${date}T05:24`, durations)}></div>
             <div className={getClass(`${date}T05:36`, durations)}></div>
             <div className={getClass(`${date}T05:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T06:00`, durations)}></div>
             <div className={getClass(`${date}T06:12`, durations)}></div>
             <div className={getClass(`${date}T06:24`, durations)}></div>
             <div className={getClass(`${date}T06:36`, durations)}></div>
             <div className={getClass(`${date}T06:48`, durations)}></div>
             <div className={getClass(`${date}T07:00`, durations)}></div>
             <div className={getClass(`${date}T07:12`, durations)}></div>
             <div className={getClass(`${date}T07:24`, durations)}></div>
             <div className={getClass(`${date}T07:36`, durations)}></div>
             <div className={getClass(`${date}T07:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T08:00`, durations)}></div>
             <div className={getClass(`${date}T08:12`, durations)}></div>
             <div className={getClass(`${date}T08:24`, durations)}></div>
             <div className={getClass(`${date}T08:36`, durations)}></div>
             <div className={getClass(`${date}T08:48`, durations)}></div>
             <div className={getClass(`${date}T09:00`, durations)}></div>
             <div className={getClass(`${date}T09:12`, durations)}></div>
             <div className={getClass(`${date}T09:24`, durations)}></div>
             <div className={getClass(`${date}T09:36`, durations)}></div>
             <div className={getClass(`${date}T09:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T10:00`, durations)}></div>
             <div className={getClass(`${date}T10:12`, durations)}></div>
             <div className={getClass(`${date}T10:24`, durations)}></div>
             <div className={getClass(`${date}T10:36`, durations)}></div>
             <div className={getClass(`${date}T10:48`, durations)}></div>
             <div className={getClass(`${date}T11:00`, durations)}></div>
             <div className={getClass(`${date}T11:12`, durations)}></div>
             <div className={getClass(`${date}T11:24`, durations)}></div>
             <div className={getClass(`${date}T11:36`, durations)}></div>
             <div className={getClass(`${date}T11:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T12:00`, durations)}></div>
             <div className={getClass(`${date}T12:12`, durations)}></div>
             <div className={getClass(`${date}T12:24`, durations)}></div>
             <div className={getClass(`${date}T12:36`, durations)}></div>
             <div className={getClass(`${date}T12:48`, durations)}></div>
             <div className={getClass(`${date}T13:00`, durations)}></div>
             <div className={getClass(`${date}T13:12`, durations)}></div>
             <div className={getClass(`${date}T13:24`, durations)}></div>
             <div className={getClass(`${date}T13:36`, durations)}></div>
             <div className={getClass(`${date}T13:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T14:00`, durations)}></div>
             <div className={getClass(`${date}T14:12`, durations)}></div>
             <div className={getClass(`${date}T14:24`, durations)}></div>
             <div className={getClass(`${date}T14:36`, durations)}></div>
             <div className={getClass(`${date}T14:48`, durations)}></div>
             <div className={getClass(`${date}T15:00`, durations)}></div>
             <div className={getClass(`${date}T15:12`, durations)}></div>
             <div className={getClass(`${date}T15:24`, durations)}></div>
             <div className={getClass(`${date}T15:36`, durations)}></div>
             <div className={getClass(`${date}T15:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T16:00`, durations)}></div>
             <div className={getClass(`${date}T16:12`, durations)}></div>
             <div className={getClass(`${date}T16:24`, durations)}></div>
             <div className={getClass(`${date}T16:36`, durations)}></div>
             <div className={getClass(`${date}T16:48`, durations)}></div>
             <div className={getClass(`${date}T17:00`, durations)}></div>
             <div className={getClass(`${date}T17:12`, durations)}></div>
             <div className={getClass(`${date}T17:24`, durations)}></div>
             <div className={getClass(`${date}T17:36`, durations)}></div>
             <div className={getClass(`${date}T17:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T18:00`, durations)}></div>
             <div className={getClass(`${date}T18:12`, durations)}></div>
             <div className={getClass(`${date}T18:24`, durations)}></div>
             <div className={getClass(`${date}T18:36`, durations)}></div>
             <div className={getClass(`${date}T18:48`, durations)}></div>
             <div className={getClass(`${date}T19:00`, durations)}></div>
             <div className={getClass(`${date}T19:12`, durations)}></div>
             <div className={getClass(`${date}T19:24`, durations)}></div>
             <div className={getClass(`${date}T19:36`, durations)}></div>
             <div className={getClass(`${date}T19:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T20:00`, durations)}></div>
             <div className={getClass(`${date}T20:12`, durations)}></div>
             <div className={getClass(`${date}T20:24`, durations)}></div>
             <div className={getClass(`${date}T20:36`, durations)}></div>
             <div className={getClass(`${date}T20:48`, durations)}></div>
             <div className={getClass(`${date}T21:00`, durations)}></div>
             <div className={getClass(`${date}T21:12`, durations)}></div>
             <div className={getClass(`${date}T21:24`, durations)}></div>
             <div className={getClass(`${date}T21:36`, durations)}></div>
             <div className={getClass(`${date}T21:48`, durations)}></div>
             </div>
             <div className='cm'>
             <div className={getClass(`${date}T22:00`, durations)}></div>
             <div className={getClass(`${date}T22:12`, durations)}></div>
             <div className={getClass(`${date}T22:24`, durations)}></div>
             <div className={getClass(`${date}T22:36`, durations)}></div>
             <div className={getClass(`${date}T22:48`, durations)}></div>
             <div className={getClass(`${date}T23:00`, durations)}></div>
             <div className={getClass(`${date}T23:12`, durations)}></div>
             <div className={getClass(`${date}T23:24`, durations)}></div>
             <div className={getClass(`${date}T23:36`, durations)}></div>
             <div className={getClass(`${date}T23:48`, durations)}></div>
             </div>
             <div className='cm'></div>
        </div>
    )
};

export const DWorkTable = ({ state }) => {
    return (
        <Table>
            <TableHead>
              <TableRow>
                <TableCell align='left' width="20%">Employee</TableCell>
                <TableCell align='left' width="10%">Duration</TableCell>
                <TableCell width="70%">Timings (00 Hours to 24 Hours)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {state.map((t) => {
                    return (
                        <TableRow key={t.id}>
                            <TableCell>{t.name}</TableCell>
                            <TableCell>{t.duration} hrs</TableCell>
                            <TableCell><Ruler durations={t.wos}/></TableCell>
                        </TableRow>
                    )
                })}   
            </TableBody>
      </Table>
    );
};

export const DWorkList = ({ state, load1, load2 }) => {
    return (
        ((load1 || load2) ? <LinearProgress/> : <DWorkTable state={state}/>)
    );
};


