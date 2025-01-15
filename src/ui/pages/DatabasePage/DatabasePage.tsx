import  React, {useState} from 'react';

export default function DatabasePage(){

    const [dataCount, setDataCount] = useState(0);

    function handleLoadDatabase(){
        setDataCount(2);
    }

    return (
        <div>
            {}
        </div>
    )

}