// App.js > ProjectView.jsx > ProjectMain.jsx > InstrumentList.jsx > InstrumentContainer.jsx > InstrumentCanvas.jsx

// react
import React, {useState, useEffect} from 'react';

// modules
import * as d3 from 'd3';

// components
const scaleObj = {
    xScale: null, yScale: null, radiusScale: null, colorXScale: null, colorYScale: null,
}
// start
export default function InstrumentCanvas({contentObj, midi, idProps, save}){
    // destructuring
    const {contentArr, projectName, updateProjectObjContent} = contentObj;
    const {pianoRoll} = midi;
    const {notes} = pianoRoll;
    const {idStr, instrumentArrIdx} = idProps;
    // const {automation} = pianoRoll;

    let newNotes = notes.map((noteObj) => {
        let {x, y, stepStart, midinote, weight, duration} = noteObj
        x = x ? x: stepStart;
        y = y ? y: midinote;
        weight = weight ? weight: 1;
        duration = duration ? duration: 1;
        return {x, y, weight: 1}
    })

    // state
    const [svgHeight] = useState(1500);
    const [svgWidth] = useState(1100);
    const [datumSize] = useState(25);
    const [pitchCt] = useState(Math.floor(svgHeight / datumSize));
    const [noteCt] = useState(Math.floor(svgWidth / datumSize));
    const [notesArr, setNotesArr] = useState([...newNotes]);
    const [canvasObj, setCanvasObj] = useState();
    // const [automationArr, setAutomationArr] = useState([...automation]);

    // event listeners
    const clickUpdateNotesArr = (e) => {
        let scrollY = e.currentTarget.scrollTop;
        let offsetTop = e.currentTarget.getBoundingClientRect().top;
        let offsetLeft = e.currentTarget.getBoundingClientRect().left;
        let clickLeft = e.pageX;
        let clickTop = e.pageY;
        
        let leftCoord = clickLeft - offsetLeft;
        let topCoord = scrollY + clickTop - offsetTop;

        let xCoord = noteCt - Math.floor((svgWidth - leftCoord) / datumSize);
        let yCoord = 1 + Math.floor((svgHeight - topCoord) / datumSize);
        let clickNoteObj = {x: xCoord, y: yCoord, weight: 1};

        // check if note exists (setting up var for conditions)
        let newNotesArr = notesArr.filter((noteObj) => {
            return !(
                (clickNoteObj['x']      === noteObj['x']) &&
                (clickNoteObj['y']      === noteObj['y']) &&
                (clickNoteObj['weight'] === noteObj['weight'])
            )
        })
        // check if note exists (bool statement)
        newNotesArr.length === notesArr.length && newNotesArr.push(clickNoteObj);
        setNotesArr(() => {return [...newNotesArr]});
    }

    // functions
    const renderCircles = () => {
        canvasObj.selectAll('circle').remove()
        const circles = canvasObj.selectAll('circle')
            .data(notesArr)
            .enter()
            .append('circle');
        circles.attr('cx', (d) => {return scaleObj['xScale'](d['x'])})
            .attr('cy', (d) => {return scaleObj['yScale'](d['y'])})
            .attr('r', () => {return (datumSize - 10)/2})
            .attr('fill', 'orange')
            .attr('stroke', (d) => {return `rgba(${(scaleObj['colorXScale'](d['x']) + scaleObj['colorYScale'](d['y'])) / 2}, 0, 0, ${d['weight']*(1/2)})`})
            .attr('stroke-width' , (d) => {return 10});
        setCanvasObj(() => {return canvasObj});
    }

    const setScales = () => {
        scaleObj['xScale'] = d3.scaleLinear()
            .domain([1, noteCt])
            .range([1 + 7, svgWidth - 7]);
        scaleObj['yScale'] = d3.scaleLinear()
            .domain([1, pitchCt])
            .range([svgHeight, 1]);
        scaleObj['colorXScale'] = d3.scaleLinear()
            .domain([0, d3.max(notesArr, (d) => {return d['x']})])
            .range([100, 101]);
        scaleObj['colorYScale'] = d3.scaleLinear()
            .domain([0, d3.max(notesArr, (d) => {return d['y']})])
            .range([100, 101]);
    }

    const renderAxes = (_canvasElem_) => {
        _canvasElem_.append('g')
            .attr('transform', `translate(0,${svgHeight})`)
            .call(d3.axisBottom(scaleObj['xScale'])
            .ticks(noteCt));
        _canvasElem_.append("g")
            .attr("transform", `translate(0, 0)`)
            .call(d3.axisLeft(scaleObj['yScale'])
            .ticks(noteCt));
    }

    const updateCanvas = () => {
        renderCircles();
    }

    const drawCanvas = () => {
        const svgCanvas = d3.select(`#${idStr}`)
            .append("svg")
            .attr("class", "canvas")
            // .attr("class", "canvas")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
        setScales(scaleObj);
        renderAxes(svgCanvas, scaleObj);
        setCanvasObj(() => {return svgCanvas});
    }
    const reDrawCanvas = () => {
        d3.select(`.canvas`).remove()
        // drawCanvas()
        setCanvasObj(() => {return undefined})
    }
    // const reDrawCircles = () => {
    //     d3.select(`#${idStr}`).selectAll('*').remove()
    // }
    // effects
    // when notes array or url updates
    useEffect(()=>{
        setNotesArr(() => {return [...newNotes]});
        canvasObj && reDrawCanvas()
    }, [document.location.pathname])
    useEffect(()=>{
        if (!canvasObj) {drawCanvas()}
        else {updateCanvas()}
    }, [canvasObj, notesArr])

    // when save is triggered
    useEffect(()=>{
        console.log('also saving here')
        contentArr[instrumentArrIdx]['midi']['pianoRoll']['notes'] = notesArr;
        // console.log('\n in INSTRUMENTCANVAS useeffect (before) ');
        // console.log('saving the notes array (before)');
        // console.log(contentArr[instrumentArrIdx]['midi']['pianoRoll']['notes']);
        // console.log('saving the notes array (after)');
        canvasObj && updateProjectObjContent(contentArr);
    }, [save])
    // useEffect(() => {
    //     console.log('hey its updating', document.location.pathname);
    //     console.log(contentObj)
    // },[])
    // start
    // https://www.codingame.com/playgrounds/3387/scales-and-axes-in-d3
    return(
        <div className="InstrumentCanvas" onClick={(e) => {clickUpdateNotesArr(e)}} >
            <div className="canvas-container" id={idStr} ></div>
        </div>
    )
}