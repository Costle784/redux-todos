import React from 'react';

export default function List(props) {
    const styles = {
        border: '1px solid black',
    };

    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                    {item.name}{' '}
                    <span onClick={() => props.remove(item)} style={styles}>
                        X
                    </span>
                </li>
            ))}
        </ul>
    );
}
