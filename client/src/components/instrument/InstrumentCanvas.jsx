// App.js > ProjectView.jsx > ProjectMain.jsx > InstrumentList.jsx > InstrumentContainer.jsx > InstrumentCanvas.jsx

// react
import React, {useState, useEffect} from 'react';

// style
import './InstrumentCanvas.css';

// modules
import * as d3 from 'd3';

// components
const scaleObj = {
    xScale: null, yScale: null, radiusScale: null, colorXScale: null, colorYScale: null,
}
// start
export default function InstrumentCanvas({contentObj, midi, idProps, save}){
    // destructuring
    const {contentArr, updateProjectObjContent} = contentObj; // removed projectname
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
        return {x, y, weight, duration}
    })

    // state
    const [svgWidth] = useState(1100);
    const [svgHeight] = useState(1500);
    const [datumWidthPx] = useState(20);
    const [datumHeightPx] = useState(10);
    const [noteCt] = useState(Math.floor(svgWidth / datumWidthPx));
    const [pitchCt] = useState(Math.floor(svgHeight / datumHeightPx));
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

        let xCoord = noteCt - Math.floor((svgWidth - leftCoord) / datumWidthPx);
        let yCoord = 1 + Math.floor((svgHeight - topCoord) / datumHeightPx);
        let clickNoteObj = {x: xCoord, y: yCoord, weight: 1, duration: 1};

        // check if note exists (setting up var for conditions)
        let newNotesArr = notesArr.filter((noteObj) => {
            return !(
                (clickNoteObj['x']        === noteObj['x']) &&
                (clickNoteObj['y']        === noteObj['y']) &&
                (clickNoteObj['weight']   === noteObj['weight']) &&
                (clickNoteObj['duration'] === noteObj['duration'])
            )
        })
        // check if note exists (bool statement)
        newNotesArr.length === notesArr.length && newNotesArr.push(clickNoteObj);
        setNotesArr(() => {return [...newNotesArr]});
    }

    // functions
    const renderShapes = () => {
        let shapeType = 'rect';
        canvasObj.selectAll(shapeType).remove()
        const plotPoints = canvasObj.selectAll(shapeType)
            .data(notesArr)
            .enter()
            .append(shapeType);
        plotPoints
            .attr('x', (d) => {return scaleObj['xScale'](d['x'])+1})
            .attr('y', (d) => {return scaleObj['yScale'](d['y'])+1})
            .attr('width', () => {return `${datumWidthPx-1}px`})
            .attr('height', () => {return `${datumHeightPx-1}px`})
        setCanvasObj(() => {return canvasObj});
    }

    const setScales = () => {
        scaleObj['xScale'] = d3.scaleLinear()
            .domain([1, noteCt])
            .range([1, svgWidth]);
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
        _canvasElem_.append("g")
            .attr('transform', `translate(0,${svgHeight})`)
            .attr("class", "vertical")
            .call(
                d3.axisBottom(scaleObj['xScale'])
                    .ticks(noteCt)
                    .tickSize(-svgHeight)
                    .tickFormat("")
            );
        _canvasElem_.append("g")
            .attr("transform", `translate(0, 0)`)
            .attr("class", "horizontal")
            .call(
                d3.axisLeft(scaleObj['yScale'])
                    .ticks(noteCt * 2)
                    .tickSize(-svgWidth)
                    .tickFormat("")
            );
    }

    const updateCanvas = () => {
        renderShapes();
    }

    const drawCanvas = () => {
        const svgCanvas = d3.select(`#${idStr}`)
            .append("svg")
            .attr("class", "canvas")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
        setScales(scaleObj);
        renderAxes(svgCanvas, scaleObj);
        setCanvasObj(() => {return svgCanvas});
    }
    const reDrawCanvas = () => {
        d3.select(`.canvas`).remove()
        setCanvasObj(() => {return undefined})
    }
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
        contentArr[instrumentArrIdx]['midi']['pianoRoll']['notes'] = notesArr;
        canvasObj && updateProjectObjContent(contentArr);
    }, [save])
    return(
        <div className="InstrumentCanvas" onClick={(e) => {clickUpdateNotesArr(e)}} >
            <div className="canvas-container" id={idStr} ></div>
        </div>
    )
}