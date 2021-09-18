import React from 'react';

function Device(data){
    console.log(JSON.stringify(data));
    const { mydevice} = data;
    return <div>your {mydevice} </div>;
}

export default Device;