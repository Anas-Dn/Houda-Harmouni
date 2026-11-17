import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useParams } from "react-router-dom";
import BoxDetailsHome from "./BoxDetailsHome";
import TestemonialDetails from "./TestemonialDetails";
import PaysMethods from "./PaysMethods";

export default function BoxDetails() {
  
  const {data} = useContext(DataContext);
  const {id} = useParams();
  const box = data.find((box) => {
    return box.id == id
  })
  return (
    <div className="">
        <BoxDetailsHome box={box}/>
        <TestemonialDetails />
        <PaysMethods/>
    </div>
  )
}
