import React, { useEffect, useState } from 'react'
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
import { Paginator } from 'primereact/paginator';
import { useDispatch, useSelector } from 'react-redux';
import { getValue } from '../../redux/actions';
import { api } from '../../redux/constants/api';
const Plot = createPlotlyComponent(Plotly);

function Chart() {
    const peopleState: PeopleStateType = useSelector((state:any)=>state.people);
    const dispatch = useDispatch();
    const [listName,setListName]=useState([])
    const [listMass,setListMass]=useState([])
    const [listHeight,setListHeight]=useState([])
    const [first,setFirst]=useState(0)
    const [data,setData] = useState([])
    const [changeApi,setChangeApi] = useState(api)
    const [loaded,setLoaded]=useState(false)

    const onChangePage=(e:any)=>{
        setLoaded(false)
        if(e.first>first){
            if(peopleState.people.next!=null){
                setFirst(e.first)
                setChangeApi(peopleState.people.next)
            }
        }else if(e.first<first){
            if(peopleState.people.previous != null){
                setFirst(e.first)
                setChangeApi(peopleState.people.previous)
            }
        }
    }

    useEffect(()=>{
        getValue(dispatch,changeApi).then(()=>{
            setLoaded(true)
            setData(peopleState.people.results)
            let namelist=[]
            let heightlist=[]
            let masslist=[]
            peopleState.people.results?.map(item=>{
                namelist.push(item.name)
                heightlist.push(item.height)
                masslist.push(item.mass)
            })
            setListName(namelist)
            setListHeight(heightlist)
            setListMass(masslist)
        })
    },[loaded])
    return (
        <div>
            <Plot
                data={[
                {
                    x: listName,
                    y: listMass,
                    name: 'Mass',
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: listName, y: listHeight,name:'Height'},
                ]}
                layout={{width: 500, height: 500, title: 'Visualization'}}
            />
            <Paginator
                first={first}
                totalRecords={100}
                rows={10}
                onPageChange={(e)=>onChangePage(e)}
                template="CurrentPageReport PrevPageLink NextPageLink"
                // template="CurrentPageReport 
                // FirstPageLink
                // PrevPageLink 
                // NextPageLink 
                // LastPageLink"
                currentPageReportTemplate="Showing {first} to {last}"
            />
        </div>
    )
}

export default Chart
