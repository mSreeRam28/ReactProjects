import React, { Component } from 'react';

export const players = [{name:"Jack", score:50},{name:"Michael", score:70},
                    {name:"John", score:40},{name:"Ann", score:61},
                    {name:"Elisabeth", score:61},{name:"Sachin", score:95},
                    {name:"Dhoni", score:100},{name:"Virat", score:84},
                    {name:"Jadeja", score:64},{name:"Raina", score:75},
                    {name:"Rohit", score:80},];

export function ListofPlayers(props){
    return(
        props.players.map((player) => {
            return(
                <div>
                    <li>Mr. {player.name} <span>{player.score}</span></li>
                </div>
            )
        })
    );
}

export function Scorebelow70(props){
    return(
        props.players.filter((player) => player.score <= 70)
            .map((player) => {
                return(
                    <div>
                        <li>Mr. {player.name} <span>{player.score}</span></li>
                    </div>
                )
            })
    );
}