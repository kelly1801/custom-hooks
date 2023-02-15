import { useState } from "react";

interface Counter {
    counter: number;
    increment: ( value?: number) => void;
    reset:  () => void;
    decrement: ( value?: number) => void;   
}

export const useCounter = (init: number = 10): Counter => {
  const [counter, setCounter] = useState(init)
 
  const increment = (value :number = 1):void => setCounter(prev => prev + value)
  const reset =  ():void => setCounter(init)
  const decrement = (value :number = 1):void => setCounter(prev => Math.max(0 , prev - value))
  

    return {
        counter,
        increment,
        reset,
        decrement
    };

};
