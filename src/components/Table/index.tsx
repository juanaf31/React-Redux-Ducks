import React, { useEffect, useState } from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {Button} from 'primereact/button'
import {Paginator} from 'primereact/paginator'
import { PeopleStateType } from '../../classes/PeopleStateType'
import { useDispatch, useSelector } from 'react-redux'
import {getValue} from '../../redux/actions'
import { api } from '../../redux/constants/api'

function Table() {
    const peopleState: PeopleStateType = useSelector((state:any)=>state.people);
    const dispatch = useDispatch();
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
        })
        console.log(data)
    },[loaded])

    return (
        <div>
            <DataTable value={data} rows={10}>
                <Column field="name" header="Name"/>
                <Column field="height" header="Height"/>
                <Column field="mass" header="Mass"/>
                <Column field="hair_color" header="Hair Color"/>
                <Column field="skin_color" header="Skin Color"/>

            </DataTable>
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

export default Table
