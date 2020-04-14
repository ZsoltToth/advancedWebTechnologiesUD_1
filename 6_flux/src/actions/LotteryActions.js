import dispatcher from '../LotteryDispatcher'

class LotteryActions {

    generateLotteryPicks(min, max, pickCnt){

        dispatcher.handleViewAction({
            actionType : 'GENERATE_LOTTERY_PICKS',
            payload : {
                min : min,
                max : max,
                pickCnt : pickCnt
            }
        });
    }
}

export default new LotteryActions();
