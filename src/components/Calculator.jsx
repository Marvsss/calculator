import { useState } from 'react';
import './../Calculator.css';

export default function Calculator() {

    const [res, countRes] = useState("");

    const handleComputation = (e) => {
        countRes(res.concat(e.target.value));
    }

    const key = [{ key: '+' }, { key: '-' }, { key: '/' }, { key: '*' }, { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '0' }];
    const keyPads = key.map((acc) => {
        return <button className="keyButtons" onClick={handleComputation}  value={acc.key}>{acc.key}</button>
    })

    const handleCalculations = () => {
        try {

            countRes(eval(res).toString());
        } catch (err) {
            countRes("Error")
        }
    }

    const handleClear = () => {
        countRes("");
    }


    return (
        <div>
            <input className="screenPad" type="text" value={res} readOnly />
            <div className="keypads">
                {keyPads}
                <button className="keyButtons" onClick={handleCalculations}>=</button>
                <button className="keyButtons" onClick={handleClear}>C</button>
            </div>
        </div>
    )
}