import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectEmployee}>CHANGE IT !</button>
        </div>
    );
};

export  default  GenerateEmployee;