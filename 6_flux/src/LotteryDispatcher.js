import {Dispatcher} from 'flux'
import ReactDOM from "react-dom";
import LotteryPicks from "./components/LotteryPicks";
import React from "react";

class LotteryDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            actionType : 'VIEW_ACTION',
            action : action
        })
    }
}

const dispatcher = new LotteryDispatcher();

dispatcher.register((payload)=>{
    if(payload.action.actionType !== 'GENERATE_LOTTERY_PICKS'){
        return;
    }
    const min = payload.action.payload.min;
    const max = payload.action.payload.max;
    const pickCnt = payload.action.payload.pickCnt;
    let picks = [];
    for(let i = 0; i < pickCnt; i++){
        let currentPick = Math.round(
            Math.random() *
            (max - min)
        ) + min;
        if(picks.includes(currentPick)){
            i--;
        }
        else{
            picks.push(currentPick);
        }
    }
    ReactDOM.render(
        <LotteryPicks picks={picks}/>,
        document.getElementById('picks')
    );
});

export default dispatcher;
