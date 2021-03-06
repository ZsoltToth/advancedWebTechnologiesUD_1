import React from 'react'
import LotteryActions from "../actions/LotteryActions";

class LotteryGeneratorForm extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            min : 1,
            max : 90,
            pickCnt : 5
        }
    }

    render(){
        return (
            <table>
                <tbody>
                <tr>
                    <td>Min</td>
                    <td>
                        <input
                            type={"number"}
                            value={this.state.min}
                            onChange={(e)=>{
                                let st = this.state;
                                st.min = Math.round(e.target.value);
                                this.setState(st);
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Max</td>
                    <td>
                        <input
                            type={"number"}
                            value={this.state.max}
                            onChange={(e)=>{
                                let st = this.state;
                                st.max = Math.round(e.target.value);
                                this.setState(st);
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Pick Count</td>
                    <td>
                        <input
                            type={"number"}
                            value={this.state.pickCnt}
                            onChange={(e)=>{
                                let st = this.state;
                                st.pickCnt = Math.round(e.target.value);
                                this.setState(st);
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button onClick={()=>{
                            LotteryActions.generateLotteryPicks(
                                this.state.min,
                                this.state.max,
                                this.state.pickCnt
                            );
                        }}
                        >Generate</button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default LotteryGeneratorForm;
