// export function Hello(props: {name: string; age: number}){
//     return(
//         <div>
//             Hello {props.name} who is {props.age}
//         </div>
//     );
// }


// type HelloType = {
//     name: string;
//     age: number;
// }

// export function Hello(props: HelloType){
//     return(
//         <div>
//             Hello {props.name} who is {props.age}
//         </div>
//     )
// }


type HelloType = {
    name: string;
    age: number;
}

export function Hello({name, age}: HelloType){
    return(
        <div>
            Hello {name} who is {age}
        </div>
    )
}