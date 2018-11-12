import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <ul>
                <li>Quote : {employee.quote}</li>
                <li>
                    Name : {employee.character} 
                </li>
                <li>
                    Image : <img  src={employee.image}  alt="picture"  />,
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;