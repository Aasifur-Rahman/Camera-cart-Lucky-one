import React from 'react';

const Questions = () => {
    return (
        <div>
            <h3 className='ms-5'>How React works?</h3>
            <p className='ms-5'>React has virtual dom and also maniipulate the browser dom. React components return some jsx. React components is an object, When react js execute it maintain tree for node and computation himself. A normal dom change the whole thing but in react first it carefully sees what are the changes before and after, then it change virtual dom to help it in react. That is how react works.</p>
            <h3 className='ms-5 mt-3'>Difference between Props and State?</h3>
            <p className='ms-5'>Props cannot be modified, States can be modified using this, setState(). Props can be used in class and function components, states canbe used only in class components. Props are read-only, State changes can be asynchronous. Props are passed outside a components, States are passsed inside a component. Props can be changed inside child componenets, but state cannot be changed to child component.</p>

            <h3 className='ms-5 mt-3'>How useState works?</h3>
            <p className='ms-5'>We need to use useState function to have state. We can use String, Number, Array or Object in useState. UseState return array which we destructure, which is also called array destructuring. Like this const [state, setState] = useState([]). It does not work with class or outside of component, on any vanilla JavaScript function description. It uses linked list data structure. Placement of useState matters a lot.</p>
        </div>
    );
};

export default Questions;