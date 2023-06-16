import React from "react";
import Atack from "./images/Atack.png"
import Defend from "./images/Defend.png"

export  default class Counter extends React.Component {

    constructor (props) {
        super(props)
        this.state= {Counter: 0}
        this.handleAtack = this.handleAtack.bind(this);
        this.handleDefend = this.handleDefend.bind(this);
        this.state={
            Counter:0,
            gameStatus: "",
            lastPlay: "",

        }

    }
    
    handleAtack = () =>{
        this.setState((previousState) => {
            let newCount = previousState.Counter + Math.round(Math.random () * 10);
            
            return {
            Counter: newCount,
            gameStatus:newCount >10? "You Win": previousState.gameStatus,
        }

        })
        
};

    handleDefend = () => {
        this.setState((previousState) => {
            let newCount = previousState.Counter - Math.round(Math.random () * 10);
            
            return {
            Counter: newCount,
            gameStatus:newCount <10? "You Lost":previousState.gameStatus,
        }

        })

};

    handerRandomPlay = () =>{
        let playMode= Math.round(Math.random())
        if (playMode == 0) {
            this.handleAtack();
        } else {
            this.handleDefend();
        }
    }

    handerReset =()=> {
        this.setState(() =>{
            return  {
                Counter: 0,
                gameStatus: "",
            }
        })
    }


    render() {
        return  (
        <div className="row text-white text-center">
            <h1>Game Score: {this.state.Counter} </h1>
            <p>You win at +20poins and lose at -20 points</p>
            <p>Last Play: </p>
            <h3>Game Status: {this.state.gameStatus}</h3>
            <p class="h6">Htr.studiuS</p>


            <div className="col-6 col-md-3 offset-md-3">
            <h1>Atack</h1>
            <img
            style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid green",
            }}


            className="p4 rounded" src={Atack} onClick={this.handleAtack}/>
        </div>  
        
        <div className="col-6 col-md-3 offset-md-3">
            <h1>Defend</h1>
            <img
            style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid red",
            }}
            className="p4 rounded" src={Defend} onClick={this.handleDefend}/>
        </div>      
            <div className="col-12 col-m4-4 offset-md-4"> 
            <br/> 
            <button type="button" class="btn btn-secondary" onClick={this.handerRandomPlay}> Randon Play </button>
            <button type="button" class="btn btn-danger" onClick={this.handerReset}> Reset </button>
        </div> 


            
            
        </div>
        
        )
    }

}