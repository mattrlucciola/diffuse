// App.js > Main.jsx > ProjectList.jsx

// react
import React, {useState, useEffect} from 'react';

// modules

// util
import {GetJSON} from '../../util/djangoRequest';

// components
import ProjectListElem from './ProjectListElem';

// start
export default function ProjectList(){
    const [listElemArr, setListElemArr] = useState([])
    const buildListElemArr = async () => {
        let url = `/api/project/`;
        let resJSON = await GetJSON(url);
        let projectElemArr = resJSON.map((projectObj, idx) => {
            return <ProjectListElem projectObj={projectObj} key={`ple-${idx}`} />
        })
        setListElemArr(projectElemArr)
    }

    useEffect(()=>{
        buildListElemArr()
    },[])
    return(
        <div className="ProjectList fade-in">
            {listElemArr}
        </div>
    )
}