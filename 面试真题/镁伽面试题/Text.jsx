// 说顺序

import { useRef, useEffect, useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0);

    const dom = useRef(null);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            console.log(1);
        });
        document.body.addEventListener(
            'click',
            () => {
                console.log(2);
            },
            true
        );

        if (dom.current) {
            dom.current.addEventListener('click', () => {
                console.log(3);
            });
            dom.current.addEventListener(
                'click',
                () => {
                    console.log(4);
                },
                true
            );
        }
    }, []);

    const onOK = async () => {
        console.log(5);

        setCount(count + 1);
        console.log(count);
        setCount(count + 1);
        console.log(count);
        setTimeout(() => {
            setCount(count + 1);
            console.log(count);
            setCount(count + 1);
            console.log(count);
        }, 1000);
    };

    console.log(count);

    return (
        <div ref={dom} onClick={onOK}>
            按钮
        </div>
    );
};

export default Test;
