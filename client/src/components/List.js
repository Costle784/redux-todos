import React from 'react';
import todos from '../reducers/todos';

export default function List(props) {
    const styles = {
        border: '1px solid black',
    };

    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>
                    <span
                        onClick={() => props.toggle(item)}
                        style={{
                            background: item.complete ? 'orange' : 'none',
                        }}
                    >
                        {item.name}
                    </span>
                    <span onClick={() => props.remove(item)} style={styles}>
                        X
                    </span>
                </li>
            ))}
        </ul>
    );
}
