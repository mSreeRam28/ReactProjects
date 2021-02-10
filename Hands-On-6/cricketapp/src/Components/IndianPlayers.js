import React, { Component } from 'react';

export function OddPlayers([first,,third,,fifth]){
    return(
        <div>
            <li>First: {first}1</li>
            <li>Third: {third}3</li>
            <li>Fifth: {fifth}5</li>
        </div>
    );
}

export function EvenPlayers([,second,,fourth,,sixth]){
    return(
        <div>
            <li>Second: {second}2</li>
            <li>Fourth: {fourth}4</li>
            <li>Sixth: {sixth}6</li>
        </div>
    );
}

const T20Players = ['First Player','Second Player','Third Player'];
const RanjiTrophyPlayers = ['Fourth Player','Fifth Player','Sixth Player'];
export const IndianPlayers = [...T20Players,...RanjiTrophyPlayers];