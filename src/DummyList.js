import React, { useDeferredValue } from 'react';

const DummyList = ({ dummy }) => {
    const deferredData = useDeferredValue(dummy);
    return (
        <div>
            {deferredData.map((data) => (
                <p>{`deferred data : ${data}`}</p>
            ))}
        </div>
    );
};

export default DummyList;
