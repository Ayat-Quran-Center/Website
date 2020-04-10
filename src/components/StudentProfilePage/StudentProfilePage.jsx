import React, { Component } from 'react';
import ProgramPreview from "../ProgramPreview/ProgramPreview";

import "./pageStyle.css";

class StudentProfilePage extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="studentPage justify-content-end">
                    
                    <img className="studentImage" src="./assets/images/male.png" className="rounded-circle border border-success"/>
            <h2 class="studentName">يوسف خالد يوسف</h2>
            <hr/>
            <hr/>
            <h4> تاريخ الميلاد : ١٩٩٨/١/٢١ </h4>
            <hr/>
            <hr/>
            <h4>yossef.k.y333@gmail.com : البريد الالكتروني</h4>
            <hr/>
            <hr/>
            <h2 >البرامج التي تم اجتيازها</h2>
            <hr/>
            <hr/>
            <ProgramPreview/>
            <br/>
            <ProgramPreview/>
            <br/>
            <ProgramPreview/>
            <br/>
            <ProgramPreview/>
            <hr/>
            <hr/>
            <h2 >البرامج التي تم التسجيل فيها</h2>
            <br/>
            <br/>
            <ProgramPreview/>
            <br/>
            <ProgramPreview/>
            <br/>
            <ProgramPreview/>
            <br/>
            <ProgramPreview/>
            <br/>
            <br/>
            </div>
                     
         );
    }
}
 
export default StudentProfilePage;