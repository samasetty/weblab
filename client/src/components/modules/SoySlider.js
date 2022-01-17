import React, { useState, useEffect } from "react";
import "./Slider.css";

const SoySlider = () => {
    const inputFunc = () => {
        let value = document.getElementById("soyInput").value;
        let te = document.getElementById("soyText");
        if (value < 10) {
            te.textContent = "0 servings";
        } else if (value < 100) {
            te.textContent = "1 serving";
        } else if (value < 200) {
            te.textContent = "2 servings";
        } else {
            te.textContent = "3 servings";
        }
    };

    return (
        <>
        <div class="range">
    <div class="field">
        <div class="value left">
            0</div>
        <input id="soyInput" type="range" min="0" max="200" steps="1" onChange={inputFunc}/>
        <div class="value right">
            3</div>
    </div>
</div>
<br />

<span className="test" id="soyText">1 serving</span>

</>
    );
}

export default SoySlider;