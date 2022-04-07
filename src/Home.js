import React, { useState, useEffect, useTransition } from 'react';
import DummyList from './DummyList';

const dummy = Array.from({ length: 50000 }, (v, i) => i);

export default function Home() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(dummy);
    const [isPending, startTransition] = useTransition({ timeoutMs: 3000 });

    const handleInput = (e) => {
        setInput(Number(e.nativeEvent.data));
    };

    const filterByDivisor = (divisor) => {
        return dummy.filter((number) => number % divisor === 0);
    };

    useEffect(() => {
        // startTransition(() => {
        setData(filterByDivisor(input));
        // });
    }, [input]);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <input value={input} onChange={handleInput} />
            {isPending && <h2>로딩중</h2>}
            {data.map((d) => (
                <p>{`data : ${d}`}</p>
            ))}
            {/* <DummyList dummy={data} /> */}
        </div>
    );
}
