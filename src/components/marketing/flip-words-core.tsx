import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsCore() {
    const words = [
        "P - Protecting People, Environment and Equipment.", 
        "E - Enhancing Values.", 
        "O - Operational Excellence",
        "P - Procedural compliance",
        "L - Leadership",
        "E - Ethical Business Standards"];
   
    return (
     
        
        <FlipWords words={words} />     
      
     
    );
  }