import './Result.css'
import { useState } from 'react';


function Result() {
    const [name, setname] = useState('')
    const [roll, setroll] = useState('')
    const [s1, sets1] = useState('')
    const [s2, sets2] = useState('')
    const [s3, sets3] = useState('')
    const [s4, sets4] = useState('')
    const [s5, sets5] = useState('')
    const [total, settotal] = useState('')
    const [average, setaverage] = useState('')
    const [radhe, setradhe] = useState([])

    const submitt = () => {
        const obj = {
            name: name,
            roll: roll,
            s1: s1,
            s2: s2,
            s3: s3,
            s4: s4,
            s5: s5,
            total: parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)+parseInt(s5),
            average: (parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)+parseInt(s5))/5,
            btn : <input type="button" value="delete" ></input>
            
        }
         
        setradhe([...radhe, obj])
        // console.log(main);
     
            setname(' ');
            setroll(' ');
            sets1(' ');
            sets2(' ');
            sets3(' ');
            sets4(' ');
            sets5(' ');
    
    

    }
    const deletehandle = (index) =>{
        const newdata = [...radhe];
        newdata.splice(index, 1);
        setradhe(newdata);
    } 

    return (
        <>
            <h1>STUDENT RESULT</h1>
            <hr></hr>
            <div className="radhe">
                Name:- <input type="text" onChange={(e) => { setname(e.target.value) }} id="name"></input><br></br>
                Roll No:- <input type="number" onChange={(e) => { setroll(e.target.value) }}></input><br></br>
                Subject 1:- <input type="number" onChange={(e) => { sets1(e.target.value) }} id="s1"></input><br></br>
                Subject 2:- <input type="number" onChange={(e) => { sets2(e.target.value) }} id="s2"></input><br></br>
                Subject 3:- <input type="number" onChange={(e) => { sets3(e.target.value) }} id="s3"></input><br></br>
                Subject 4:- <input type="number" onChange={(e) => { sets4(e.target.value) }} id="s4"></input><br></br>
                Subject 5:- <input type="number" onChange={(e) => { sets5(e.target.value) }} id="s5"></input><br></br>
                <input type="button" id="submit" value="submit" onClick={submitt}></input><br></br>
            </div>
            <hr></hr><hr></hr>

            <table className="radhe1">
             <thead className='heading'>   
                <tr>
                    <td>NAME</td>
                    <td>ROLL NO</td>
                    <td>S1</td>
                    <td>S2</td>
                    <td>S3</td>
                    <td>S4</td>
                    <td>S5</td>
                    <td>TOTAL</td>
                    <td>AVERAGE</td>
                    <td>REMOVE DATA</td>

                </tr>
                </thead>

               <tbody className='heading1'>     
                {
                    radhe.map((x,index) => {
                        return (
                            <>
                                <tr>
                                    <td>{x.name}</td>
                                    <td>{x.roll}</td>
                                    <td>{x.s1}</td>
                                    <td>{x.s2}</td>
                                    <td>{x.s3}</td>
                                    <td>{x.s4}</td>
                                    <td>{x.s5}</td>
                                    <td>{x.total}</td>
                                    <td>{x.average}</td>
                                    <td><button type='button' className='clear' onClick={() => deletehandle(index)}>delete</button></td>
                                </tr>
                            </>

                        )

                    })
                }
                </tbody>
</table>
        

        </>
    )
}
export default Result;