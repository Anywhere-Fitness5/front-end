// filter by: time, date, duration, type, intensity, location
import React,{useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {ClassCard} from "./ClassCard";

const ClassList = (props) => {
    const [showClasses, setShowClasses] = useState([]);
    const [classList, setClassList] = useState([]);
    
    const addClassToList = (fitnessClass) => {
        setClassList([...classList, fitnessClass]);
    };

    const deleteClassFromList = (fitClass) => {
        setClassList(classList.filter(() => !fitClass));
    };

    useEffect(() => {
        //get list of classes from API
        axiosWithAuth.get('https://anywhere-fitnesssite.herokuapp.com/classes/')
            .then((res) => {
                console.log(res);
                setShowClasses(res.data);
            })
            .catch(err => console.log(err))
    }, [showClasses]);

    return (
        {
            if (!showClasses) {
                <h3>Loading classes...</h3>
            }
            
            else {
                showClasses.forEach((el) => {
                    <ClassCard fitnessClass={el}/>
                })
            }
            
        }
    );
};

export default ClassList;